import { characterScoreCompare } from "../../utils";

class Character {
  constructor(rioCharacter, alts) {
    this.name = rioCharacter.getName();
    this.realm = rioCharacter.getRealm().replace(" ", "-").toLowerCase();
    this.class = rioCharacter.getClass();
    this.spec = rioCharacter.getSpec();
    this.rank = rioCharacter.getRank();

    this.ilvl = rioCharacter.getGearLevel();
    this.tierCount = rioCharacter.getCurrentTierCount() ?? 0;

    this.mp_tens = rioCharacter.getMythicPlus10();
    this.mp_sixteens = rioCharacter.getMythicPlus16();
    this.mp_myth = rioCharacter.getMythicPlusMythTrack();
    this.mp_max = rioCharacter.getMythicPlusMax();
    this.mp_twenties = rioCharacter.getMythicPlus20();
    this.mp_total = rioCharacter.getMythicPlusTotal();
    this.mp_score = rioCharacter.getMythicPlusScore();

    this.alts = [];

    if (alts.length > 0) {
      this.alts = alts.filter(a => a.getMain() == this.name).map(x => new Character(x, [])).sort(characterScoreCompare);
    }
  }

  getAltCount() {
    return this.alts.length;
  }

  updateAlts(alts) {
    this.alts = alts;
  }

  validate() {
    var valid = true;

    let props = [
      this.name,
      this.class,
      this.spec,
      this.realm,
      this.ilvl
    ];

    for (const p of props) {
      valid = this.validateProp(p);

      if (!valid) {
        break;
      }
    }

    return valid;

    // this.validateProp(valid, this.mp_tens);
    // this.validateProp(valid, this.mp_sixteens);
    // this.validateProp(valid, this.mp_myth);
    // this.validateProp(valid, this.mp_max);
    // this.validateProp(valid, this.mp_twenties);
    // this.validateProp(valid, this.mp_total);
    // this.validateProp(valid, this.mp_score);

  }

  validateProp(prop) {
    return prop !== undefined && prop !== null;
  }
}

export default Character;