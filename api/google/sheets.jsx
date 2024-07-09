import { google } from "googleapis";

export default class googleSheetsClient {
  constructor() { }

  static async getSheetData(spreadsheetId, range) {
    const glSheets = await this.getSheets();

    const data = await glSheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    });

    return data.data.values;
  }

  static async getSheets() {
    const glAuth = await google.auth.getClient({
      projectId: process.env.GOOGLE_PROJECT_ID,
      credentials: {
          "type": "service_account",
          "project_id": process.env.GOOGLE_PROJECT_ID,
          "private_key_id": process.env.GOOGLE_PRIVATE_KEY_ID,
          "private_key": process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          "client_email": process.env.GOOGLE_CLIENT_EMAIL,
          "universe_domain": "googleapis.com"
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    return google.sheets({ version: "v4", auth: glAuth });
  }
}