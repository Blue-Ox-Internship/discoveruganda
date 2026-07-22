# Discover Uganda — Website Aesthetic & Design Philosophy

> This document governs every visual decision on the website.
> Read this before designing or building any page, component, or layout.

---

## The One-Line Brief

> "A luxury travel magazine that happens to be about a card game — the culture is in the content, not the chrome."

---

## The Feeling

**Like opening a book to read an adventure.**

Not a website. Not a product page. An experience you step into. The moment someone lands on this site, they should feel Uganda. The card game feels like a cultural artifact discovered inside that world — not a product being sold.

### The Immersion Principle

EVE Online's website was studied as a reference point — not for its dark space aesthetic, but for how a game website can make you feel like you're already *inside* the game's universe before you play a single card.

For EVE: dark near-black backgrounds make everything else glow. You are inside space.
For Discover Uganda: warm parchment, earthy depth, cultural texture make everything else feel found. You are inside Uganda.

The parallel is exact — EVE Online is a galaxy to explore, Discover Uganda is a country to explore. The energy maps directly. What changes is the atmosphere.

**EVE Online is dark with light inside it.**
**Discover Uganda is warm with culture inside it.**

---

## The Problem We Are Solving

**Current state:** A B2B website that features a game. White backgrounds, standard layout, generic SaaS-style components. The game is content that lives *on* the website.

**Target state:** The website lives *inside* the game world. Every page is Uganda. The cards feel like artifacts discovered within that world.

The test for every design decision:

> "Does this feel like I'm *in* Uganda and *discovering* the game — or like I'm on a website *about* it?"

---

## Color: Use Almost None

The interface itself is near-colorless. This is not minimalism for its own sake — it is what makes the cards, photography, and cultural elements hit with full force.

A glowing game card on warm parchment looks like a museum artifact.
The same card on a white background looks like an e-commerce listing.

### UI Palette — Three Tones Only

| Role | Color | Hex |
|---|---|---|
| Background | Warm parchment / cream | `#F7F2E8` |
| Primary text | Deep earthy brown (not black) | `#2C1A0E` |
| One UI accent | Warm gold | `#C8922A` |

### The Region Color Rule

**Region colors appear ONLY on cards, map elements, and card-related UI.**
They do not appear as general interface color — not in buttons, not in backgrounds, not in navigation.

| Region | Color | Hex | Appears on |
|---|---|---|---|
| Central | Forest Green | `#2D6A4F` | Destination cards, region badge, map |
| Western | Deep Blue | `#1B4F8A` | Destination cards, region badge, map |
| Northern | Gold / Amber | `#E5A020` | Destination cards, region badge, map |
| Eastern | Deep Red | `#C0392B` | Destination cards, region badge, map |
| Universal | Silver / Slate | `#8E9BAE` | Journey cards only |

When region colors appear on a cream background, they command attention. If they appear everywhere in the UI, they become noise.

---

## Cultural Elements: Punctuation, Not Decoration

Ugandan cultural patterns are used intentionally and sparingly. They feel *discovered as you scroll* — not designed-in as decoration. One kitenge strip creates a moment. Kitenge everywhere creates wallpaper.

### Where Each Pattern Appears

| Element | Placement | Notes |
|---|---|---|
| **Kitenge pattern strip** | Thin horizontal divider between page sections | One row, full width. Not a background fill. |
| **Kitenge motif** | Card frame border decoration | Reinforces the physical card aesthetic |
| **Kitenge texture** | Footer background | Full pattern, muted/dark version — dignified, not loud |
| **Bark cloth texture** | About section or one dark accent section | Uganda's bark cloth is UNESCO heritage. Deep brown, organic, fibrous. Use as a background texture on one section only. |
| **Woven grass mat** | Subtle background on one secondary section | Geometric, earthy, traditional |
| **Red soil wash** | Subtle texture on one section | Uganda's iconic red laterite — recognisable to anyone who has been there |

### The Consistency Test
Before adding any cultural element, ask: does this element earn its place, or is it filling space? If it is filling space, remove it.

---

## Typography

| Use | Font | Style |
|---|---|---|
| Page headings | Playfair Display or Cormorant Garamond | Bold serif — editorial, dignified |
| Card titles | Playfair Display 700–900 | Large, commanding — title-screen energy |
| Body text | Inter | Clean, airy, generous line height (1.7+) |
| Region labels / categories | Any sans-serif | Small caps, uppercase, tracked out — restrained, intentional |
| Cultural accent text | Playfair Display italic | Fact pills, pull quotes, game flavor text |

Headings should be **large and bold**. Not article-sized — title-screen-sized. The difference between "this is a website" and "this is a world" is often just scale.

---

## Page Structure Principles

