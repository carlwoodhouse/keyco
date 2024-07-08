import { google } from "googleapis";

export default class googleSheetsClient {
  constructor() { }

  static async getSheetData(spreadsheetId, range) {
    const glAuth = await google.auth.getClient({
        projectId: process.env.GOOGLE_PROJECT_ID,
        credentials: {
            "type": "service_account",
            "project_id": process.env.GOOGLE_PROJECT_ID,
            "private_key_id": process.env.GOOGLE_PRIVATE_KEY_ID,
            "private_key": process.env.GOOGLE_PRIVATE_KEY,
            "client_email": process.env.GOOGLE_CLIENT_EMAIL,
            "universe_domain": "googleapis.com"
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const glSheets = google.sheets({ version: "v4", auth: glAuth });

    const data = await glSheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    });

    return data.data.values;
  }
}