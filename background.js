/**
 * Co-Dialectic service worker (v0.1.0 scaffold).
 *
 * Responsibilities (current scaffold):
 *   - Log lifecycle events for transparency.
 *   - Route status queries from the popup to the active tab's content script.
 *
 * Responsibilities (planned for v0.2+):
 *   - Coordinate Prompt API session lifecycle (chrome.ai.languageModel).
 *   - Maintain per-site preferences from chrome.storage.local.
 *
 * No telemetry. No remote calls. No analytics.
 */

const EXTENSION_NAME = "Co-Dialectic";
const EXTENSION_VERSION = "0.1.0";

chrome.runtime.onInstalled.addListener((details) => {
  // eslint-disable-next-line no-console
  console.info(
    `[${EXTENSION_NAME} v${EXTENSION_VERSION}] installed (reason=${details.reason})`
  );
});

chrome.runtime.onStartup.addListener(() => {
  // eslint-disable-next-line no-console
  console.info(`[${EXTENSION_NAME} v${EXTENSION_VERSION}] service worker started`);
});

/**
 * Forward popup -> content-script status requests.
 *
 * The popup sends { type: "codi:get-active-tab-status" }. We resolve the
 * active tab in the active window, dispatch a "codi:status" probe to its
 * content script, and relay the response.
 */
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (!message || message.type !== "codi:get-active-tab-status") {
    return false;
  }

  chrome.tabs
    .query({ active: true, currentWindow: true })
    .then(([tab]) => {
      if (!tab || tab.id === undefined) {
        sendResponse({ active: false, reason: "no-active-tab" });
        return;
      }
      chrome.tabs
        .sendMessage(tab.id, { type: "codi:status" })
        .then((response) => sendResponse(response || { active: false }))
        .catch(() => {
          // Most common cause: page is not in our match list, so the
          // content script never loaded. That's a normal "inactive" case.
          sendResponse({ active: false, reason: "no-content-script" });
        });
    })
    .catch((err) => {
      sendResponse({ active: false, reason: "tabs-query-failed", error: String(err) });
    });

  // Returning true keeps the message channel open for the async response.
  return true;
});