1. **Sections bleed into each other** via gradients — no hard borders. The page flows like scrolling through a landscape.
2. **Lots of space** — content does not fight for attention. Museum spacing, not grid density.
3. **Hero sections are cinematic** — full-viewport, dramatic Uganda landscapes, minimal text.
4. **Warm overlay on hero images** — cream/amber tone, not dark. Condé Nast Traveler cover energy, not a streaming platform.
5. **Navigation: transparent and minimal** — disappears into the imagery. Does not compete with the visuals.
6. **Kitenge strips as section dividers** — replacing `<hr>` or whitespace-only breaks.

---

## Page-by-Page Design Direction

### Home Page

**Hero:** Full-viewport Ugandan landscape photograph. Warm cream/amber gradient overlay — not dark. One large serif headline ("Travel Like a Ugandan"), one discreet CTA. The image breathes. Minimal text. The landscape does the work.

**Subsequent sections:** Wide, spacious. Cream background. Content does not fight for attention. Kitenge strip as the visual boundary between sections.

**Cards section:** Museum spacing. Each card has room to breathe. The region colors appear here — the only color on the page — so they command.

---

### Navigation

Fully transparent over hero imagery. Dark text becomes white over photography. Almost invisible until needed. Does not have a coloured background strip. On scroll, fades to a very subtle parchment/cream bar — never a stark white band.

---

### Explore Page

Destination cards on cream background. Generous grid spacing — not a tight e-commerce grid. Filter pills use understated styling (earthy brown text, parchment background, gold accent on active). The cards are the visual event on this page — everything else steps back.

---

### Login Page

**Split-panel layout.**

- **Left panel:** Full-bleed cinematic Ugandan landscape photograph. This is the dominant visual. No text overlaid. The country speaks for itself.
- **Right panel:** Warm parchment (`#F7F2E8`) background. The form lives here. Deep earthy brown text. One gold accent on the submit button only.

**Copy:**
- Heading: "Begin Your Journey" — not "Welcome back" or "Sign In"
- Submit button: "Start Exploring" — not "Log In"
- Register link: "Don't have a card yet? Join the adventure"

The form is secondary to the feeling of stepping into Uganda. This page should feel like opening a travel journal — not signing up for a SaaS product.

---

### Register Page

Same split-panel structure as login. Different photograph — ideally a different region to show breadth.

**Copy:**
- Heading: "Join the Adventure"
- Submit button: "Create My Journey"
- Login link: "Already exploring? Sign in"

---

### Profile Page

**Not a dashboard. A travel journal.**

- The user's name as a large serif heading at the top — like the name on the cover of a field journal
- Points displayed as a dramatic large serif number — expedition score, not loyalty counter
- Achievement badges look like earned stamps — physical, tactile feel. Region colors fill the badge shapes. Locked badges are faint outlines. Earned badges are fully colored and present.
- The feedback tab framed as "Send a Dispatch" — a traveller's note back to the team
- If not logged in: fan of 3 card backs visible, "Your Journey Awaits" in large serif, two warm-toned CTAs below

---

### Footer

Full kitenge pattern background — muted, dark version. "Travel Like a Ugandan" centered in elegant serif. The pattern fills the full width. This is the one place kitenge is allowed to fill a background, because it closes the page the way a book cover closes a story.

---

## References

The design direction draws from:

- **Singita and &Beyond** — luxury African safari brands. Earthy, spacious, premium. Culture through restraint.
- **Condé Nast Traveler Africa editions** — editorial photography-first, minimal chrome around the content
- **Aesop** — minimal container, rich content inside. The packaging does not compete with what is inside it.
- **EVE Online** — not the dark aesthetic, but the principle: the website is the universe, not a page about the universe

---

## What to Avoid

| Avoid | Why |
|---|---|
| White or near-white backgrounds | Too clinical, no warmth, cards lose impact |
| Region colors in buttons or navigation | They lose meaning; reserve them for cards only |
| Kitenge as a repeating background fill | Becomes wallpaper; loses cultural weight |
| Generic SaaS layout patterns | Centered white card on grey = any startup, not Uganda |
| Dark overlays on hero photographs | This is warm and earthy, not dramatic and cold |
| Tight card grids | Museum spacing. Each card is a moment, not a list item |
| Standard form language ("Sign In", "Create Account") | Replace with journey-language ("Begin Your Journey", "Join the Adventure") |
| Emojis or icons as decoration | Cultural illustrations do that job better |

---

## Design System Architecture

### The Core Rule: No Hardcoded Values

No color, font, size, spacing, radius, shadow, timing, or rotation value is ever written directly into a component. Every value is a CSS custom property (design token). This means:

- Switching themes = changing token values in one file
- Every component works correctly in any theme automatically
- Maintenance is editing the token, not hunting through every file

### Token Structure

All tokens live in `artifacts/discover-uganda/src/index.css` under a `@theme` block (Tailwind v4 native). Token categories:

