/**
 * Enterprise Security Utility Suite for AivonixFlow
 * Provides client-side sanitization, injection defense, rate-limiting, and bot deterrence.
 */

// Strip HTML tags, script entities, javascript: pseudo-protocols, and executable payloads
export function sanitizeInput(input) {
  if (typeof input !== "string") return "";

  return input
    // Remove null bytes
    .replace(/\0/g, "")
    // Remove control characters (except common whitespace)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Strip HTML tags
    .replace(/<[^>]*>?/gm, "")
    // Block javascript: and vbscript: URIs
    .replace(/javascript\s*:/gi, "")
    .replace(/vbscript\s*:/gi, "")
    // Block data: URIs with executable payloads
    .replace(/data\s*:\s*text\/html/gi, "")
    // Encode critical symbols to prevent injection
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Strict email validator that also prevents HTTP Header Injection (CRLF)
export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  if (email.length > 254) return false;

  // Block CRLF characters to prevent HTTP/SMTP header injection
  if (/[\r\n]/.test(email)) return false;

  // RFC 5322 compliant email regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

// Basic phone number validation
export function isValidPhone(phone) {
  if (!phone || typeof phone !== "string") return false;
  const cleanPhone = phone.replace(/[\s\-().+]/g, "");
  return cleanPhone.length >= 7 && cleanPhone.length <= 15 && /^\d+$/.test(cleanPhone);
}

// Client-side submission rate limiter (prevents form spamming & brute-force flooding)
const SUBMISSION_KEY_PREFIX = "aivonix_rate_limit_";
const MIN_COOLDOWN_MS = 5000; // 5 seconds between consecutive form submissions
const MAX_SUBMISSIONS_PER_MINUTE = 4;

export function checkRateLimit(formId = "default") {
  try {
    const key = `${SUBMISSION_KEY_PREFIX}${formId}`;
    const raw = sessionStorage.getItem(key);
    const now = Date.now();
    const timestamps = raw ? JSON.parse(raw) : [];

    // Filter timestamps within last 60 seconds
    const recent = timestamps.filter((t) => now - t < 60000);

    // Check minimum cooldown
    if (recent.length > 0 && now - recent[recent.length - 1] < MIN_COOLDOWN_MS) {
      const waitSeconds = Math.ceil((MIN_COOLDOWN_MS - (now - recent[recent.length - 1])) / 1000);
      return {
        allowed: false,
        error: `Please wait ${waitSeconds} second(s) before submitting again.`,
      };
    }

    // Check burst limit
    if (recent.length >= MAX_SUBMISSIONS_PER_MINUTE) {
      return {
        allowed: false,
        error: "Too many submission attempts. Please wait 1 minute before trying again.",
      };
    }

    // Record this attempt
    recent.push(now);
    sessionStorage.setItem(key, JSON.stringify(recent));

    return { allowed: true };
  } catch (err) {
    // If storage is unavailable/disabled, fail open safely
    return { allowed: true };
  }
}

// Honeypot checker (catches automated scraper bots)
export function isSpamBot(honeypotValue) {
  return typeof honeypotValue === "string" && honeypotValue.trim().length > 0;
}
