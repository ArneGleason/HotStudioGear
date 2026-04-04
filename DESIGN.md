# Design System: The Analog Antiquarian

## 1. Overview & Creative North Star
The **Creative North Star** for this design system is **"The Obsessive Curator's Vault."**

This system rejects the sterile, flat aesthetic of modern SaaS. Instead, it leans into the heavy, tactile, and slightly over-engineered world of 1970s high-fidelity audio hardware. We are building a digital experience that feels like it weighs forty pounds. Through the use of deep walnut textures, brushed metal faceplates, and glowing amber filaments, the UI should evoke the sensory experience of turning a weighted brass knob or flipping a heavy toggle switch.

To break the "template" look, we employ **Intentional Material Asymmetry**. Layouts should mimic the physical arrangement of a studio rack; primary controls are oversized and central, while secondary "utility" panels are tucked away in recessed metal bays. We use overlapping "parchment" cards to soften the industrial metal, creating a high-contrast editorial feel that transitions from "Cold Machinery" to "Warm History."

---

## 2. Colors: Tonal Depth & Mechanical Warmth
Our palette is rooted in the materials of mid-century electronics, punctuated by the neon urgency of "Gary’s" promotional schemes.

### Theme & Mode
- **Color Mode**: DARK
- **Custom Color Base**: `#FFB800`

### Core Palette
*   **Background / Surface (`#181210`)**: The deep, dark walnut wood grain. This is the foundation.
*   **Primary (`#ffdca1`)**: The amber glow of a vacuum tube or a backlit VU meter. Use for critical focal points.
*   **Primary Container (`#ffb800`)**: Deeper amber for accents.
*   **Secondary (`#ffb0ca`) / Secondary Container (`#ff479c`)**: The "Hot Pink" accent. Reserved exclusively for "Gary"—promotions, dubious life advice, and aggressive sales tactics.
*   **Tertiary (`#e2e2ca`)**: The cream parchment color used for "catalog cards" and editorial inserts.

### Surface Palette
*   **Surface Container Lowest**: `#130d0b`
*   **Surface Container Low**: `#201a18`
*   **Surface Container**: `#251e1c`
*   **Surface Container High**: `#2f2826`
*   **Surface Container Highest**: `#3b3331`
*   **Surface Variant**: `#3b3331`
*   **Surface Bright**: `#3f3835`

### Text & Icons
*   **On Background / On Surface**: `#ede0dc`
*   **On Primary**: `#412d00`
*   **On Secondary**: `#640036`
*   **Outline**: `#9e8f78`
*   **Outline Variant**: `#514532`

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be achieved through **Material Shifts**. Transition from a `surface` (walnut) to a `surface-variant` (brushed steel) to define sections. A section should end where the material ends, not where a line is drawn.

### Surface Hierarchy & Nesting
Treat the UI as a physical assembly:
1.  **Chassis (Base Layer):** `surface` or `surface-dim` (The wood cabinet).
2.  **Faceplates (Mid Layer):** `surface-container-high` or `surface-variant` (The brushed metal inserts).
3.  **Components (Top Layer):** `tertiary` (Parchment cards) or `primary-container` (Glowing plastic buttons).

### The "Glass & Gradient" Rule
To mimic the depth of a glass-covered VU meter, use `surface-bright` with a 40% opacity and a 12px backdrop-blur for floating modal elements. For CTAs, apply a subtle linear gradient from `primary` to `on-primary-container` at a 165-degree angle to simulate the "sheen" of curved acrylic.

---

## 3. Typography: The Editorial Authority
The typography must feel like a mix of an expensive hi-fi manual and a high-end auction catalog.

*   **Display & Headline (Noto Serif)**: Large-scale, high-contrast serif. Used for "The Hook." This conveys the earnest, slightly overconfident tone of a seasoned (and perhaps disreputable) expert.
*   **Body (Work Sans)**: Clean, readable, and slightly industrial. This is for the "technical specs" that may or may not be factually accurate.
*   **Label (Space Grotesk)**: Use for utility text, small knobs, and "technical" metadata. The monospaced lean of Space Grotesk mimics the stamped metal labels of vintage electronics.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to make things "modern"; we use them to make things "heavy."

*   **The Layering Principle:** Avoid elevation shadows on base components. Instead, use "Inward Shadows" (inner-glow) on containers to make them look recessed into the wood or metal. A `surface-container-lowest` panel should appear "milled" into the `surface-variant` metal.
*   **Ambient Shadows:** For floating elements (like Gary’s pop-up "deals"), use a diffuse shadow: `offset-y: 20px`, `blur: 40px`, color: `rgba(0,0,0,0.6)`. This mimics a heavy object casting a shadow on a desktop.
*   **The "Ghost Border" Fallback:** If a border is required for input fields, use `outline-variant` at 20% opacity. It should look like a faint scratch or an etched line in the metal, never a digital stroke.

---

## 5. Components: The Mechanical Interface

### Buttons (Mechanical Toggles)
*   **Primary:** Rectangular with a slight `0.25rem` radius. Use a gradient from `primary` to `primary-container` to simulate a backlit plastic switch. On hover, the "glow" (inner shadow) should intensify.
*   **Gary’s Special:** Using `secondary-container` (Hot Pink). These should feel louder and slightly out of place, like a "Sale" sticker slapped on a $5,000 amplifier.

### Cards & Lists (The Parchment System)
*   **Product Cards:** Use the `tertiary` (cream) background. Forbid the use of divider lines. Separate items using `md` (1.5rem) vertical spacing.
*   **Bezels:** Frame these cards with a `surface-container-highest` border-image that looks like a metal or wood bezel.
*   **No Dividers:** Lists are separated by a subtle shift from `surface-container-low` to `surface-container-high`.

### Inputs & Toggles
*   **Text Inputs:** Recessed into the faceplate using an inner shadow. Text should appear in `primary` (Amber) to mimic a digital display.
*   **Checkboxes:** Styled as small amber indicator lamps. "Checked" state = Glow; "Unchecked" state = Dark plastic.

---

## 6. Do's and Don'ts

### Do
*   **Do** overlap elements. A parchment card should partially obscure a wood panel to create a sense of a physical workspace.
*   **Do** use "Brass" (`primary_fixed`) for iconography. Icons should look like they were cast in metal.
*   **Do** lean into the satire. Use typography scales that feel "too big" for the space, conveying the brand's unearned confidence.

### Don't
*   **Don't** use pure white. Use `on-background` or `tertiary` for all light surfaces to maintain the "vintage" warmth.
*   **Don't** use standard "Material" rounded corners. Stick to `sm` (2px) or `none` for metal/wood elements to keep them feeling machined.
*   **Don't** use 100% opaque borders. They break the illusion of physical materials.
*   **Don't** use Hot Pink (`secondary`) for anything other than Gary’s promotional madness. It is a high-vis warning of dubious value.
