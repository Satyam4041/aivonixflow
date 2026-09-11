/**
 * ============================================================================
 * AIVONIXFLOW — GOOGLE APPS SCRIPT FOR AUTOMATIC GOOGLE SHEETS FORM SYNC
 * ============================================================================
 * Target Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1lYWfzKmD0BHUwNnIf_LoL0pf0ZQV8V-836vWddDCurw/edit
 * 
 * INSTRUCTIONS TO ACTIVATE IN 60 SECONDS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1lYWfzKmD0BHUwNnIf_LoL0pf0ZQV8V-836vWddDCurw/edit
 * 2. In top menu click: Extensions -> Apps Script
 * 3. Delete any default code in Code.gs, and paste THIS ENTIRE FILE.
 * 4. Click the blue "Deploy" button (top right) -> "New deployment"
 * 5. Click the gear icon (Select type) -> select "Web app"
 * 6. Set Description: "AivonixFlow Form Webhook"
 * 7. Set "Execute as": "Me"
 * 8. Set "Who has access": "Anyone"  <-- CRITICAL!
 * 9. Click "Deploy", authorize permissions when asked.
 * 10. Copy the "Web app URL" (it looks like: https://script.google.com/macros/s/AKfycb.../exec)
 * 11. Put that URL into your .env file:
 *     VITE_GOOGLE_SHEETS_SCRIPT_URL="YOUR_COPIED_URL_HERE"
 * ============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = {};

    // Parse incoming payload
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    var sheetTarget = data.sheet || "Sheet1";
    var timestamp = data.timestamp || new Date().toISOString();

    // -------------------------------------------------------------
    // SHEET 1: GET A QUOTE
    // -------------------------------------------------------------
    if (sheetTarget === "Sheet1" || sheetTarget === "Get Quote") {
      var sheet1 = getOrCreateSheet(ss, "Sheet1 - Get Quote", [
        "Timestamp",
        "Full Name",
        "Work Email",
        "Company Name",
        "Project Type",
        "Estimated Budget",
        "Project Details"
      ]);

      sheet1.appendRow([
        timestamp,
        data.fullName || "",
        data.workEmail || "",
        data.companyName || "",
        data.projectType || "",
        data.estimatedBudget || "",
        data.projectDetails || ""
      ]);
    }

    // -------------------------------------------------------------
    // SHEET 2: FREE AUDIT
    // -------------------------------------------------------------
    else if (sheetTarget === "Sheet2" || sheetTarget === "Free Audit") {
      var sheet2 = getOrCreateSheet(ss, "Sheet2 - Free Audit", [
        "Timestamp",
        "Full Name",
        "Work Email",
        "Website URL",
        "Business Type",
        "Biggest Challenge"
      ]);

      sheet2.appendRow([
        timestamp,
        data.fullName || "",
        data.workEmail || "",
        data.websiteUrl || "",
        data.businessType || "",
        data.biggestChallenge || ""
      ]);
    }

    // -------------------------------------------------------------
    // SHEET 3: CONTACT & CONSULTATION
    // -------------------------------------------------------------
    else if (sheetTarget === "Sheet3" || sheetTarget === "Contact") {
      var sheet3 = getOrCreateSheet(ss, "Sheet3 - Contact", [
        "Timestamp",
        "Name",
        "Work Email",
        "Service of Interest",
        "Message / Current Bottleneck"
      ]);

      sheet3.appendRow([
        timestamp,
        data.name || "",
        data.email || "",
        data.service || "",
        data.message || ""
      ]);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Row added successfully to " + sheetTarget })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Helper function: Gets an existing sheet tab or creates it with formatted headers
 */
function getOrCreateSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    
    // Style headers
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#38BDF8");
    sheet.setFrozenRows(1);
    
    // Auto-adjust column widths
    for (var i = 1; i <= headers.length; i++) {
      sheet.setColumnWidth(i, 180);
    }
  }
  
  return sheet;
}
