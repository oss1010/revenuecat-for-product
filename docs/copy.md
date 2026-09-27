# Copy: /for-product refresh

Status: v1.2 LOCKED. Hero B1 by default, B2 as the hero test variant.
Voice: short, direct, a little playful. The headlines carry the
argument on their own. All mock data is illustrative and labeled.

v1.2 changes (build phase 1.5, 2026-09-27), each marked [v1.2] below:
- Secondary CTAs are chevron text links everywhere. The closing band
  keeps the page's last filled primary.
- Section 4: no trailing period on the third proof point.
- Section 5: simulator v2 copy, and the Pixelcut proof block.
- Section 6: new flow labels, and Floga as a customer story block.
- Section 7: OpenAI proof block.
- Section 8: card CTAs as chevron text links.
- Proof wording is exact, from the claim audit logged 2026-09-27.

## 1. Hero

H1 (default, B1):
Build a subscription experience worth renewing.

H1 (hero test variant, B2):
Build the reason they renew.

Sub (both):
Design paywalls and test pricing and offers without waiting on an app
release. Keep what wins on predicted 12-month value, not just early
conversion.

Primary CTA: Start for free
Secondary CTA: Talk to sales, as a chevron text link [v1.2]
Tertiary link: Already on RevenueCat? Open Paywalls in your dashboard

Hero visual, decision cards (tagged Illustrative):
- Change: "Paywall: annual plan featured", then toast "Published. No
  app release."
- Learn: "Experiment: B leads on predicted 12-month LTV"
- Fit: "Targeting: different paywall for users in Germany"
Mobile caption chip cycles: "Changed: annual plan featured" /
"Learning: B leads on predicted 12-month value" / "Fitted: different
paywall in Germany"

