// Run with: node --test tests/spell-tags.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const context={window:{}};
vm.createContext(context);
for(const file of ['data.js','bulk-level78.js','spell-tags.js']){
  vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
}
const tagger=context.window.SPELL_TAGS;
const tags=name=>Array.from(tagger.tagsFor({name,status:'spellbook'}));
test('all requested category labels are available',()=>{
  for(const tag of ['Offensive','Defensive','Buff','Damage','Control','Summon','Negative Energy','Kill','True Name'])
    assert.ok(Array.from(tagger.core).includes(tag),tag);
});
test('curated spell tags can overlap without conflating effects',()=>{
  assert.ok(tags('Enervation').includes('Negative Energy'));
  assert.ok(tags('Enervation').includes('Debuff'));
  assert.ok(!tags('Enervation').includes('Damage'));
  assert.ok(tags('Unname').includes('True Name'));
  assert.ok(tags('Unname').includes('Kill'));
  assert.ok(tags('Haste').includes('Buff'));
  assert.ok(!tags('Trap the Soul').includes('Kill'));
});
test('user-authored tags are normalised and limited safely',()=>{
  assert.deepEqual(Array.from(tagger.normalise(['Buff','buff','  Custom <tag>  ',null,'True Name'])),['Buff','Custom tag','True Name']);
  assert.equal(tagger.normalise(Array.from({length:30},(_,i)=>'Tag'+i)).length,16);
});
test('unlisted spells stay untagged; cyst family gets its own label',()=>{
  assert.deepEqual(tags('Brand New Custom Spell'),[]);
  assert.ok(Array.from(tagger.tagsFor({name:'Necrotic Awareness',status:'cyst'})).includes('Necrotic Cyst'));
});
test('existing catalogue receives a useful baseline without modifying spell stats',()=>{
  const spells=context.window.STARTER_SPELLS;
  assert.ok(Array.isArray(spells)&&spells.length>=200);
  const covered=spells.filter(s=>tagger.tagsFor(s).length).length;
  assert.ok(covered>=200,`Expected useful tag coverage; got ${covered}`);
  assert.ok(spells.some(s=>s.name==='Unname'));
});
