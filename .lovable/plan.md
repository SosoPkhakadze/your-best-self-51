## Concept — "EPOCH / OS"

A long-scroll showcase site presenting the app as if it were a flagship hardware/software launch. Aesthetic: **Dark Performance Tech** — near-black canvas (`#070808`), surgical neon-lime accent (`oklch(0.92 0.22 130)`), mono-spaced numerics (JetBrains Mono / Geist Mono), tight industrial sans display (Geist or Neue Haas Grotesk feel via Inter Tight), micro labels in uppercase tracking-wide. Inspirations: Whoop, Linear, Vercel, Arc, Rivian dashboard, Teenage Engineering specsheets.

No purple gradients, no glassmorphism clichés. Texture comes from: hairline 1px borders, monospace data labels, faint dotted grid backgrounds, scanline-thin dividers, status dots, and oversized numerals used as visual furniture.

## Site structure (single long scroll)

```
00  HERO              — wordmark, tagline, 3 floating phones (Dashboard/Active Workout/Feed)
01  AUTH              — Sign in / Sign up (2 phones)
02  ONBOARDING        — 8 step screens shown as a horizontal phone strip
03  DASHBOARD         — hero phone + annotation callouts
04  NUTRITION + FOOD  — Planner-Nutrition, Add Food (2 phones)
05  TRAINING          — Planner-Training, Add Workout, Active Workout, Finish summary (4)
06  PROGRESS          — Progress screen hero + chart detail
07  SOCIAL FEED       — Feed, Create Post, Notifications (3)
08  PROFILES          — My Profile, Other Profile, Followers (3)
09  MESSAGING         — Chats list, Chat thread, Group info (3)
10  SETTINGS + PAYWALL— Settings, Paywall (2)
11  FOOTER            — spec-sheet style colophon
```

Each section: small uppercase eyebrow ("§04 / NUTRITION"), oversized headline, 1–2 line description, then the phone(s). Phones are real rendered React UI inside a custom SVG iPhone frame (notch/dynamic island, hairline bezel, subtle inner shadow) — no stock device PNGs.

## Phone rendering approach

- One reusable `<PhoneFrame>` wrapper: 390×844 logical canvas, `border-radius: 56px`, 1px outer bezel, dynamic island, status bar (time, signal, battery — all themed).
- Each screen is its own React component under `src/components/screens/` with the **full pixel-detailed UI** of that screen — real lists, tabs, charts, bubbles, inputs (non-interactive but visually complete).
- Charts: hand-rolled SVG (line + bars) — no chart library bloat. Muscle map: inline SVG silhouette with highlighted muscle groups.
- Avatars/photos: a small set of curated Unsplash athlete portraits + generated abstract gradients for food/workout thumbs.
- Mono numerics throughout (calories, weights, timers) — this is the signature.

## Routes & files

```
src/routes/
  index.tsx                    — entire long-scroll page composed of section components
src/components/
  PhoneFrame.tsx
  StatusBar.tsx
  SectionHeader.tsx            — eyebrow + title + lede
  Annotation.tsx               — dotted-leader callouts around phones
  screens/
    AuthSignIn.tsx
    AuthSignUp.tsx
    Onboarding.tsx             — renders given step (goal/gender/dob/height/weight/target/activity/units)
    Dashboard.tsx
    PlannerNutrition.tsx
    PlannerTraining.tsx
    AddFood.tsx
    AddWorkout.tsx
    ActiveWorkout.tsx
    WorkoutSummary.tsx
    Progress.tsx
    Feed.tsx
    CreatePost.tsx
    Notifications.tsx
    MyProfile.tsx
    OtherProfile.tsx
    Followers.tsx
    ChatsList.tsx
    Chat.tsx
    GroupInfo.tsx
    Settings.tsx
    Paywall.tsx
  sections/
    Hero.tsx, AuthSection.tsx, OnboardingSection.tsx, DashboardSection.tsx,
    NutritionSection.tsx, TrainingSection.tsx, ProgressSection.tsx,
    SocialSection.tsx, ProfilesSection.tsx, MessagingSection.tsx,
    SettingsPaywallSection.tsx, Footer.tsx
src/styles.css                 — design tokens (see below)
```

## Design tokens (src/styles.css)

```
--background: oklch(0.16 0.005 150)      /* near-black with a green undertone */
--surface:    oklch(0.21 0.006 150)      /* phone screen base */
--surface-2:  oklch(0.25 0.006 150)      /* cards inside phones */
--foreground: oklch(0.97 0.01 130)
--muted-foreground: oklch(0.65 0.01 150)
--border:     oklch(0.30 0.005 150)
--hairline:   oklch(0.35 0.005 150 / 0.5)
--accent:     oklch(0.90 0.21 128)       /* electric lime */
--accent-ink: oklch(0.18 0.05 130)       /* on-accent text */
--danger:     oklch(0.70 0.22 25)
--info:       oklch(0.78 0.13 220)
--font-display: "Inter Tight", system-ui
--font-mono:    "JetBrains Mono", ui-monospace
```

Fonts loaded via Google Fonts in `__root.tsx` head links.

## Hero details

- Background: pure `--background` with a faint dotted grid + a single vertical lime hairline at the left margin.
- Wordmark "EPOCH" in 220px Inter Tight, tracked tight, with a small superscript "/OS  v1.0".
- Right column: stacked spec-sheet metadata in mono ("FORM FACTOR — IOS NATIVE", "BUILD — 2026.05", "FRAMES — 20").
- Three phones angled subtly (CSS transforms, no heavy 3D), Active Workout in front showing the running timer in giant lime mono digits.

## Motion

Framer Motion only for: hero phone parallax on scroll, phone reveals (`opacity + 8px y`), and the rest timer bar in Active Workout pulsing. No bouncy springs — ease-out, 400ms.

## SEO & meta

`head()` on `index.tsx`: title "EPOCH / OS — Train, Eat, Connect", proper description, og tags. Single H1 = "EPOCH / OS". Each section uses H2.

## Out of scope

- No backend, no auth, no Lovable Cloud — purely a static showcase.
- Phones are visual-only (no real form submission). Hover/scroll polish only.
- No mobile-app build. Site itself is responsive: on <768px the phones scale down and stack one-per-row.

## Build order

1. Tokens, fonts, `PhoneFrame`, `StatusBar`, `SectionHeader`.
2. Hero + 3 hero phones (Dashboard, Active Workout, Feed) — proves the visual language.
3. Remaining 17 screens, batched by section in the order listed above.
4. Final QA pass: scroll the whole page, verify every phone renders at 390px and scales cleanly, check contrast on lime accents.
