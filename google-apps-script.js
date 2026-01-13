/**
 * Google Apps Script to handle Contact Form submissions.
 * 
 * INSTRUCTIONS:
 * 1. Open your existing Google Apps Script project.
 * 2. Replace the entire content of 'Code.gs' with this new code.
 * 3. SAVE the project.
 * 4. IMPORTANT: You MUST Deploy > New deployment to apply changes!
 *    - Click 'Deploy' > 'New deployment'.
 *    - Type: 'Web app'.
 *    - Description: 'v3 - Robust JSON support'.
 *    - Execute as: 'Me'.
 *    - Who has access: 'Anyone'.
 *    - Click 'Deploy'.
 * 5. If the URL changes (unlikely if same project), update .env.local.
 */

const SHEET_NAME = 'Inquiries';

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = doc.getSheetByName(SHEET_NAME);

        if (!sheet) {
            sheet = doc.insertSheet(SHEET_NAME);
            sheet.appendRow(['Date', 'Name', 'Email', 'Phone', 'Message']);
        }

        const timestamp = new Date();

        let name = '';
        let email = '';
        let phone = '';
        let message = '';

        // Robust parsing: Try to parse postData.contents as JSON regardless of type
        // This allows 'text/plain' requests (to avoid CORS preflight) to still carry JSON data.
        let parsedData = null;
        if (e.postData && e.postData.contents) {
            try {
                parsedData = JSON.parse(e.postData.contents);
            } catch (jsonErr) {
                // Not JSON, ignore
            }
        }

        if (parsedData) {
            name = parsedData.name || '';
            email = parsedData.email || '';
            phone = parsedData.phone || '';
            message = parsedData.message || '';
        } else {
            // Fallback to parameter access (for form-urlencoded)
            name = e.parameter.name || '';
            email = e.parameter.email || '';
            phone = e.parameter.phone || '';
            message = e.parameter.message || '';
        }

        sheet.appendRow([timestamp, name, email, phone, message]);

        return ContentService
            .createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function setup() {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEET_NAME);
    if (!sheet) {
        sheet = doc.insertSheet(SHEET_NAME);
        sheet.appendRow(['Date', 'Name', 'Email', 'Phone', 'Message']);
    }
}
