# Chrome Web Store Listing — Copy-Paste Reference

Paste these fields into the Chrome Web Store Developer Dashboard during submission. All copy is below the byte limits Chrome enforces. Tweak before submitting if you want a different angle.

---

## Required fields

### Title (45 char max)
```
Co-Dialectic — AI Conversation Layer
```
*(36 chars)*

### Short description (132 char max)
```
Sharpen AI prompts, flag fabricated citations, audit sycophancy. On-device, private, free. Works on ChatGPT, Claude, Gemini, more.
```
*(130 chars)*

### Category
**Productivity**

### Language
**English (United States)**

---

## Detailed description

```
Co-Dialectic is a transparent layer that runs on top of every AI chat web app you use — ChatGPT, Claude.ai, Gemini, Perplexity, Poe, and more — and makes every conversation more reliable.

Most AI users get burned by the same three failure modes:

• Vague prompts produce confident-sounding wrong answers. You lose hours rephrasing or, worse, you act on a bad answer before you notice.
• Fabricated citations look real. The LLM cites a paper that doesn't exist, a court case that was never filed, a statistic with a plausible source. By the time you check, the damage is done.
• Sycophancy slips past your filter. "Great question!" "You're absolutely right!" — every flattery line lowers your scrutiny on the actual content. You trust output you should challenge.

Co-Dialectic addresses all three at the conversation surface itself. Before your prompt is sent, it gets sharpened. Before the response reaches you, it gets audited for fabricated citations and sycophantic filler. You do nothing differently. The reliability floor moves up.

WHAT MAKES IT DIFFERENT

• On-device processing. When Chrome's built-in Prompt API is available, all sharpening and auditing runs locally on your machine via Gemini Nano. Nothing transmitted to any server.
• Zero telemetry. The extension never phones home, never collects usage data, never tracks you. Open source under AGPL-3.0 — you can audit every line of code.
• Universal across AI chat surfaces. One install covers ChatGPT, Claude.ai, Gemini, Perplexity, Poe, and more. No per-site reconfiguration.
• Free forever. The base extension stays free under AGPL-3.0. Premium domain-specific features (legal, medical, financial reasoning packs) ship as separate products you can opt into.

WHO IT'S FOR

• Knowledge workers — consultants, analysts, founders, writers, lawyers, researchers — who use AI chat daily and can't afford fabricated facts in their work.
• Engineering teams using LLMs in customer-facing surfaces who need a verification layer that isn't tied to one model vendor.
• Anyone who's caught a confidently-wrong answer mid-decision and decided "never again."

VERSION 0.1.0 STATUS

This is the initial release. The extension installs, activates on the supported sites, and shows a status indicator. Full prompt-sharpening, hallucination detection, and calibration audit are landing in subsequent versions on this baseline. The privacy claims above hold today and continue to hold as functionality lands — Co-Dialectic does not phone home, does not collect telemetry, and does not transmit prompts or responses to any external server. You can verify this by inspecting the source code at the homepage link.

PRIVACY

• No data collected.
• No telemetry. No analytics. No tracking.
• No remote LLM calls from the extension itself.
• Local storage only for your own preferences (mode, surface allow-list).
• Full privacy policy and source code linked in the listing.

Built by Anand Vallamsetla. Open issues, PRs, and feature requests welcome.
```

---

## Privacy practices form

| Field | Answer |
|---|---|
| Single purpose | "Sharpens AI prompts before they're sent and audits AI responses for fabricated citations and sycophancy on AI chat web apps." |
| Data collection | None |
| Data usage | None |
| Data sharing | None |
| Data sold | No |

For each declared permission:

| Permission | Justification |
|---|---|
| `storage` | Save user preferences (mode toggle, surface allow-list) locally on the device. Never transmitted. |
| `activeTab` | Detect which supported AI chat surface is currently focused so the indicator displays correctly. |
| `scripting` | Required by Manifest V3 to inject the on-page indicator and (in future versions) the prompt-sharpening pre-flight intercept. |
| Host permissions for AI chat sites | Required so the content script can run only on the explicitly-listed AI chat surfaces. The extension never operates on any other site. |

