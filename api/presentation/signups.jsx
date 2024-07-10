import googleSheetsClient from "../google/sheets";
import SignupCharacter from "../../components/character/signupCharacter";

export default class presentationSignups {
    constructor() {}

   static characterRoleCompare(a, b) {
        if (a.role > b.role) {
            return -1;
        }

        if (a.role < b.role) {
            return 1;
        }

        return 0;
    }

    static characterNameCompare(a, b) {
        if (a.name < b.name) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        }

        return 0;
    }

    static async buildRosterTree() {
        if (process.env.SIGNUP_ENABLED !== "1") {
            return [];
        }

        const sheetData = await googleSheetsClient.getSheetData(process.env.SIGNUP_SHEET_ID, 'A7:K50');
        const signups = sheetData.filter(x => x[0] !== '').map((row) => new SignupCharacter(row));
        return signups.sort(this.characterNameCompare).sort(this.characterRoleCompare);
    } 
}