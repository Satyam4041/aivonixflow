/**
 * @OnlyCurrentDoc
 * ============================================================================
 * AIVONIXFLOW — ENTERPRISE HARDENED GOOGLE APPS SCRIPT (MINIMAL SCOPE)
 * ============================================================================
 * Target Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1lYWfzKmD0BHUwNnIf_LoL0pf0ZQV8V-836vWddDCurw/edit
 * 
 * Note: "@OnlyCurrentDoc" enforces strict security so this script can ONLY
 * access THIS specific Google Sheet and has ZERO access to the rest of your Drive.
 * ============================================================================
 */

// Health check endpoint (for testing in browser)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ 
      status: "active", 
      service: "AivonixFlow Secure Webhook",
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Main webhook receiver
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheetTarget = data.sheet || "Sheet1";
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    // -------------------------------------------------------------
    // SHEET 1: GET A CUSTOM QUOTE FORM (/get-quote)
    // -------------------------------------------------------------
    if (sheetTarget === "Sheet1" || sheetTarget === "Get Quote") {
      var sheet1 = getOrCreateSheet(ss, "Sheet1 - Get Quote", [
        "Timestamp (IST)",
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
    // SHEET 2: FREE AI AUDIT FORM (/free-audit)
    // -------------------------------------------------------------
    else if (sheetTarget === "Sheet2" || sheetTarget === "Free Audit") {
      var sheet2 = getOrCreateSheet(ss, "Sheet2 - Free Audit", [
        "Timestamp (IST)",
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
    // SHEET 3: CONTACT & CONSULTATION FORM (/contact)
    // -------------------------------------------------------------
    else if (sheetTarget === "Sheet3" || sheetTarget === "Contact") {
      var sheet3 = getOrCreateSheet(ss, "Sheet3 - Contact", [
        "Timestamp (IST)",
        "Name",
        "Work Email",
        "Service of Interest",
        "Message / Project Details"
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
      JSON.stringify({ 
        status: "success", 
        message: "Entry recorded in " + sheetTarget,
        receivedAt: timestamp 
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: "error", 
        error: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Creates sheet tab if not present, styles header with dark theme
 */
function getOrCreateSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    
    // Executive dark blue styling for headers
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#0F172A");
    headerRange.setFontColor("#38BDF8");
    sheet.setFrozenRows(1);
    
    for (var i = 1; i <= headers.length; i++) {
      sheet.setColumnWidth(i, 200);
    }
  }
  
  return sheet;
}