## 2. Scale strip
146K+ apps supported
$17B+ in revenue processed
[customer logos from revenuecat.com only]
(Not used: the Refund Control page's trust line. It says "annual
revenue", which the homepage labels don't. Audit 2026-09-27.)

## 3. The shift
Headline: From ticket to test.
Left label: Before
Before steps: File a ticket > Wait for a sprint > Ship an app update >
Wait for review > Judge it on trial starts
Right label: With RevenueCat
Now steps: Edit it in the dashboard > Test it in your app > See
predicted 12-month value > Roll out the winner
Separate beat, visually distinct: Offer it on the web, too.
Rows, anchor-linked: Change it without a release / Learn what users
value / Fit the offer to every user

## 4. Change it without a release
Headline: Your paywall shouldn't wait for a release.
Body: Integrate once, then change paywalls and the plans you offer
from the dashboard. One release, then none.
Proof points:
- Visual editor and pre-built templates
- AI Editor for first drafts, from a prompt or a screenshot
- Collaborator roles decide who can change paywalls and offerings [v1.2]

## 5. Learn what users value
Headline: Win the year, not just the week.
Body: Early conversion can crown the wrong winner. RevenueCat
Experiments forecast each variant's 12-month value while the test
runs. Roll out the one predicted to earn more.
Simulator [v1.2]:
- Label: Illustrative experiment
- The PM's panel, left:
  - Header: Experiment: Tidelark paywall test
  - State: Running. After rollout: Rolled out.
  - Toggle: Judge by: Trial conversion | Predicted 12-month LTV
  - Variant A: Monthly first, 3-day trial. 12.4% trial conversion,
    $18.20 predicted 12-month LTV.
  - Variant B: Annual first, 7-day trial. 9.1% trial conversion,
    $26.70 predicted 12-month LTV.
  - Both metrics on every card, always. The judged metric is large.
  - Winner pill: Leads. (No Chance to Win or interval: RevenueCat
    shows those for conversion metrics only, not predicted LTV.)
  - Status, conversion view: A leads on trial conversion
  - Status, LTV view: B leads on predicted 12-month LTV, even though A
    converts more.
  - Button: Roll out winner
  - Confirm dialog: "Roll out variant [current winner] to all users?"
    Buttons: Confirm, Cancel.
  - Toast, after Confirm: Rolled out. No app release.
- The user's phone, right, showing only the paywall:
  - App: Tidelark (a morning-routine app)
  - Headline: Mornings that stick.
  - Plans: Monthly, Annual. The featured plan carries its trial badge:
    3-day trial (variant A) or 7-day trial (variant B).
  - Button: Start free trial. No prices.
- Demo cursor label: You
- Caption: Illustrative data. The 12-month forecast appears once an
  experiment with revenue as its primary metric has enough data. It's
  a signal, not a guarantee.
Below the simulator, one compact row [v1.2]:
- Chart card, static, tagged Illustrative: Paywall performance:
  conversion, LTV and abandonment for each RevenueCat paywall.
  Sparkline labels: Conversion, LTV, Abandonment.
  (Production note: this card shows realized LTV. No forecast and no
  "predicted" on it.)
- Supporting lines:
  - Test up to four variants at once.
  - Compare your conversion, churn and LTV with similar apps in
    Benchmarks.
Proof block [v1.2]:
- Quote: "Being able to find a variant that produces a 16% increase in
  subscribers definitely makes RevenueCat worth it." Key number in red:
  16% increase.
- Name and role: Dominique Yahyavi, Co-Founder, Pixelcut
- Link: Read case study >
  (https://www.revenuecat.com/customers/pixelcut)
- Source: https://www.revenuecat.com/feature/experiments. The metric is
  subscribers. Never restate it as revenue, LTV or conversion rate.
- MOJO was the first choice and failed the audit: its "$1M MRR" line
  has no speaker, no timeframe and no support in its case study.

## 6. Fit the offer to every user
Headline: Different users. Different offers. App or web.
Body: Target paywalls by country, platform, app version or your own
attributes. Build web funnels that route visitors by their answers
and take payment. One link unlocks their subscription in the app.
Flow labels (flow tagged Illustrative) [v1.2]: Ad click > Web funnel >
Checkout > Get a Redemption Link > Download the app > Tap the link,
subscription active
Step details, kept from v1.1 for the visual: the funnel step asks
"What's your goal?" and is tagged "Localized to the visitor's
country"; checkout shows "Apple Pay or Google Pay, where supported".
Customer story block [v1.2]:
- Label: Customer story
- Text: Floga made $120K+ in one day selling lifetime memberships
  through RevenueCat Web Billing, while its app was still in
  development. Key number in red: $120K+.
- Link: Read case study > (https://www.revenuecat.com/customers/floga)
(Production note: the case study covers Web Billing only. The block
sits apart from the funnel flow so it doesn't suggest Floga used
Funnels.)
Small print: Targeting is included on Pro and Enterprise.

## 7. Teams and foundation
Headline: Decide who can change a live paywall.
Body: Give each teammate a collaborator role, including a Growth role
that can edit paywalls and offerings. Paywall version history shows
who saved each version, and when. Audit logs show who changed what in
the project. On Enterprise, sign in with SSO over SAML or OIDC.
Underneath, one set of entitlements covers the App Store, Google Play
and the web. Refund Control answers store refund requests with usage
data and your preference. The store makes the final call.
Governance badges, leading the visual:
- Collaborator roles, including a Growth role for paywalls and
  offerings
- Paywall version history
- Audit logs
- SSO with SAML or OIDC, on Enterprise
Line: Pull your dashboard's chart data into your own tools with the
Charts API.
Proof block, for the enterprise reader [v1.2]:
- Quote: "With RevenueCat, we never had to slow down."
- Name and role: Sara Conlon, Head of Financial Engineering, OpenAI
- Link: Read case study >
  (https://www.revenuecat.com/customers/revenuecat-openai)
- Source: the OpenAI case study. The Infrastructure page's OpenAI quote
  contains an em dash, which this page bans; published quotes are never
  re-punctuated, so the complete case-study sentence is used instead.
(Production note: no undo, revert or approval claims anywhere in this
section. None is documented.)

## 8. Two ways to start
Headline: Two ways to start.
Card 1, "Pro": Free up to $2,500 in monthly tracked revenue, then 1%
of all tracked revenue, with Experiments and Targeting included.
Footnote: Monthly tracked revenue is measured before store commission
and taxes.
CTA, card 1: Start for free, as a chevron text link [v1.2]
Card 2, "Enterprise": Custom pricing and SSO.
CTA, card 2: Talk to sales, as a chevron text link [v1.2]
Final band headline: Build the reason they renew.
Final band headline with ?v=b2: Build a subscription experience worth
renewing.
(Each variant closes with the other's line: the hero and the final
band swap together.)
Primary CTA: Start for free, the page's last filled primary. Secondary:
Talk to sales, as a chevron text link [v1.2].
Link: Already on RevenueCat? Open Paywalls in your dashboard

## Fictional app
Tidelark. Stridewell was rejected: StrideWell is a real App Store app.
No exact match for Tidelark on the web or in the stores. A web search
is not a trademark check, so search both stores and a trademark
database before shipping.