```css
@theme {
  /* Colors — roles, not names */
  --color-background:       #F7F2E8;   /* warm parchment */
  --color-surface:          #EFE9D8;   /* slightly deeper, for cards/panels */
  --color-surface-raised:   #E8E0CC;   /* elevated surfaces */
  --color-text-primary:     #2C1A0E;   /* deep earthy brown */
  --color-text-secondary:   #6B4C35;   /* mid brown, secondary copy */
  --color-text-muted:       #9A7D68;   /* captions, labels */
  --color-accent:           #C8922A;   /* single UI gold — used sparingly */
  --color-border:           #C9B99A;   /* parchment-toned border */
  --color-border-strong:    #8C6B45;   /* stronger border for emphasis */

  /* Region colors — card context ONLY */
  --color-region-central:   #2D6A4F;
  --color-region-western:   #1B4F8A;
  --color-region-northern:  #E5A020;
  --color-region-eastern:   #C0392B;
  --color-region-universal: #8E9BAE;

  /* Typography */
  --font-heading:   'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-body:      'Inter', 'DM Sans', system-ui, sans-serif;
  --font-label:     'Inter', system-ui, sans-serif;  /* small caps, tracked */

  /* Type scale — named by role, not by size */
  --text-display:   clamp(3.5rem, 8vw, 7rem);    /* hero headlines */
  --text-title:     clamp(2rem, 4vw, 3.5rem);    /* section headings */
  --text-heading:   clamp(1.5rem, 2.5vw, 2rem);  /* card titles, sub-sections */
  --text-body:      1.0625rem;                    /* 17px — comfortable body */
  --text-small:     0.875rem;                     /* labels, captions */
  --text-micro:     0.6875rem;                    /* region codes, micro labels */

  /* Spacing scale */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   2rem;
  --space-lg:   4rem;
  --space-xl:   8rem;
  --space-2xl:  14rem;

  /* Borders — sharp everywhere */
  --radius:         0;      /* no rounding. ever. */
  --border-thin:    1px;
  --border-mid:     2px;
  --border-thick:   3px;

  /* Asymmetric rhythm — measured values, not random */
  --rotate-card-a:    1.5deg;
  --rotate-card-b:   -1deg;
  --rotate-card-c:    2.5deg;
  --rotate-card-d:   -0.75deg;
  --offset-card-y-a:  -12px;
  --offset-card-y-b:   8px;
  --offset-card-y-c:  -20px;
  --skew-section:    -1.5deg;  /* diagonal section cuts */

  /* Animation timing */
  --ease-card-deal:  cubic-bezier(0.34, 1.56, 0.64, 1);   /* physical overshoot */
  --ease-ink:        cubic-bezier(0.25, 0.46, 0.45, 0.94); /* smooth ink spread */
  --ease-stamp:      cubic-bezier(0.36, 0.07, 0.19, 0.97); /* fast, heavy impact */
  --ease-page:       cubic-bezier(0.4, 0, 0.2, 1);          /* page-weight movement */

  --duration-fast:   150ms;
  --duration-mid:    350ms;
  --duration-slow:   700ms;
  --duration-reveal: 1200ms;
}
```

---

## Sharp Edges Everywhere

**No `border-radius` on any card, button, panel, input, or container.**

Rounded corners are the single most common design choice on the web right now. They signal "friendly SaaS product." Sharp corners signal something different: deliberate, crafted, physical. A destination card with sharp corners looks like a premium printed artifact. With rounded corners it looks like an app component.

This also connects directly to Ugandan craft aesthetics — kitenge patterns, bark cloth, woven mats are all geometric and angular. Sharp edges are culturally consistent.

### Buttons

Not pill-shaped. Not rounded. Two permitted button styles:

**Style A — Bordered sharp:**
```
┌──────────────────────┐
│  BEGIN YOUR JOURNEY  │
└──────────────────────┘
```
Sharp corners. Thick border (`var(--border-thick)`). No fill at rest. On hover: border slides to an offset position (like a shadow copy of the border appears displaced). Never scales. Never changes color drastically.

**Style B — Corner-cut:**
```
┌─────────────────────
│  BEGIN YOUR JOURNEY
│
```
One corner cut diagonally with `clip-path`. Feels like a wax seal broken open. Used for primary CTAs only.

---

## Asymmetric Layout System

### The Rule: Measured, Not Random

Asymmetry that looks intentional is built from a small set of repeating offset values — the same rotations and offsets used consistently throughout the site. Asymmetry that looks accidental is every developer inventing their own values.

The token file defines all permitted asymmetry values (see `--rotate-card-*` and `--offset-card-y-*` above). Components pull from those tokens. Nothing is invented at the component level.

### Layout Techniques

