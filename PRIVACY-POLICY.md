# Co-Dialectic Chrome Extension — Privacy Policy

**Effective date:** 2026-04-27
**Last updated:** 2026-04-27

## Summary

Co-Dialectic does not collect, transmit, store, or share any of your data with any party. All extension functionality operates entirely on your local machine. The only persistent storage is for your own preferences (e.g., which mode you have selected) via the standard `chrome.storage.local` API, which never leaves your device.

This policy holds today and will continue to hold across all future versions of Co-Dialectic. Any future change to this policy will require a new version published to the Chrome Web Store, where you have the opportunity to review the change before updating.

## Data we collect

**None.** Co-Dialectic does not collect any personally identifiable information, usage analytics, telemetry, error reports, or content from your AI conversations.

## Data we transmit

**None.** Co-Dialectic does not make outbound network requests of its own. The extension is a content script that operates inside the AI chat web pages you visit; it does not call any Co-Dialectic-controlled server, third-party API, analytics service, or telemetry endpoint.

The AI chat web apps you visit (ChatGPT, Claude.ai, Gemini, etc.) make their own network requests as part of their normal operation; Co-Dialectic does not intercept, modify, or duplicate those requests.

When Chrome's built-in on-device Prompt API (Gemini Nano) is available and used for prompt sharpening or response auditing, all inference runs on your local machine via Chrome's bundled model. No prompts or responses are sent to any remote LLM provider by Co-Dialectic.

## Data we store locally

**User preferences only.** Co-Dialectic uses `chrome.storage.local` to remember:

- Which operational mode you have selected (Drive / Cruise / Quiet)
- Per-surface allow-list (which AI chat sites you have enabled or disabled)
- Display preferences for the on-screen indicator

This data is stored exclusively on your device by the Chrome browser itself. It is never synchronized to your Google account, never transmitted to Co-Dialectic servers (which do not exist), and never shared with any third party.

You can clear this data at any time by:

- Removing the extension from `chrome://extensions`
- Using Chrome's extension storage clear: `chrome://settings/content/all` → search for the extension → clear data
- Right-clicking the extension icon and selecting "Manage extension" → "Site settings"

## Third-party services

**None used by Co-Dialectic.** The extension does not embed any third-party SDK, analytics library, advertising network, social-media tracker, or any other third-party service.

## Children's privacy

Co-Dialectic is not directed at children under 13. Because the extension does not collect any data, no information about children (or any other user) is gathered.

## Permissions explanation

Co-Dialectic requests the following Chrome permissions, each used only for its narrow declared purpose:

- **`storage`** — to remember your mode and preference settings on your device.
- **`activeTab`** — to detect which AI chat surface you are currently on so the indicator displays correctly. Used only for the tab you have explicitly active.
- **`scripting`** — required by Manifest V3 to inject the content script that draws the on-page indicator and (in future versions) intercepts the prompt-sharpening pre-flight.
- **Host permissions for AI chat sites** (chat.openai.com, claude.ai, gemini.google.com, perplexity.ai, poe.com, etc.) — required so the content script can run on these specific surfaces. The extension never reads or modifies pages outside this allow-list.

## Open-source verification

Co-Dialectic is licensed under AGPL-3.0. The complete source code is published at [github.com/thewhyman/codi-chrome-extension](https://github.com/thewhyman/codi-chrome-extension) (placeholder; canonical repository link will be confirmed in the Chrome Web Store listing). You can audit every line of code that runs on your machine. If the code contradicts any claim in this privacy policy, that is a bug; please file an issue.

## Changes to this policy

Material changes to this policy will be published as a new extension version with the updated policy document. Chrome Web Store will surface the new permissions or behavior changes during the update prompt. You can review the change and choose whether to accept the update.

## Contact

For privacy-related questions, concerns, or to report a bug:

- **Email:** privacy@thewhyman.com
- **GitHub Issues:** [github.com/thewhyman/anand-career-os/issues](https://github.com/thewhyman/anand-career-os/issues) — tag with `chrome-extension` and `privacy`
- **Author:** Anand Vallamsetla — [thewhyman.com](https://thewhyman.com)

## Jurisdiction

This privacy policy is provided in good faith. Co-Dialectic operates under U.S. and applicable international privacy frameworks; given that no data is collected, transmitted, or stored remotely, the policy is consistent with the privacy expectations of EU GDPR, California CCPA / CPRA, and other major jurisdictions.
