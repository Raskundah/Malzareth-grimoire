/* D&D 3.5 wizard spells per day (SRD, PHB Table 3-18).
   Wizard 5 / Master Specialist 10 / Abjurant Champion 5 advances casting as a 20th-level wizard.
   Bonus spell slots use Intelligence; specialists get one extra slot
   at each available spell level (including cantrips).
   These are spellcasting progression levels, NOT adjusted caster levels. */
(() => {
  'use strict';
  const BASE = [
    [3,1],
    [4,2],
    [4,2,1],
    [4,3,2],
    [4,3,2,1],
    [4,3,3,2],
    [4,4,3,2,1],
    [4,4,3,3,2],
    [4,4,4,3,2,1],
    [4,4,4,3,3,2],
    [4,4,4,4,3,2,1],
    [4,4,4,4,3,3,2],
    [4,4,4,4,4,3,2,1],
    [4,4,4,4,4,3,3,2],
    [4,4,4,4,4,4,3,2,1],
    [4,4,4,4,4,4,3,3,2],
    [4,4,4,4,4,4,4,3,2,1],
    [4,4,4,4,4,4,4,3,3,2],
    [4,4,4,4,4,4,4,4,3,3],
    [4,4,4,4,4,4,4,4,4,4]
  ];
  const calculate = (intelligence = 30, spellcastingLevel = 12, specialist = true) => {
    const score = Math.max(1, Math.min(99, Math.trunc(Number(intelligence) || 1)));
    const wizardLevel = Math.max(1, Math.min(20, Math.trunc(Number(spellcastingLevel) || 1)));
    const modifier = Math.floor((score - 10) / 2);
    const entries = Array.from({length: 10}, (_,level) => {
      // Spell level must both exist in the wizard progression and be
      // accessible with an Intelligence score of at least 10 + spell level.
      const base = BASE[wizardLevel-1][level] || 0;
      const accessible = base > 0 && score >= 10 + level;
      const bonus = accessible && level > 0 && modifier >= level
        ? 1 + Math.floor((modifier - level) / 4)
        : 0;
      const specialty = accessible && specialist ? 1 : 0;
      return {level,base,bonus,specialty,accessible,total:accessible ? base + bonus + specialty : 0};
    });
    return {intelligence:score,spellcastingLevel:wizardLevel,modifier,entries,totals:entries.map(x=>x.total)};
  };
  window.SPELL_SLOT_RULES = {calculate};
})();
