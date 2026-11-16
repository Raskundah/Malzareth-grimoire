/* Malzareth's Grimoire — dependency-free three-dimensional polyhedral dice. */
(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const canvas = byId('dice-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const V = (x,y,z) => [x,y,z];
  const add = (a,b) => V(a[0]+b[0],a[1]+b[1],a[2]+b[2]);
  const sub = (a,b) => V(a[0]-b[0],a[1]-b[1],a[2]-b[2]);
  const scale = (a,k) => V(a[0]*k,a[1]*k,a[2]*k);
  const dot = (a,b) => a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
  const cross = (a,b) => V(a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]);
  const normal = a => scale(a,1/(Math.hypot(...a)||1));
  const centroid = (v,face) => scale(face.reduce((sum,i)=>add(sum,v[i]),V(0,0,0)),1/face.length);
  const orient = (vertices,faces) => faces.map(f=>{
    const n=cross(sub(vertices[f[1]],vertices[f[0]]),sub(vertices[f[2]],vertices[f[0]]));
    return dot(n,centroid(vertices,f))<0?[...f].reverse():f;
  });
  function hull(vertices){
    const faces=[],eps=1e-5;
    for(let a=0;a<vertices.length;a++) for(let b=a+1;b<vertices.length;b++) for(let c=b+1;c<vertices.length;c++){
      const n=cross(sub(vertices[b],vertices[a]),sub(vertices[c],vertices[a]));
      if(Math.hypot(...n)<eps)continue;
      let pos=false,neg=false;
      for(let j=0;j<vertices.length;j++){
        if(j===a||j===b||j===c)continue;
        const d=dot(n,sub(vertices[j],vertices[a]));
        if(d>eps)pos=true;
        if(d<-eps)neg=true;
        if(pos&&neg)break;
      }
      if(!(pos&&neg))faces.push([a,b,c]);
    }
    return orient(vertices,faces);
  }
  function geometry(sides) {
    let v=[],f=[];
    if(sides===4){
      v=[V(1,1,1),V(-1,-1,1),V(-1,1,-1),V(1,-1,-1)];
      f=[[0,1,2],[0,3,1],[0,2,3],[1,3,2]];
    }else if(sides===6){
      v=[V(-1,-1,-1),V(1,-1,-1),V(1,1,-1),V(-1,1,-1),V(-1,-1,1),V(1,-1,1),V(1,1,1),V(-1,1,1)];
      f=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]];
    }else if(sides===8){
      v=[V(1,0,0),V(-1,0,0),V(0,1,0),V(0,-1,0),V(0,0,1),V(0,0,-1)];
      f=[[0,2,4],[2,1,4],[1,3,4],[3,0,4],[2,0,5],[1,2,5],[3,1,5],[0,3,5]];
    }else if(sides===10||sides===100){
      v=[V(0,0,1.7),V(0,0,-1.7)];
      for(let i=0;i<10;i++){
        const t=i*Math.PI/5;
        v.push(V(Math.cos(t)*1.08,Math.sin(t)*1.08,i%2===0?0.38:-0.38));
      }
      for(let i=0;i<5;i++){
        const high=2+2*i, low=high+1, nextHigh=2+(2*(i+1))%10, nextLow=2+(2*(i+1)+1)%10;
        f.push([0,high,low,nextHigh],[1,low,nextHigh,nextLow]);
      }
    }else{
      const phi=(1+Math.sqrt(5))/2;
      const icoV=[V(-1,phi,0),V(1,phi,0),V(-1,-phi,0),V(1,-phi,0),V(0,-1,phi),V(0,1,phi),V(0,-1,-phi),V(0,1,-phi),V(phi,0,-1),V(phi,0,1),V(-phi,0,-1),V(-phi,0,1)];
      const icoF=hull(icoV);
      if(sides===20){v=icoV;f=icoF;}
      else if(sides===12){
        v=icoF.map(face=>normal(centroid(icoV,face)));
        f=icoV.map((vert,i)=>{
          const axis=normal(vert);
          const guide=Math.abs(axis[2])>.85?V(0,1,0):V(0,0,1);
          const tangent=normal(cross(guide,axis));
          const bitangent=cross(axis,tangent);
          return icoF.map((face,index)=>face.includes(i)?index:-1).filter(n=>n>=0)
            .sort((a,b)=>{
              const ca=v[a],cb=v[b];
              return Math.atan2(dot(ca,bitangent),dot(ca,tangent))-Math.atan2(dot(cb,bitangent),dot(cb,tangent));
            });
        });
      }
    }
    const maxRadius=Math.max(...v.map(a=>Math.hypot(...a)));
    return {vertices:v.map(a=>scale(a,1/maxRadius)),faces:orient(v,f),sides};
  }

  const cache = new Map();
  function mesh(sides){
    const n=sides===100?10:sides;
    if(!cache.has(n))cache.set(n,geometry(n));
    return cache.get(n);
  }
  let angles=V(-.35,.72,.1),rolling=false;
  const project = v => {
    const factor=510/(4.65-v[2]);
    return [320+v[0]*factor,225-v[1]*factor];
  };
  function transform(p,rot){
    let [x,y,z]=p;
    const cx=Math.cos(rot[0]),sx=Math.sin(rot[0]),cy=Math.cos(rot[1]),sy=Math.sin(rot[1]),cz=Math.cos(rot[2]),sz=Math.sin(rot[2]);
    [y,z]=[y*cx-z*sx,y*sx+z*cx];
    [x,z]=[x*cy+z*sy,-x*sy+z*cy];
    [x,y]=[x*cz-y*sz,x*sz+y*cz];
    return V(x,y,z);
  }
  function draw(){
    ctx.clearRect(0,0,640,490);
    const glow=ctx.createRadialGradient(320,232,20,320,232,230);
    glow.addColorStop(0,'rgba(151,93,184,.23)');
    glow.addColorStop(1,'rgba(151,93,184,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,640,490);
    ctx.beginPath();ctx.ellipse(320,380,130,24,0,0,Math.PI*2);
    ctx.fillStyle='rgba(0,0,0,.32)';ctx.fill();
    const choice=Number(byId('die-type').value)||20;
    const geo=mesh(choice);
    const verts=geo.vertices.map(v=>transform(v,angles));
    const faces=geo.faces.map((indices,i)=>{
      const c=centroid(verts,indices);
      const n=normal(cross(sub(verts[indices[1]],verts[indices[0]]),sub(verts[indices[2]],verts[indices[0]])));
      return {indices,i,c,n};
    }).filter(o=>o.n[2]>0.005).sort((a,b)=>a.c[2]-b.c[2]);
    const light=normal(V(-.35,.75,1));
    for(const face of faces){
      const points=face.indices.map(i=>project(verts[i]));
      ctx.beginPath();
      points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));
      ctx.closePath();
      const lum=Math.max(0,dot(face.n,light));
      ctx.fillStyle='hsl(264 29% '+(16+lum*24)+'%)';ctx.fill();
      ctx.lineWidth=2.7;ctx.strokeStyle='rgba(228,187,122,.83)';ctx.stroke();
      const center=project(face.c);
      const text=face.i+1;
      const fontSize=choice===20?19:choice===12?21:24;
      ctx.font='bold '+fontSize+'px Georgia,serif';
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle='rgba(247,225,187,.95)';
      if(choice===100)ctx.fillText(String((text%10)*10).padStart(2,'0'),center[0],center[1]);
      else ctx.fillText(String(text),center[0],center[1]);
    }
  }
  function randInt(sides){
    // Rejection sampling removes modulo bias.
    const span=4294967296;
    const limit=Math.floor(span/sides)*sides;
    const values=new Uint32Array(1);
    do{crypto.getRandomValues(values);}while(values[0]>=limit);
    return values[0]%sides+1;
  }
  const history=[];
  const countEl=byId('dice-count'),modEl=byId('dice-modifier'),rollBtn=byId('roll-dice');
  function roll(){
    if(rolling)return;
    const sides=Number(byId('die-type').value);
    const count=Math.max(1,Math.min(10,Math.trunc(Number(countEl.value)||1)));
    const modifier=Math.max(-100,Math.min(100,Math.trunc(Number(modEl.value)||0)));
    countEl.value=count;modEl.value=modifier;
    const dice=Array.from({length:count},()=>randInt(sides));
    const total=dice.reduce((sum,n)=>sum+n,modifier);
    const label=count+'d'+sides+(modifier>0?' + '+modifier:modifier<0?' − '+(-modifier):'');
    const critical=count===1&&sides===20?(dice[0]===20?' · Natural 20!':dice[0]===1?' · Natural 1!':''):'';
    rolling=true;rollBtn.disabled=true;byId('dice-result').textContent='Rolling…';
    byId('dice-breakdown').textContent='The dice are in motion…';
    const start=performance.now(),duration=1300;
    const origin=[...angles];
    // Aim the rolled face toward the viewer at the end of the spin.
    // For multiple dice, the animation depicts the first roll; totals list all.
    const dieMesh=mesh(sides);
    const faceIndex=sides===100?Math.floor((dice[0]-1)/10):(dice[0]-1);
    const face=dieMesh.faces[faceIndex];
    const va=dieMesh.vertices[face[0]],vb=dieMesh.vertices[face[1]],vc=dieMesh.vertices[face[2]];
    const faceNormal=normal(cross(sub(vb,va),sub(vc,va)));
    const aimX=Math.atan2(faceNormal[1],faceNormal[2]);
    const nAfterX=transform(faceNormal,V(aimX,0,0));
    const aimY=-Math.atan2(nAfterX[0],nAfterX[2]);
    const target=[aimX+Math.PI*8,aimY+Math.PI*10,(Math.random()-.5)*1.2+Math.PI*6];
    function frame(now){
      const t=Math.min(1,(now-start)/duration);
      const eased=1-Math.pow(1-t,3);
      angles=V(...origin.map((a,i)=>a+(target[i]-a)*eased));
      draw();
      if(t<1)requestAnimationFrame(frame);
      else{
        rolling=false;rollBtn.disabled=false;
        byId('dice-result').textContent=String(total)+critical;
        byId('dice-breakdown').textContent=label+' → ['+dice.join(', ')+']'+(modifier?' '+(modifier>0?'+ ':'− ')+Math.abs(modifier):'')+' = '+total;
        history.unshift({label,total,dice});
        history.splice(10);
        byId('dice-history').innerHTML=history.map(h=>'<li><strong>'+h.total+'</strong> · '+h.label+' <span>('+h.dice.join(', ')+')</span></li>').join('');
      }
    }
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      rolling=false;rollBtn.disabled=false;
      byId('dice-result').textContent=String(total)+critical;
      byId('dice-breakdown').textContent=label+' → ['+dice.join(', ')+'] = '+total;
      history.unshift({label,total,dice});history.splice(10);
      byId('dice-history').innerHTML=history.map(h=>'<li><strong>'+h.total+'</strong> · '+h.label+'</li>').join('');
      return;
    }
    requestAnimationFrame(frame);
  }
  byId('die-type').addEventListener('change',draw);
  rollBtn.addEventListener('click',roll);
  draw();
})();