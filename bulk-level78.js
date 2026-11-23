/* The Ashen Crown: bulk archive from Malzareth's confirmed two-year spell research.
   Scope: 7th- and 8th-level sorcerer/wizard spells in approved 3.5 sources.
   Neither Evocation nor Enchantment is available to this specialist.
   This is a spellbook catalogue, NOT the prepared-spell list. Sources are cited
   by book; descriptions are original brief aids, not copied rules text. */
(() => {
  'use strict';
  const bySource = [
    ['Player’s Handbook', {
      7:{
        Abjuration:['Banishment','Sequester','Spell Turning'],
        Conjuration:['Drawmij’s Instant Summons','Mordenkainen’s Magnificent Mansion','Phase Door','Plane Shift','Summon Monster VII','Teleport Object','Greater Teleport'],
        Divination:['Greater Arcane Sight','Greater Scrying','Vision'],
        Illusion:['Mass Invisibility','Project Image','Greater Shadow Conjuration','Simulacrum'],
        Necromancy:['Control Undead','Finger of Death','Symbol of Stunning','Symbol of Weakness','Waves of Exhaustion'],
        Transmutation:['Control Weather','Ethereal Jaunt','Reverse Gravity','Statue'],
        Universal:['Limited Wish']
      },
      8:{
        Abjuration:['Dimensional Lock','Mind Blank','Prismatic Wall','Protection from Spells'],
        Conjuration:['Incendiary Cloud','Maze','Greater Planar Binding','Summon Monster VIII','Trap the Soul'],
        Divination:['Discern Location','Moment of Prescience','Greater Prying Eyes'],
        Illusion:['Scintillating Pattern','Screen','Greater Shadow Evocation'],
        Necromancy:['Clone','Create Greater Undead','Horrid Wilting','Symbol of Death','Symbol of Insanity'],
        Transmutation:['Iron Body','Polymorph Any Object','Temporal Stasis']
      }
    }],
    ['Spell Compendium', {
      7:{
        Abjuration:['Antimagic Ray','Greater Dispelling Screen','Energy Immunity','Ghost Trap','Hide from Dragons','Ironguard','Planar Bubble'],
        Conjuration:['Call Kolyarut','Dragon Ally','Stun Ray'],
        Illusion:['Solipsism'],
        Necromancy:['Arrow of Bone','Avasculate','Awaken Undead','Barghest’s Feast','Energy Ebb','Evil Glare','Kiss of the Vampire','Sword of Darkness'],
        Transmutation:['Animate Breath','Bite of the Werebear','Body of War','Brilliant Aura','Elemental Body','Energy Transformation Field','Glass Strike','Spell Matrix','Greater Stone Shape','Synostodweomer']
      },
      8:{
        Abjuration:['Spell Engine','Wall of Greater Dispel Magic'],
        Conjuration:['Fierce Pride of the Beastlands','Greater Plane Shift'],
        Illusion:['Shifting Paths','Superior Invisibility'],
        Necromancy:['Avascular Mass','Greater Bestow Curse','Blackfire','Heart of Stone','Skeletal Guard','Veil of Undeath'],
        Transmutation:['Excavate','Flensing','Ghostform','Mass Make Manifest','Greater Stunning Breath']
      }
    }],
    ['Complete Mage',{
      7:{
        Abjuration:['Energy Absorption'],
        Conjuration:['Choking Cobwebs'],
        Necromancy:['Necrotic Curse','Retributive Enervation','Greater Seed of Undeath'],
        Transmutation:['Adamantine Wings','Unicorn Heart']
      },
      8:{
        Abjuration:['Mysterious Redirection'],
        Conjuration:['Deadly Lahar'],
        Necromancy:['Touch of the Graveborn'],
        Transmutation:['Dreaded Form of the Eye Tyrant','Unyielding Form of Inevitable Death']
      }
    }],
    ['Complete Arcane',{
      7:{
        Abjuration:['Greater Sign of Sealing'],
        Illusion:['Illusory Pit'],
        Necromancy:['Arrow of Bone'],
        Transmutation:['Brilliant Blade','Fiendform','Imbue Familiar with Spell Ability']
      },
      8:{
        Abjuration:['Greater Dispelling Screen'],
        Transmutation:['Ghostform']
      }
    }],
    ['Libris Mortis',{
      7:{
        Abjuration:['Ghost Trap'],
        Necromancy:['Avasculate','Awaken Undead','Energy Ebb','Necrotic Tumor']
      },
      8:{
        Necromancy:['Avascular Mass','Necrotic Empowerment','Veil of Undeath'],
        Transmutation:['Ghostform']
      }
    }],
    ['Player’s Handbook II',{
      7:{
        Conjuration:['Greater Luminous Assassin'],
        Necromancy:['Pulse of Hate'],
        Transmutation:['Mass Animalistic Power','As the Frost']
      },
      8:{
        Abjuration:['Chain Dispel'],
        Necromancy:['Plague'],
        Transmutation:['Greater Celerity']
      }
    }],
    ['Frostburn',{
      7:{Abjuration:['Greater Glacial Ward']},
      8:{Transmutation:['Fimbulwinter']}
    }],
    ['Tome of Magic',{
      7:{Conjuration:['Truename Binding']},
      8:{Abjuration:['Expunge the Supernatural','Truename Dispel'],Transmutation:['Ritual of Renaming']}
    }],
    ['Stormwrack',{
      7:{Conjuration:['Waterspout']},
      8:{Conjuration:['Mordenkainen’s Capable Caravel','Stormwalk']}
    }],
    ['Book of Vile Darkness',{
      7:{Conjuration:['Wall of Eyes'],Divination:['Fiendish Clarity'],Transmutation:['Eye of the Beholder']},
      8:{Conjuration:['Phantasmal Thief'],Necromancy:['Gutwrench','Steal Life'],Transmutation:['Bestow Greater Curse','Soul’s Treasure Lost']}
    }],
    ['Magic of Incarnum',{
      7:{Divination:['Mass Adept Spirit'],Conjuration:['Incarnum Bladestorm'],Transmutation:['Open Lesser Chakra']},
      8:{Conjuration:['Conjure Greater Midnight Construct'],Divination:['Mass Guardian Spirit'],Abjuration:['Soulbanned Zone']}
    }]
  ];
  // Arcane spells that are already listed by a conventional alternative name.
  const aliases={
    'teleportgreater':'greaterteleport','scryinggreater':'greaterscrying',
    'arcanesightgreater':'greaterarcanesight','invisibilitymass':'massinvisibility',
    'shadowconjurationgreater':'greatershadowconjuration',
    'shadowevocationgreater':'greatershadowevocation','pryingeyesgreater':'greaterpryingeyes',
    'planarbindinggreater':'greaterplanarbinding','planeshiftgreater':'greaterplaneshift',
    'stoneshapegreater':'greaterstoneshape','signofsealinggreater':'greatersignofsealing',
    'dispellingscreengreater':'greaterdispellingscreen',
    'otilukesgreaterdispellingscreen':'greaterdispellingscreen',
    'mordenkainensmagnificentmansion':'magnificentmansion',
    'animalisticpowermass':'massanimalisticpower','luminousassassingreater':'greaterluminousassassin',
    'stunningbreathgreater':'greaterstunningbreath',
    'make manifestmass':'massmakemanifest',
    'seedofundeathgreater':'greaterseedofundeath',
    'bestowcursegreater':'greaterbestowcurse',
    'bestowgreatercurse':'greaterbestowcurse',
    'invisibilitysuperior':'superiorinvisibility',
    'adeptspiritmass':'massadeptspirit',
    'guardianspiritmass':'massguardianspirit',
    'celeritygreater':'greatercelerity',
    'glacialwardgreater':'greaterglacialward',
    'greaterstone shape':'greaterstoneshape'
  };
  const token = name => String(name).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
  const canonical = name => aliases[token(name)]||token(name);
  const slug = name => String(name).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const known = new Set((window.STARTER_SPELLS||[]).map(s=>String(s.level)+'/'+canonical(s.name)));
  const descriptions = {
    'Banishment':'Send extraplanar creatures back to their home planes, subject to resistance.',
    'Sequester':'Hide a creature or object from sight, divination and detection.',
    'Spell Turning':'Turn a limited quantity of incoming targeted magic back at its originator.',
    'Plane Shift':'Transport willing creatures between planes, with uncertain arrival location.',
    'Summon Monster VII':'Call an extraplanar ally for a limited time.',
    'Simulacrum':'Fashion a partially real duplicate of a creature using special materials and XP.',
    'Control Undead':'Direct undead creatures within the spell’s Hit Dice limit.',
    'Finger of Death':'Attempt to slay one living target; a successful save still causes damage.',
    'Reverse Gravity':'Turn gravity upside down in a selected volume for a short duration.',
    'Statue':'Allow a subject to shift between flesh and stone.',
    'Mind Blank':'Guard a creature against mental influence and divination.',
    'Dimensional Lock':'Prevent teleportation and planar movement through a warded region.',
    'Moment of Prescience':'Store a potent insight bonus for a critical future roll or defensive moment.',
    'Maze':'Send one foe into a labyrinthine extradimensional prison.',
    'Trap the Soul':'Imprison a creature’s life essence in a gem under strict component rules.',
    'Clone':'Grow a reserve body to receive a soul if the original dies.',
    'Create Greater Undead':'Transform a corpse into a stronger type of undead.',
    'Horrid Wilting':'Drain moisture from living creatures in an area, inflicting severe damage.',
    'Iron Body':'Assume metallic traits and formidable physical defenses.',
    'Polymorph Any Object':'Transform a creature or object into another form under complex limits.',
    'Temporal Stasis':'Suspend one subject outside the passage of time.',
    'Greater Celerity':'Take a full-round action immediately, but become dazed afterward.',
    'Spell Engine':'Reconfigure prepared wizard spells into other spells from your spellbook.',
    'Fimbulwinter':'Create prolonged supernatural winter over a large region; XP cost applies.',
    'Greater Glacial Ward':'Create a protective coldfire globe that resists fire magic.',
    'Truename Binding':'Use a researched personal truename to compel an extraplanar creature.',
    'Truename Dispel':'Unravel magic on a creature whose personal truename you know.',
    'Ritual of Renaming':'Give a creature a new personal truename in a special ritual.',
    'Expunge the Supernatural':'Attempt to permanently suppress a named supernatural ability.',
    'Ghostform':'Adopt incorporeal form, with restrictions on interaction and equipment.',
    'Awaken Undead':'Grant intelligence to mindless undead, subject to type restrictions and XP cost.',
    'Avasculate':'Necromantic ray strips life fluids, halving a victim’s hit points on a hit.',
    'Energy Immunity':'Protect the subject and equipment from one selected energy type.',
    'Wall of Eyes':'Create a gruesome sentient barrier that watches and attacks intruders.',
    'Greater Planar Binding':'Call a powerful outsider into a prepared binding circle for negotiation.',
    'Superior Invisibility':'Conceal a target against senses beyond ordinary sight.',
    'Avascular Mass':'Strike a living target with a blood-vessel ray and leave an entangling mass.'
  };
  let inserted=0;
  const added=[];
  for(const [book,levels] of bySource){
    for(const [level,schools] of Object.entries(levels)){
      for(const [school,names] of Object.entries(schools)){
        if(['Evocation','Enchantment'].includes(school))continue;
        for(const name of names){
          const key=level+'/'+canonical(name);
          if(known.has(key))continue;
          known.add(key);
          const id='research-'+level+'-'+slug(name);
          const entry={id,name,level:Number(level),school,status:'spellbook',
            source:book+' · two-year arcane research (campaign confirmed)',
            casting:'',components:'',range:'',duration:'',save:'',
            description:descriptions[name]||'Consult '+book+' for this spell’s full casting conditions, effects and limits.',
            notes:'Bulk transcription from Malzareth’s two-year study; spell known, not necessarily prepared. Evocation and Enchantment excluded.',
            favorite:false};
          (window.STARTER_SPELLS=window.STARTER_SPELLS||[]).push(entry);
          added.push(entry);
          inserted++;
        }
      }
    }
  }
  window.RESEARCH_ARCHIVE78={revision:1,added:inserted,totalSourceEntries:bySource.length,
    level7:added.filter(s=>s.level===7).length,level8:added.filter(s=>s.level===8).length};
})();