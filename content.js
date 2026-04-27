/**
 * Co-Dialectic content script (v0.1.0 scaffold).
 *
 * Activates on supported AI chat surfaces, surfaces a small "active" badge,
 * and exposes stub functions for prompt sharpening and response auditing.
 * The real Prompt API integration ships in v0.2; this file establishes the
 * scaffold the Chrome Web Store reviewer can load and inspect.
 *
 * Design notes:
 *   - Wrapped in an IIFE so we never pollute the host page's globals.
 *   - All processing is local. No network calls. No telemetry.
 *   - Surface detection is hostname-based; future versions may inspect
 *     DOM affordances to detect prompt boxes more precisely.
 */

(() => {
  "use strict";

  const EXTENSION_NAME = "Co-Dialectic";
  const EXTENSION_VERSION = "0.1.0";
  const BADGE_ELEMENT_ID = "codi-active-badge";

  /** Map of hostname patterns to human-readable surface names. */
  const SUPPORTED_SURFACES = [
    { match: /(^|\.)chat\.openai\.com$/, name: "ChatGPT (legacy)" },
    { match: /(^|\.)chatgpt\.com$/, name: "ChatGPT" },
    { match: /(^|\.)claude\.ai$/, name: "Claude" },
    { match: /(^|\.)claude\.com$/, name: "Claude" },
    { match: /(^|\.)gemini\.google\.com$/, name: "Gemini" },
    { match: /(^|\.)perplexity\.ai$/, name: "Perplexity" },
    { match: /(^|\.)poe\.com$/, name: "Poe" }
  ];

  /**
   * Identify which AI chat surface we are running on.
   * @returns {string|null} Human-readable surface name, or null if unsupported.
   */
  function detectSurface() {
    const host = window.location.hostname;
    const surface = SUPPORTED_SURFACES.find((s) => s.match.test(host));
    return surface ? surface.name : null;
  }

  /**
   * Check whether Chrome's built-in Prompt API (Gemini Nano) is available.
   * The exact API surface is still evolving — see icons/README.md and
   * background.js for current Chrome AI status.
   *
   * @returns {boolean} true if a usable on-device LLM API is detected.
   */
  function isPromptApiAvailable() {
    // Chrome 138+ exposes window.ai.languageModel; earlier builds used
    // window.ai.assistant. We probe both defensively and avoid throwing
    // on hosts where window.ai is undefined.
    try {
      // eslint-disable-next-line no-undef
      const ai = typeof window !== "undefined" ? window.ai : undefined;
      if (!ai) return false;
      return Boolean(ai.languageModel || ai.assistant);
    } catch (_err) {
      return false;
    }
  }

  /**
   * Stub: sharpen a prompt before the user sends it.
   *
   * In v0.2 this will route through chrome.ai.languageModel with a
   * locally-defined system prompt. For v0.1 it is a pass-through so we
   * can verify the wiring without making any network or model calls.
   *
   * @param {string} text Prompt the user is composing.
   * @returns {Promise<string>} Sharpened prompt (currently identical).
   */
  async function sharpenPrompt(text) {
    if (typeof text !== "string") return "";
    return text;
  }

  /**
   * Stub: audit a model response for fabricated citations and sycophancy.
   *
   * In v0.2 this will run a local pass over the response text using
   * Gemini Nano. For v0.1 it returns the response unchanged.
   *
   * @param {string} text Model response captured from the page.
   * @returns {Promise<string>} Audited response (currently identical).
   */
  async function auditResponse(text) {
    if (typeof text !== "string") return "";
    return text;
  }

  /**
   * Inject a small fixed-position badge so the user can see Co-Dialectic
   * is active. The badge is purely visual; it does not capture clicks
   * or read page content.
   *
   * @param {string} surfaceName Human-readable surface name.
   */
  function injectBadge(surfaceName) {
    if (document.getElementById(BADGE_ELEMENT_ID)) return;

    const badge = document.createElement("div");
    badge.id = BADGE_ELEMENT_ID;
    badge.setAttribute("role", "status");
    badge.setAttribute(
      "aria-label",
      `${EXTENSION_NAME} active on ${surfaceName}`
    );
    badge.textContent = "codi";
    badge.title = `${EXTENSION_NAME} v${EXTENSION_VERSION} active on ${surfaceName}`;

    // Defer attachment until <body> is ready. On some SPA surfaces the
    // body is present at document_idle, but we guard for safety.
    const attach = () => {
      if (document.body) {
        document.body.appendChild(badge);
      } else {
        window.requestAnimationFrame(attach);
      }
    };
    attach();
  }

  /** Boot. */
  const surface = detectSurface();
  if (!surface) {
    // No-op on unsupported pages. content_scripts.matches in manifest.json
    // already restricts injection, but we double-check here.
    return;
  }

  // eslint-disable-next-line no-console
  console.info(
    `[${EXTENSION_NAME} v${EXTENSION_VERSION}] active on ${surface}` +
      ` — Prompt API available: ${isPromptApiAvailable()}`
  );

  injectBadge(surface);

  // Expose stubs on a non-enumerable namespace for future cross-script
  // messaging tests. These are intentionally not attached to window so
  // they don't conflict with the host page's globals.
  const codi = Object.freeze({
    version: EXTENSION_VERSION,
    surface,
    sharpenPrompt,
    auditResponse,
    isPromptApiAvailable
  });

  // Background service worker can request status via chrome.runtime
  // messaging; respond with a tiny status snapshot.
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (message && message.type === "codi:status") {
        sendResponse({
          active: true,
          surface: codi.surface,
          version: codi.version,
          promptApi: codi.isPromptApiAvailable()
        });
        return true; // async-safe channel
      }
      return false;
    });
  }
})();