---

## Privacy policy URL

You need a publicly accessible URL to the privacy policy. Two options:

**Option A — GitHub raw (fastest, free):** push the repo to GitHub and use:
```
https://raw.githubusercontent.com/Exponentional-OS/codi-chrome-extension/main/PRIVACY-POLICY.md
```

**Option B — thewhyman.com (more polished):** host the PRIVACY-POLICY.md content at:
```
https://thewhyman.com/privacy/codi-chrome-extension
```

Either works for first review. You can swap to Option B later via a listing update.

---

## Homepage URL

```
https://thewhyman.com
```

---

## Support / contact email

```
avallam@thewhyman.com
```

(Or `privacy@thewhyman.com` if you want to separate privacy inquiries from general support.)

---

## Screenshots

Chrome Web Store requires at least 1 screenshot at **1280×800** or **640×400** pixels. Up to 5 screenshots allowed. PNG or JPEG.

Suggested screenshots for v0.1.0 scaffold:

1. **Hero / overview** — A composite showing the codi indicator on chat.openai.com, claude.ai, and gemini.google.com side-by-side. Caption: "One extension, every AI chat surface."
2. **Privacy promise** — A clean panel showing the privacy claims (no telemetry, on-device processing, AGPL-3.0). Caption: "Zero data collection. Open source verified."
3. **Roadmap teaser** — Mock UI of the prompt-sharpening flow that lands in v0.2. Caption: "Prompt sharpening, hallucination detection, calibration audit — landing in upcoming versions."

For v0.1.0 review, even placeholder screenshots are acceptable as long as they don't claim functionality that doesn't exist yet. Avoid showing prompt-sharpening UX in screenshots until v0.2 ships.

You can later update screenshots with each version release.

---

## Promotional tile (optional, recommended)

**440×280 PNG** — improves Web Store discovery and homepage placement. Reuse `co-dialectic-cover.png` from `~/anand-career-os/WIP/prompt-engineering-in-action-product/co-dialectic/04_ASSETS/`, resize via:

```bash
sips --resampleWidth 440 -Z 280 /Users/anandvallam/anand-career-os/WIP/prompt-engineering-in-action-product/co-dialectic/04_ASSETS/co-dialectic-cover.png --out /tmp/codi-promo-440x280.png
```

---

## Trader declaration (mandatory under EU DSA)

**Choose: Trader.** Reasoning:

- Co-Dialectic is the front-end of the @thewhyman commercial brand
- Future xOS family has commercial intent (premium tier, VC pitch path)
- Beta-tester recruitment + Substack pipeline = professional activity
- Even though codi itself is AGPL-3.0 free, declaring "non-trader" while operating a commercial brand could be misrepresentation

Trader status requires a publicly-visible postal address. Options:
- Virtual mailbox (PostScan, Earth Class Mail, ~$15-30/mo)
- Registered LLC business address if applicable
- PO Box

---

## Final pre-submission checklist

- [ ] Trader declaration completed (Trader)
- [ ] Postal address added (publicly visible per trader requirement)
- [ ] Contact email added
- [ ] Repo pushed to public GitHub at `Exponentional-OS/codi-chrome-extension`
- [ ] Privacy policy URL is reachable (verify in incognito)
- [ ] At least 1 screenshot uploaded (1280×800 or 640×400 PNG/JPEG)
- [ ] 128×128 icon present (auto-included in zip)
- [ ] Detailed description pasted
- [ ] Permissions justifications pasted
- [ ] Single-purpose statement pasted
- [ ] `co-dialectic-chrome-extension.zip` uploaded
- [ ] Submit for review

Expected review timeline: **5-10 business days** for first-time publisher with multi-host extension.