**Grid with named areas (not equal columns):**
```css
grid-template-columns: 1fr 2.4fr 0.8fr;
grid-template-areas:
  "label  photo  ."
  ".      photo  text"
  ".      .      text";
```
A heading starts at column 2. An image bleeds off the right edge. Text sits lower than the image. The eye travels.

**Card stacking — like cards on a table:**
Cards in a set are not aligned to a uniform grid. Each card has its own rotation and vertical offset from the defined token set. The result looks like a hand of cards spread on a wooden table — deliberate, physical, human.

```css
.card:nth-child(1) { transform: rotate(var(--rotate-card-a)) translateY(var(--offset-card-y-a)); }
.card:nth-child(2) { transform: rotate(var(--rotate-card-b)) translateY(var(--offset-card-y-b)); }
.card:nth-child(3) { transform: rotate(var(--rotate-card-c)) translateY(var(--offset-card-y-c)); }
```

**Diagonal section edges:**
Instead of a horizontal cut between sections, use a `clip-path` skew. The angle is always `var(--skew-section)` — never a different value.
```css
clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%);
```

**Overlapping elements:**
A card or image that sits half inside one section and half in the next, via negative margin or absolute positioning. Creates visual continuity — you scroll *through* content, not past it.

**Variable card sizes in the same view:**
Not all cards the same height. A featured card is taller. The one beside it is shorter. The third is medium. The sizes follow a deliberate ratio (e.g. 3:2:2.5), not a random distribution.

**Vertical text labels:**
Section names written vertically along the left margin, rotated 90 degrees. Small caps, tracked out. Feels editorial — National Geographic, not Bootstrap.

---

## Animation System

### What Is Never Used

These are so common on websites they are invisible — and they make the site look like every other site:

| Banned animation | Why |
|---|---|
| Fade in on scroll (`opacity: 0 → 1`) | On every website built after 2015 |
| Scale on hover (`transform: scale(1.05)`) | Every card component on the internet |
| Slide from left / right | Every React app |
| Parallax scrolling backgrounds | Done to death, also causes motion sickness |
| Bounce / elastic on page load | Playful, not premium |
| Skeleton loaders with shimmer | Fine for data apps, not for this aesthetic |
| Spinning loaders | Same |

### What Is Used Instead

**Card deal animation:**
Cards slide onto the page at their own rotation angle — as if dealt from a deck held off-screen. Not from left, not from right — from the angle the card will rest at. Uses `var(--ease-card-deal)` (slight overshoot, physical feel). Duration: `var(--duration-slow)`.

**Ink reveal:**
Text sections reveal as if ink is bleeding into parchment paper. Achieved with an SVG clip mask that expands from top-left. Uses `var(--ease-ink)`. Duration: `var(--duration-reveal)`.

**Stamp landing:**
Achievement badges do not float or fade in. They stamp down — fast, decisive, heavy. Scale from 1.4 to 1 in `var(--duration-fast)` using `var(--ease-stamp)`. A brief shadow appears on impact.

**Border offset hover:**
Buttons and bordered elements on hover: a second border appears offset by 4px, creating a shadow-copy effect. No scale. No fill. The border steps.

**Map route trace:**
On the Uganda map (profile page / home), route lines between regions draw themselves — SVG `stroke-dashoffset` animation. The line appears to travel across Uganda as you watch.

**Card lift:**
On hover, a card lifts and its shadow shifts direction (as if a light source is above and the card tilts toward you). Shadow `y` decreases, shadow `blur` increases, and the card rotates by 0.5deg further in its resting direction. Never translates upward.

---

## Component Reusability Rules

Every component receives values through props and CSS custom properties — never through hardcoded values inside the component.

### Component contract:
- Colors: always `var(--color-*)` tokens
- Fonts: always `var(--font-*)` tokens
- Sizes: always `var(--text-*)` or `var(--space-*)` tokens
- Rotations: always `var(--rotate-card-*)` tokens (passed as prop index)
- Animations: always `var(--ease-*)` and `var(--duration-*)` tokens

### Theme switching:
A theme is a new set of values for the same token names. The `@theme` block in `index.css` is the only file that changes. All components automatically adapt.

Example: a "night mode" or future seasonal theme changes `--color-background`, `--color-text-primary`, and accent values — every button, card, and section updates with no component edits.

---

## The Journey Principle for Page Structure

The whole website is a journey — not a series of pages. Each page section is a moment in that journey, not a content block. Practically:

- **No two consecutive sections look the same** — vary the grid, the image position, the text size
- **Each section reveals something new** about Uganda or the game
- **Scroll feels like forward motion**, not scrolling a list
- **Section transitions are spatial**, not just visual — you feel like you have moved somewhere, not just seen something new
- **The narrative has rhythm**: big cinematic moment → intimate detail → cultural texture → call to action → rest

Think of it as chapters in a book, not sections on a sales page.
