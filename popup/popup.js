/**
 * Co-Dialectic popup script (v0.1.0 scaffold).
 *
 * Renders activation status for the current tab. Uses the background
 * service worker to query the content script. Pure DOM, no frameworks.
 */

(() => {
  "use strict";

  /**
   * Update the status pill based on the response from the content script.
   * @param {{active: boolean, surface?: string, version?: string, promptApi?: boolean, reason?: string} | null} status
   */
  function renderStatus(status) {
    const dot = document.getElementById("codi-status-dot");
    const text = document.getElementById("codi-status-text");
    if (!dot || !text) return;

    if (status && status.active) {
      dot.dataset.state = "active";
      const surface = status.surface || "this tab";
      const promptApi = status.promptApi
        ? " · Prompt API ready"
        : " · Prompt API unavailable";
      text.textContent = `Active on ${surface}${promptApi}`;
      return;
    }

    dot.dataset.state = "inactive";
    text.textContent = "Inactive — open a supported AI chat to activate.";
  }

  /** Open the (placeholder) settings page. v0.2 will ship a real options page. */
  function bindSettingsButton() {
    const btn = document.getElementById("codi-open-settings");
    if (!btn) return;
    btn.addEventListener("click", () => {
      // Placeholder: in v0.2 we'll ship an options page and use
      // chrome.runtime.openOptionsPage(). For the scaffold we update
      // the status text so the click is visibly acknowledged.
      const text = document.getElementById("codi-status-text");
      if (text) {
        text.textContent = "Settings ship in v0.2 — coming soon.";
      }
    });
  }

  /** Wire the GitHub link to chrome.tabs so it always opens in a new tab. */
  function bindGithubLink() {
    const link = document.getElementById("codi-github-link");
    if (!link) return;
    link.addEventListener("click", (event) => {
      // Default <a target="_blank"> works inside popups, but using
      // chrome.tabs.create explicitly avoids edge cases on managed Chrome
      // installs that block target="_blank" in extension popups.
      if (typeof chrome !== "undefined" && chrome.tabs && chrome.tabs.create) {
        event.preventDefault();
        chrome.tabs.create({ url: link.href });
      }
    });
  }

  /** Ask the background worker for current-tab status. */
  function requestStatus() {
    if (typeof chrome === "undefined" || !chrome.runtime || !chrome.runtime.sendMessage) {
      renderStatus(null);
      return;
    }
    chrome.runtime.sendMessage(
      { type: "codi:get-active-tab-status" },
      (response) => {
        // chrome.runtime.lastError is set when the content script isn't
        // present (e.g., user is on chrome://extensions). Treat as inactive.
        if (chrome.runtime.lastError) {
          renderStatus(null);
          return;
        }
        renderStatus(response || null);
      }
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindSettingsButton();
    bindGithubLink();
    requestStatus();
  });
})();
