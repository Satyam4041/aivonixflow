/**
 * Google Sheets Integration Utility for AivonixFlow
 * 
 * Target Google Sheet:
 * https://docs.google.com/spreadsheets/d/1lYWfzKmD0BHUwNnIf_LoL0pf0ZQV8V-836vWddDCurw/edit
 * 
 * Forms mapped:
 * 1. Get a Quote -> Sheet1 (or tab "Get Quote")
 * 2. Free AI Audit -> Sheet2 (or tab "Free Audit")
 * 3. Contact & Consultation -> Sheet3 (or tab "Contact")
 */

// Deployment Web App URL (Configurable via .env or fallback)
const GOOGLE_SCRIPT_URL = 
  import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL || 
  "https://script.google.com/macros/s/AKfycbwU96sZ3qGvY9W12-placeholder/exec";

export const GOOGLE_SHEET_LINK = 
  "https://docs.google.com/spreadsheets/d/1lYWfzKmD0BHUwNnIf_LoL0pf0ZQV8V-836vWddDCurw/edit?usp=sharing";

/**
 * Submit form data to Google Sheet
 * @param {string} sheetTab - "Sheet1", "Sheet2", or "Sheet3"
 * @param {object} payload - Key-value pairs of form fields
 */
export async function submitToGoogleSheet(sheetTab, payload) {
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  
  const fullData = {
    sheet: sheetTab,
    timestamp,
    ...payload,
  };

  // 1. Save locally as fail-safe lead backup
  try {
    const backupKey = `aivonix_leads_${sheetTab}`;
    const existing = JSON.parse(localStorage.getItem(backupKey) || "[]");
    existing.push(fullData);
    localStorage.setItem(backupKey, JSON.stringify(existing));
  } catch (err) {
    // Ignore storage errors
  }

  // 2. Dispatch to Google Apps Script Endpoint if available
  const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;
  if (endpoint && endpoint.startsWith("https://script.google.com")) {
    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(fullData),
      });
      return { success: true };
    } catch (error) {
      console.warn("Google Sheet dispatch fallback:", error);
      return { success: true, cachedLocally: true };
    }
  }

  return { success: true, saved: true };
}
