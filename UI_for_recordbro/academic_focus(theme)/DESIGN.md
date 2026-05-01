---
name: Academic Focus
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393d'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#2a2a2e'
  surface-container-highest: '#353439'
  on-surface: '#e4e1e7'
  on-surface-variant: '#c9c4d4'
  inverse-surface: '#e4e1e7'
  inverse-on-surface: '#303034'
  outline: '#938e9d'
  outline-variant: '#484552'
  surface-tint: '#cbbeff'
  primary: '#cbbeff'
  on-primary: '#321a81'
  primary-container: '#9d8af2'
  on-primary-container: '#331a82'
  inverse-primary: '#614eb2'
  secondary: '#c7c5cf'
  on-secondary: '#303037'
  secondary-container: '#4b4b53'
  on-secondary-container: '#bcbac4'
  tertiary: '#c6c5d3'
  on-tertiary: '#2f303a'
  tertiary-container: '#9998a5'
  on-tertiary-container: '#30303b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cbbeff'
  on-primary-fixed: '#1d0061'
  on-primary-fixed-variant: '#493598'
  secondary-fixed: '#e3e1eb'
  secondary-fixed-dim: '#c7c5cf'
  on-secondary-fixed: '#1b1b22'
  on-secondary-fixed-variant: '#46464e'
  tertiary-fixed: '#e3e1ef'
  tertiary-fixed-dim: '#c6c5d3'
  on-tertiary-fixed: '#1a1b25'
  on-tertiary-fixed-variant: '#454651'
  background: '#131317'
  on-background: '#e4e1e7'
  surface-variant: '#353439'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
  section-gap: 48px
---

## Brand & Style

This design system is built on the principles of **Minimalism** with a scholarly, intentional perspective. The brand personality is that of a quiet library: studious, calm, and highly organized. It targets students and researchers who require a low-stimulus environment to achieve "deep work" states. 

The aesthetic avoids the aggressive energy of typical productivity tools in favor of a soft, sophisticated dark mode that reduces eye strain during long study sessions. The visual language relies on structural integrity and ample whitespace (breathable margins) rather than decorative elements. Every component exists to facilitate focus, using subtle color cues and refined typography to guide the user's journey without distraction.

## Colors

The palette is anchored by a "Soft Dark" foundation. Instead of pure black (#000000), which can create harsh contrast, the system uses a very deep charcoal-slate (#121215) for the base. 

- **Primary:** A muted, desaturated purple. It is used sparingly for primary actions, active states, and critical indicators. It should never be used for large backgrounds or glowing effects.
- **Surface Tiers:** UI depth is created through varying shades of deep gray. Secondary and tertiary grays define containers and separators.
- **Functional Neutrals:** Text colors are tiered to establish hierarchy; off-white for primary content and a medium-gray for metadata and labels to ensure the screen feels "quiet."

## Typography

The design system utilizes **Inter** for its exceptional legibility and neutral, systematic character. The typographic scale is highly disciplined, favoring clarity over expression.

- **Headlines:** Set with slight negative letter-spacing and a semi-bold weight to feel grounded and authoritative.
- **Body:** Generous line heights (1.5 - 1.6) are mandatory to ensure long-form text and task lists remain readable and don't feel cluttered.
- **Labels:** Small caps or increased letter spacing should be used for labels (like "DUE DATE" or "COURSE") to distinguish metadata from content without needing to use bold colors.

## Layout & Spacing

This design system uses a **fixed-width centered grid** for desktop (max-width 1200px) and a **fluid layout** for mobile devices. The rhythm is based on an 8px linear scale.

- **Whitespace as a Tool:** Margins between sections should be generous (48px+) to prevent the "wall of text" feeling common in academic apps.
- **The "Focus" Gutter:** Content columns are flanked by significant horizontal padding (24px on mobile, larger on desktop) to keep the user's eye centered on the primary task.
- **Information Density:** Use `stack-md` for related items (like tasks in a list) and `section-gap` between different content types (like Calendar vs. Task List).

## Elevation & Depth

To maintain the minimalist aesthetic, this design system rejects heavy drop shadows and neon glows. Depth is communicated through **Tonal Layers** and **Low-contrast Outlines**.

- **Z-Index 0 (Background):** The darkest color (#121215).
- **Z-Index 1 (Cards/Containers):** A slightly lighter gray (#1C1C21) with a 1px solid border (#2A2A30) to define edges.
- **Interactive States:** When an item is hovered or active, its background shifts slightly lighter, or a subtle 1px border in the primary purple is applied. 
- **Shadows:** If used (e.g., for modals), shadows must be extremely diffused, using a large blur (20px+) and low opacity (15%) to avoid looking "heavy."

## Shapes

The shape language is defined by **Gentle Roundedness**. The system uses a "Soft" (0.25rem/4px) base radius. This provides enough softness to feel modern and helpful, while maintaining a sharp, organized, and professional grid that aligns with academic rigor. 

- **Small Components:** Checkboxes and small tags use the base 4px radius.
- **Large Components:** Cards and main containers use a 8px (rounded-lg) radius.
- **Exceptions:** Search bars or specific pill-style filters may use a fully rounded (pill) radius to distinguish them from structural content.

## Components

- **Buttons:** Primary buttons use a solid primary purple background with dark text for high legibility. Secondary buttons are outlined with the tertiary gray. All buttons have a 4px corner radius.
- **Chips/Tags:** Used for "Subject" or "Priority." These use a desaturated version of the primary color or a neutral gray with "label-sm" typography. No icons unless necessary for clarity.
- **Lists:** Task lists should have high vertical padding (12px - 16px per row) and use subtle dividers (#2A2A30).
- **Checkboxes:** Simple squares with a 2px radius. When checked, they fill with the primary purple and trigger a subtle strikethrough on the text.
- **Input Fields:** Minimalist design with a 1px bottom border by default; transitioning to a full 4px rounded box with a subtle purple border on focus. 
- **Cards:** Used to group related content like "Upcoming Exams." Cards should have a 1px border and no shadow, creating a flat, "filed" look.
- **Academic Specifics:** 
    - **Progress Bars:** Thin (4px height), using the primary purple against a dark track. 
    - **Note Previews:** Use a monospace font variant for code or technical citations within cards.