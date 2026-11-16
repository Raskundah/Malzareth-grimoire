/* Malzareth's Grimoire v1.0 — vanilla JavaScript, no dependencies or trackers. */
(() => {
  'use strict';
  const STORAGE_KEY = 'ashen-crown-grimoire-v1';
  const MAX_LEVEL = 9;
  const defaults = window.STARTER_SPELLS || [];
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const uid = () => (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const labelLevel = (l) => Number(l)===0 ? 'Cantrip' : `${l}${({1:'st',2:'nd',3:'rd'}[l] || 'th')} circle`;
  const statusLabels = {confirmed:'In spellbook',recorded:'Later preparation',cyst:'Mother Cyst',custom:'My addition'};
  const byName = (name) => state.spells.find(s => s.name === name);
  const stateFactory = () => {
    const spells = structuredClone(defaults);
    const prepared = [];
    Object.entries(window.STARTER_PREPARATION||{}).forEach(([level, names]) => names.forEach(name => {
      const spell = spells.find(s => s.name === name && s.level === Number(level));
      if(spell) prepared.push({id: uid(), spellId: spell.id, used:false});
    }));
    return {version:1,spells,prepared,slots:[...(window.DEFAULT_SLOTS||[5,8,8,7,6,6,5]),0,0,0],journal:'',lastSaved:new Date().toISOString()};
  };
  const normalizeSpell = (s) => {
    const allowedStatus=['confirmed','recorded','cyst','custom'];
    const clean = (k,max=4000) => String(s?.[k]??'').slice(0,max);
    return {
      id:clean('id',160)||uid(),name:clean('name',100).trim(),level:Math.max(0,Math.min(9,Math.trunc(Number(s?.level)||0))),
      school:clean('school',80),status:allowedStatus.includes(s?.status)?s.status:'custom',source:clean('source',120),
      casting:clean('casting',140),components:clean('components',140),range:clean('range',200),duration:clean('duration',200),
      save:clean('save',200),description:clean('description'),notes:clean('notes'),favorite:!!s?.favorite
    };
  };
  const normalizeData = (input) => {
    if(!input || !Array.isArray(input.spells) || !Array.isArray(input.prepared)) throw new Error('Not a valid grimoire backup.');
    if(input.spells.length>2500 || input.prepared.length>1000) throw new Error('Backup is too large.');
    const spells = input.spells.map(normalizeSpell).filter(s=>s.name);
    const ids = new Set();
    for(const s of spells){if(ids.has(s.id)) s.id=uid(); ids.add(s.id);}
    const prepared = input.prepared.filter(p=>p && ids.has(p.spellId)).map(p=>({id:uid(),spellId:String(p.spellId),used:!!p.used}));
    const slots = Array.from({length:10},(_,l)=>{
      const n=Number(input.slots?.[l]);return Number.isFinite(n)?Math.max(0,Math.min(50,Math.trunc(n))):(window.DEFAULT_SLOTS?.[l]||0);
    });
    for(let l=0;l<=MAX_LEVEL;l++){
      const count = prepared.filter(p=>spells.find(s=>s.id===p.spellId)?.level===l).length;
      if(count>slots[l]) slots[l]=count;
    }
    return {version:1,spells,prepared,slots,journal:String(input.journal??'').slice(0,100000),lastSaved:new Date().toISOString()};
  };
  const load = () => {try{const raw=localStorage.getItem(STORAGE_KEY);return raw?normalizeData(JSON.parse(raw)):stateFactory();}catch(e){console.warn('Unable to load local save',e);return stateFactory();}};
  let state=load();
  let levelFilter='all';
  let view='library';
  let toastTimeout;
  function persist(){
    state.lastSaved = new Date().toISOString();
    try {localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
    catch(e){toast('Could not save locally. Export a backup to avoid losing changes.'); console.error(e);}
  }
  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),3500);}
  function currentCount(level){return state.prepared.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===level).length;}
  function updateStats(){
    $('#stat-spells').textContent=state.spells.length;
    $('#stat-prep').textContent=`${state.prepared.length} / ${state.slots.reduce((a,b)=>a+b,0)}`;
    $('#stat-cast').textContent=state.prepared.filter(p=>p.used).length;
    $('#stat-dc').textContent='28';
  }
  function makeFilters(){
    $('#level-filters').innerHTML=['all',0,1,2,3,4,5,6,7,8,9].map(l=>{
      const text = l==='all'?'All circles':l===0?'0':String(l);
      return `<button type="button" class="filter-pill ${String(l)===String(levelFilter)?'active':''}" data-level="${l}" aria-pressed="${String(l)===String(levelFilter)}">${text}</button>`;
    }).join('');
  }
  function renderLibrary(){
    const q=$('#search').value.trim().toLocaleLowerCase();
    const status=$('#status-filter').value;
    const favorites=$('#only-faves').checked;
    const spells=state.spells.filter(s=>(levelFilter==='all'||s.level===Number(levelFilter)) && (status==='all'||s.status===status) && (!favorites||s.favorite) && (!q||[s.name,s.school,s.source,s.description,s.notes,s.components].join(' ').toLocaleLowerCase().includes(q))).sort((a,b)=>a.level-b.level||a.name.localeCompare(b.name));
    $('#result-count').textContent=`${spells.length} ${spells.length===1?'spell':'spells'} shown`;
    $('#spell-list').innerHTML=spells.length?spells.map(s=>{
      const available=currentCount(s.level)<state.slots[s.level];
      return `<article class="spell-card">
        <div class="spell-top"><span class="spell-level" title="${esc(labelLevel(s.level))}">${s.level}</span><div class="spell-head"><h3>${esc(s.name)}</h3><div class="spell-tags">${s.school?`<span class="tag ${s.school==='Necromancy'?'necro':''}">${esc(s.school)}</span>`:'<span class="tag">School unverified</span>'}<span class="tag ${esc(s.status)}">${esc(statusLabels[s.status]||'Custom')}</span></div></div></div>
        <p class="spell-description ${s.description?'':'empty'}">${s.description?esc(s.description):'Add effects, components, and tactics in this spell record.'}</p>
        <div class="spell-actions"><button type="button" class="text-button" data-action="edit" data-id="${esc(s.id)}">View / edit</button><button type="button" class="star-button ${s.favorite?'starred':''}" data-action="favorite" data-id="${esc(s.id)}" aria-label="${s.favorite?'Remove from':'Add to'} favourites" title="Favourite">${s.favorite?'★':'☆'}</button><button type="button" class="add-button" data-action="quick-prepare" data-id="${esc(s.id)}" ${available?'':'disabled title="All slots are filled"'}>＋ Prepare</button></div>
      </article>`;
    }).join(''):'<div class="empty-state"><strong>No spells found</strong><p>Try a different search or filter, or create a new inscription.</p></div>';
    makeFilters();
  }
  function prepare(spellId){
    const s=state.spells.find(x=>x.id===spellId);
    if(!s)return;
    if(currentCount(s.level)>=state.slots[s.level]){toast(`${labelLevel(s.level)} has no free slots. Adjust daily slots in Notes & data.`);return;}
    state.prepared.push({id:uid(),spellId:s.id,used:false});
    persist();render();toast(`${s.name} prepared.`);
  }
  function renderPrep(){
    const max=Math.max(6,...state.spells.map(s=>s.level),...state.slots.map((n,i)=>n>0?i:0));
    $('#preparation-list').innerHTML=Array.from({length:max+1},(_,level)=>{
      const spells=state.spells.filter(s=>s.level===level).sort((a,b)=>a.name.localeCompare(b.name));
      const entries=state.prepared.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===level);
      const total=state.slots[level]||0;
      const used=entries.filter(p=>p.used).length;
      const count=entries.length;
      const hasNecro=entries.some(p=>state.spells.find(s=>s.id===p.spellId)?.school==='Necromancy');
      const open=Array.from({length:Math.max(total-count,0)},(_,n)=>{
        const reserve=level===6 && n===0;
        return `<div class="prep-item is-open ${reserve?'is-reserved':''}"><span class="prep-name">${reserve?'✧ Open — Alacritous Cogitation':'Empty spell slot'}</span></div>`;
      }).join('');
      const content=entries.map(p=>{
        const s=state.spells.find(s=>s.id===p.spellId);
        return `<div class="prep-item ${p.used?'is-cast':''}" title="${esc(s.school||'School unverified')}"><span class="prep-name">${esc(s.name)}${s.school==='Necromancy'?' ✦':''}</span><button type="button" data-action="toggle-cast" data-id="${esc(p.id)}" class="cast-button ${p.used?'is-restoring':''}">${p.used?'Restore':'Cast'}</button><button type="button" class="remove-prep" data-action="remove-prep" data-id="${esc(p.id)}" title="Remove prepared spell" aria-label="Remove ${esc(s.name)}">×</button></div>`;
      }).join('');
      return `<section class="prep-section"><div class="prep-top"><div class="prep-heading"><div class="prep-symbol">${level===0?'◌':level}</div><div><h3>${esc(labelLevel(level))}</h3><p>${used} cast · ${count-used} ready</p></div></div><div><div class="prep-meter">${count} / ${total} slots</div><div class="meter-track"><div class="meter-fill" style="width:${total?Math.min(100,100*count/total):0}%"></div></div></div></div><div class="prep-content"><div class="prep-items">${content||(!open?'<div class="prep-item is-open"><span class="prep-name">No daily slots set</span></div>':'')}${open}</div><div class="prep-controls"><select aria-label="Choose a spell for ${esc(labelLevel(level))}" id="prep-select-${level}" ${spells.length?'':'disabled'}>${spells.length?spells.map(s=>`<option value="${esc(s.id)}">${esc(s.name)}</option>`).join(''):'<option>No known spells at this level</option>'}</select><button type="button" class="btn btn-outline" data-action="prepare-level" data-level="${level}" ${count>=total||!spells.length?'disabled':''}>＋ Prepare</button></div>${total>0&&!hasNecro?'<div class="prep-warning">✧ Necromancy specialist slot not yet represented at this level.</div>':''}</div></section>`;
    }).join('');
  }
  function renderSlotControls(){
    $('#slot-controls').innerHTML=state.slots.map((n,l)=>`<label class="slot-control">${l===0?'Cantrip':`Level ${l}`}<input type="number" min="0" max="50" step="1" value="${n}" data-slot-level="${l}" aria-label="Daily slots for ${esc(labelLevel(l))}"></label>`).join('');
  }
  function render(){updateStats();renderLibrary();renderPrep();renderSlotControls();}
  function setView(name){
    if(!['library','prepared','journal'].includes(name))return;
    view=name;
    $$('.view').forEach(el=>el.hidden=(el.id!==`view-${name}`));
    $$('[data-view]').forEach(el=>{el.classList.toggle('active',el.dataset.view===name);if(el.dataset.view===name)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
    if(name==='prepared')renderPrep();
    if(name==='journal')renderSlotControls();
    window.scrollTo({top:Math.min(320,window.scrollY),behavior:'auto'});
  }
  function openEditor(id=null){
    const spell=id?state.spells.find(s=>s.id===id):null;
    $('#spell-form').reset();
    $('#edit-id').value=spell?.id||'';
    $('#dialog-title').textContent=spell?'Edit inscription':'New inscription';
    const fields={name:'spell-name',level:'spell-level',school:'spell-school',status:'spell-status',source:'spell-source',casting:'spell-casting',components:'spell-components',range:'spell-range',duration:'spell-duration',save:'spell-save',description:'spell-description',notes:'spell-notes'};
    for(const [key,sel] of Object.entries(fields)){$(`#${sel}`).value=spell?.[key]??(key==='status'?'custom':'');}
    $('#spell-favorite').checked=!!spell?.favorite;
    $('#delete-spell').hidden=!spell;
    $('#spell-dialog').showModal();
  }
  function closeEditor(){$('#spell-dialog').close();}
  function saveEditor(event){
    event.preventDefault();
    const name=$('#spell-name').value.trim();if(!name){$('#spell-name').focus();toast('A spell needs a name.');return;}
    const get=(id)=>$(`#spell-${id}`).value.trim();
    const previous=state.spells.find(x=>x.id===$('#edit-id').value);
    const editing=!!previous;
    const data=normalizeSpell({
      id:previous?.id||uid(),name,level:Number($('#spell-level').value),school:get('school'),status:get('status'),source:get('source'),
      casting:get('casting'),components:get('components'),range:get('range'),duration:get('duration'),save:get('save'),
      description:get('description'),notes:get('notes'),favorite:$('#spell-favorite').checked
    });
    if(previous){
      const currentPrepared=state.prepared.filter(p=>p.spellId===previous.id).length;
      if(currentPrepared && previous.level!==data.level && currentCount(data.level)+currentPrepared>state.slots[data.level]){
        toast('Clear some prepared spells or increase available slots before changing this spell level.');return;
      }
      state.spells[state.spells.indexOf(previous)]=data;
    }else state.spells.push(data);
    persist();closeEditor();render();toast(editing?'Spell inscription updated.':'Spell added to the grimoire.');
  }
  function deleteSpell(){
    const id=$('#edit-id').value;
    const s=state.spells.find(s=>s.id===id);if(!s)return;
    if(!confirm(`Delete “${s.name}” from the spellbook and remove its prepared slots?`))return;
    state.spells=state.spells.filter(s=>s.id!==id);
    state.prepared=state.prepared.filter(p=>p.spellId!==id);
    persist();closeEditor();render();toast('Spell deleted.');
  }
  function resetCasts(){
    if(!confirm('Restore all expended prepared spells? This leaves your prepared list intact.'))return;
    state.prepared.forEach(p=>p.used=false);persist();render();toast('All prepared spells restored.');
  }
  function clearPrepared(){
    if(!confirm('Clear every prepared spell slot? Your spellbook itself will be unchanged.'))return;
    state.prepared=[];persist();render();toast('Preparation cleared.');
  }
  function loadRecordedPreparation(){
    if(!confirm('Replace current preparation with the last recorded campaign snapshot? Cast tracking will reset.'))return;
    const next=[];
    for(const [level,names] of Object.entries(window.STARTER_PREPARATION||{})){
      for(const name of names){
        const spell=state.spells.find(s=>s.name===name && s.level===Number(level));
        if(spell && next.filter(p=>state.spells.find(s=>s.id===p.spellId)?.level===Number(level)).length<state.slots[Number(level)]) next.push({id:uid(),spellId:spell.id,used:false});
      }
    }
    state.prepared=next;persist();render();toast('Last recorded preparation loaded.');
  }
  function exportBackup(){
    const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;
    a.download=`malzareth-grimoire-${new Date().toISOString().slice(0,10)}.json`;
    document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Grimoire backup exported.');
  }
  async function importBackup(file){
    if(!file)return;
    try{
      if(file.size>4000000)throw new Error('Backup file is too large.');
      const parsed=JSON.parse(await file.text());
      const next=normalizeData(parsed);
      if(!confirm(`Import backup containing ${next.spells.length} spells? This replaces the current device's grimoire. Export your current data first if needed.`))return;
      state=next;persist();$('#journal-notes').value=state.journal;render();toast('Grimoire imported successfully.');
    }catch(error){toast(`Import failed: ${error.message}`);}finally{$('#import-file').value='';}
  }
  function restoreDefaults(){
    if(!confirm('Reset ALL spells, edits, cast slots and notes to the original campaign starting record? Export a backup first if you wish to keep your changes.'))return;
    state=stateFactory();persist();$('#journal-notes').value=state.journal;render();toast('Starting spellbook restored.');
  }
  function actions(event){
    const nav=event.target.closest('[data-view]');if(nav){setView(nav.dataset.view);return;}
    const pill=event.target.closest('[data-level]');if(pill && pill.matches('.filter-pill')){levelFilter=pill.dataset.level==='all'?'all':Number(pill.dataset.level);renderLibrary();return;}
    const btn=event.target.closest('[data-action]');if(!btn)return;
    const {action,id,level}=btn.dataset;
    if(action==='edit')openEditor(id);
    else if(action==='favorite'){const s=state.spells.find(s=>s.id===id);if(s){s.favorite=!s.favorite;persist();renderLibrary();}}
    else if(action==='quick-prepare')prepare(id);
    else if(action==='prepare-level'){const sel=$(`#prep-select-${level}`);if(sel?.value)prepare(sel.value);}
    else if(action==='toggle-cast'){const p=state.prepared.find(p=>p.id===id);if(p){p.used=!p.used;persist();render();}}
    else if(action==='remove-prep'){state.prepared=state.prepared.filter(p=>p.id!==id);persist();render();}
  }
  document.addEventListener('click',actions);
  $('#header-add').addEventListener('click',()=>openEditor());
  $('#add-spell').addEventListener('click',()=>openEditor());
  $('#dialog-close').addEventListener('click',closeEditor);
  $('#cancel-spell').addEventListener('click',closeEditor);
  $('#spell-form').addEventListener('submit',saveEditor);
  $('#delete-spell').addEventListener('click',deleteSpell);
  $('#spell-dialog').addEventListener('click',e=>{if(e.target.id==='spell-dialog')closeEditor();});
  $('#search').addEventListener('input',renderLibrary);
  $('#status-filter').addEventListener('change',renderLibrary);
  $('#only-faves').addEventListener('change',renderLibrary);
  $('#reset-casts').addEventListener('click',resetCasts);
  $('#clear-prep').addEventListener('click',clearPrepared);
  $('#load-recorded-prep').addEventListener('click',loadRecordedPreparation);
  $('#export-data').addEventListener('click',exportBackup);
  $('#import-data').addEventListener('click',()=>$('#import-file').click());
  $('#import-file').addEventListener('change',e=>importBackup(e.target.files?.[0]));
  $('#restore-defaults').addEventListener('click',restoreDefaults);
  $('#journal-notes').value=state.journal;
  $('#journal-notes').addEventListener('input',e=>{state.journal=e.target.value;persist();});
  $('#slot-controls').addEventListener('change',e=>{
    if(!e.target.matches('[data-slot-level]'))return;
    const level=Number(e.target.dataset.slotLevel);
    const next=Math.max(0,Math.min(50,Math.trunc(Number(e.target.value)||0)));
    if(next<currentCount(level)){toast(`Remove prepared spells before reducing below ${currentCount(level)} slots.`);renderSlotControls();return;}
    state.slots[level]=next;persist();render();
  });
  document.addEventListener('keydown',event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){
      event.preventDefault();setView('library');$('#search').focus();
    }
  });
  render();setView('library');
  if('serviceWorker' in navigator && (location.protocol==='https:' || ['localhost','127.0.0.1'].includes(location.hostname))){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(err=>console.warn('Offline caching unavailable',err)));
  }
})();