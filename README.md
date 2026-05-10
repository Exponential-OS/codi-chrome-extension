# Co-Dialectic — Chrome Extension

**Make every AI conversation 5× more reliable, on every AI chat web app you use.**

Co-Dialectic activates as a transparent layer on top of ChatGPT, Claude.ai, Gemini, Perplexity, Poe, and other AI chat web apps. It sharpens vague prompts before you send, flags fabricated citations and high-risk factual claims before you trust them, and audits sycophancy markers in responses. All processing runs on-device when Chrome's built-in Prompt API is available; nothing leaves your machine.

This is the browser-extension surface of the broader Co-Dialectic project — the same conversation layer that ships as a Claude Code / Cursor / Cowork plugin at [github.com/Exponential-OS/prompt-engineering-in-action](https://github.com/Exponential-OS/prompt-engineering-in-action).

## Status

**v0.1.0 — initial scaffold for Chrome Web Store review.** Functional UX scaffold: extension installs, activates on the supported sites, and shows a status indicator. Full prompt sharpening, hallucination detection, and calibration audit ship in subsequent versions on top of this baseline. The privacy claims below hold today and will continue to hold as functionality lands — Co-Dialectic does not phone home, does not collect telemetry, and does not transmit prompts or responses to any external server.

## Supported surfaces

The extension activates as a content script on:

- chat.openai.com / chatgpt.com
- claude.ai / claude.com
- gemini.google.com
- perplexity.ai / www.perplexity.ai
- poe.com

More surfaces added as Co-Dialectic users request them. Open an issue with the AI chat surface you want next.

## Privacy

- **No telemetry.** No analytics. No tracking pixels. No usage reporting.
- **No remote LLM calls from the extension.** When Chrome's on-device Prompt API is available, all sharpening / auditing runs locally on your machine.
- **No prompts or responses transmitted.** The only network traffic is the AI chat web app's own traffic, which the extension does not intercept or modify in transit.
- **Local storage only for user preferences** (mode toggles, surface allow-list). Stored via `chrome.storage.local`. Never synced to any server.

Full privacy policy: [PRIVACY-POLICY.md](./PRIVACY-POLICY.md).

## Install (developer mode, before Chrome Web Store approval)

1. Clone this repository or download the source as a zip and extract.
2. Open Chrome → `chrome://extensions`.
3. Enable **Developer mode** (toggle in upper right).
4. Click **Load unpacked** and select the `codi-chrome-extension/` directory.
5. Open one of the supported AI chat surfaces and look for the Co-Dialectic indicator.

After Chrome Web Store approval (target: shortly after first review cycle), install via the Web Store listing instead.

## Companion product

Co-Dialectic also ships as a Claude Code / Cursor / Cowork plug-in for IDE / CLI runtimes:

```
/plugin marketplace add Exponential-OS/agent-marketplace
/plugin install co-dialectic@thewhyman
```

Same conversation layer, different surface. Both are free and AGPL-3.0.

## License

[AGPL-3.0](./LICENSE). Strong copyleft. Modifications shipped as a service must be open-sourced under the same license.

## Author

**Anand Vallamsetla** — [thewhyman.com](https://thewhyman.com) · [linkedin.com/in/thewhyman](https://linkedin.com/in/thewhyman)

## Contributing

Issues and pull requests welcome. The Co-Dialectic project tracks all surfaces (Chrome extension, IDE plug-in, future surfaces) at [github.com/Exponentional-OS/codi-chrome-extension](https://github.com/Exponentional-OS/codi-chrome-extension).
