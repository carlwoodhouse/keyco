import googleSheetsClient from "../google/sheets";
import SignupCharacter from "../../components/character/signupCharacter";

export default class presentationSignups {
    constructor() {}

    static async buildRosterTree() {
        if (process.env.SIGNUP_ENABLED !== "1") {
            return [];
        }

        const sheetData = await googleSheetsClient.getSheetData(process.env.SIGNUP_SHEET_ID, 'A7:C50');
        return sheetData.sort().map((row) => new SignupCharacter(row));
    } 
}