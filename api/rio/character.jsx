import { slug } from '../../utils';
import { round } from '../../utils';
import rioClient from './client'

let counter = 0;


class rioCharacter {
    constructor(name, realm, rank, rioChar, main) {
        counter = counter +1;
        let currentTier = process.env.CURRENT_TIER;

        if (counter % 100 == 0) {
            console.log("charCount; " + counter);
        }

        try {
            this.name = name;
            this.realm = realm;
            this.rank = rank;

            let mplus = calcMythicPlus(rioChar);
            this.class = rioChar.class;
            this.spec = rioChar.active_spec_name;
            this.mp_tens = mplus[0];
            this.mp_sixteens = mplus[1];
            this.mp_myth = mplus[2];
            this.mp_twenties = mplus[3];
            this.mp_max = mplus[4];
            this.mp_total = mplus[5];
            this.gear = {
                ilvl: round(rioChar.gear.item_level_equipped, 1),
                tier: {
                    head: rioChar.gear.items.head?.tier == currentTier,
                    shoulders: rioChar.gear.items.shoulder?.tier == currentTier,
                    chest: rioChar.gear.items.chest?.tier == currentTier,
                    hands: rioChar.gear.items.hands?.tier == currentTier,
                    legs: rioChar.gear.items.legs?.tier == currentTier
                }
            };
            
            this.mp_score = rioChar.mythic_plus_scores_by_season[0].scores.all
            this.main = main;
            this.updated - new Date();
        }
        catch (error) {
            console.log(error);
            console.log(rioChar);
            throw error;
        }
    }

    static async initialize(name, realm, rank) {
        if (name.indexOf("-") !== -1) {
            return null;
        }

        try {
            const client = new rioClient();
            const rioChar = await client.getCharacter(name, realm);

            if (rioChar == undefined) {
                return null;
            }

            const main = process.env.DISABLE_ALTLINKING === undefined ||  process.env.DISABLE_ALTLINKING === null ? await client.getCharacterMain(name, slug(realm)) : null;

            if (main != null) {
                console.log("map: " + name + " > " + main)
            }
            else {
                console.log("map: " + name + " > main")
            }

            return new rioCharacter(name, realm, rank, rioChar, main);
        }
        catch {}

        return null;
    }

    getName() {
        return this.name;
    }

    getRealm() {
        return this.realm;
    }

    getMythicPlus10() {
        return this.mp_tens;
    }

    getMythicPlus16() {
        return this.mp_sixteens;
    }

    getMythicPlusMythTrack() {
        return this.mp_myth;
    }

    getMythicPlus20() {
        return this.mp_twenties;
    }

    getMythicPlusTotal() {
        return this.mp_total;
    }

    getMythicPlusMax() {
        return this.mp_max;
    }

    getGearLevel() {
        return this.gear.ilvl;
    }

    getMythicPlusScore() {
        return this.mp_score;
    }

    hasGearTHead() {
        return this.gear.tier.head;
    }

    hasGearTShoulders() {
        return this.gear.tier.shoulders;
    }

    hasGearTChest() {
        return this.gear.tier.chest;
    }

    hasGearTHands() {
        return this.gear.tier.hands;
    }

    hasGearTLegs() {
        return this.gear.tier.legs;
    }

    getCurrentTierCount() {
        return (this.hasGearTHead() ? 1 : 0) + (this.hasGearTChest() ? 1 : 0) + (this.hasGearTShoulders() ? 1 : 0) + (this.hasGearTHands() ? 1 : 0) + (this.hasGearTLegs() ? 1 : 0);
    }

    getUpdated() {
        return this._updated;
    }

    getClass() {
        return this.class;
    }

    getSpec() {
        return this.spec;
    }

    getRank() {
        return this.rank;
    }

   getMain() {
        return this.main;
    }
}

function calcMythicPlus(rioChar) {
    // < 16, 16-18,, 18-19, 20, MAX, TOTAL
    var mythicplus = [0, 0, 0, 0, 0, 0];

    for (let j = 0; j < rioChar.mythic_plus_weekly_highest_level_runs.length; j++) {
        var run = rioChar.mythic_plus_weekly_highest_level_runs[j];

        if (run.mythic_level > 2 && run.mythic_level < 5) {
            mythicplus[0] = mythicplus[0] + 1;
        }

        if (run.mythic_level > 4 && run.mythic_level < 8) {
            mythicplus[1] = mythicplus[1] + 1;
        }
        
        if (run.mythic_level > 7 && run.mythic_level < 10) {
            mythicplus[2] = mythicplus[2] + 1;
        }

        if (run.mythic_level > 9) {
            mythicplus[3] = mythicplus[3] + 1;
        }

        if (run.mythic_level > mythicplus[4]) {
            mythicplus[4] = run.mythic_level;
        }

        mythicplus[5] = mythicplus[5] + 1;
    }

    return mythicplus;
}


export default rioCharacter