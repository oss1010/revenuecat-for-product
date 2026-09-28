# RevenueCat for Product Teams: a concept page

A concept refresh of RevenueCat's /for-product page, made for a Senior Product Marketing Manager hiring assignment. It is not an official RevenueCat page.

- Live page: https://revenuecat-for-product-nu.vercel.app/
- How it was made: https://revenuecat-for-product-nu.vercel.app/process/

## Folder structure

- `site/`: the published static site, in plain HTML, CSS and JavaScript. `site/process/` is the process doc.
- `docs/`: positioning, architecture, copy, the competitive scan, and the iteration log, where every decision and audit is recorded.
- `.claude/agents/`: the five review agents: pm-critic, competitor-watch, web-copy, brand-guard and claim-auditor.

## Run it locally

There is no build step. Serve the `site` folder:

```
python3 -m http.server 4173 --directory site
```

Then open http://localhost:4173.
