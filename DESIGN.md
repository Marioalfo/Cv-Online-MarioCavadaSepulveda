---
name: Organic Minimalist
colors:
  surface: '#fff8f3'
  surface-dim: '#e0d9d3'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ec'
  surface-container: '#f4ede6'
  surface-container-high: '#eee7e1'
  surface-container-highest: '#e8e1db'
  on-surface: '#1e1b17'
  on-surface-variant: '#43483f'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efe9'
  outline: '#73796e'
  outline-variant: '#c3c8bc'
  surface-tint: '#46673d'
  primary: '#43643b'
  on-primary: '#ffffff'
  primary-container: '#5b7d52'
  on-primary-container: '#f8fff0'
  inverse-primary: '#abd19e'
  secondary: '#625e57'
  on-secondary: '#ffffff'
  secondary-container: '#e6ded6'
  on-secondary-container: '#67625b'
  tertiary: '#605d44'
  on-tertiary: '#ffffff'
  tertiary-container: '#79755b'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7edb9'
  primary-fixed-dim: '#abd19e'
  on-primary-fixed: '#032102'
  on-primary-fixed-variant: '#2e4e28'
  secondary-fixed: '#e9e1d9'
  secondary-fixed-dim: '#ccc5be'
  on-secondary-fixed: '#1e1b16'
  on-secondary-fixed-variant: '#4a4640'
  tertiary-fixed: '#e9e3c3'
  tertiary-fixed-dim: '#cdc7a8'
  on-tertiary-fixed: '#1e1c08'
  on-tertiary-fixed-variant: '#4a4730'
  background: '#fff8f3'
  on-background: '#1e1b17'
  surface-variant: '#e8e1db'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 3rem
  xl: 6rem
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is centered on a **Warm Minimalism** aesthetic, specifically tailored for a Full Stack Developer who values clarity, precision, and a human touch. It avoids the coldness of typical tech portfolios by utilizing an earthy, "organic" palette that suggests reliability and sustainability.

The emotional response should be one of "calm competence." By combining the structure of a professional developer's workspace with the softness of a lifestyle brand, the UI distinguishes itself from the aggressive visuals common in the industry. The style utilizes heavy whitespace, subtle tonal transitions, and high-quality typography to guide the user's attention toward the work (the code and the projects) without visual clutter.

## Colors
This design system uses a sophisticated palette of soft pastel greens (Sage), light browns (Sand/Beige), and muted yellows (Straw). 

- **Primary (Sage):** Used for primary actions, success states, and key highlights.
- **Secondary (Sand):** Used for large surface areas and subtle backgrounds to ground the UI.
- **Tertiary (Straw):** Used sparingly for warning states or to draw attention to small UI details like chips or notification dots.
- **Neutrals:** A warm charcoal is used instead of pure black to maintain the "organic" feel.

In **Dark Mode**, the saturations are lowered to ensure AA/AAA accessibility. Surfaces move from pure white to a deep "Off-Black" with warm undertones to prevent eye strain during long reading sessions.

## Typography
Inter is chosen for its systematic neutrality and exceptional legibility across both display and body roles. 

- **Headlines:** Use tight letter-spacing and high weights to create a strong visual "anchor" on the page.
- **Body Text:** Uses a generous line height (1.6) to ensure the technical descriptions in a portfolio remain readable and inviting.
- **Labels:** Utilize slightly increased letter spacing and medium weight for navigation items and metadata labels (e.g., project dates).
- **Mobile Scaling:** Large display types are significantly reduced for mobile screens to ensure the hero section remains above the fold without horizontal overflow.

## Layout & Spacing
The design system follows a **Fixed-Fluid Hybrid** model. Content is contained within a max-width of 1200px on desktop to maintain readability, while the grid itself is a 12-column fluid system.

- **Desktop (1024px+):** 12 columns, 24px gutters, 48px side margins.
- **Tablet (768px - 1023px):** 8 columns, 16px gutters, 32px side margins.
- **Mobile (Up to 767px):** 4 columns, 16px gutters, 16px side margins.

Vertical rhythm is strictly 4px-based. Sections are separated by large `xl` (96px) gaps to reinforce the minimalist "breathing room" philosophy.

## Elevation & Depth
This design system avoids heavy drop shadows in favor of **Tonal Layering** and **Soft Insets**. 

Depth is communicated through color shifts:
- **Level 0 (Background):** The base color (off-white or deep charcoal).
- **Level 1 (Cards/Containers):** A slightly lighter/darker surface with a 1px solid border.
- **Interactions:** Subtle, low-blur "Ambient Shadows" (10% opacity of the neutral color) appear only on hover to signal interactivity. 

Elements should feel "flush" with the page rather than floating far above it, emphasizing a grounded, architectural feel.

## Shapes
The shape language is **Soft**. 

Edges are rounded enough to feel approachable but remain sharp enough to feel professional and structured.
- **Buttons and Inputs:** Use `rounded-lg` (0.5rem) to provide a clear tactile target.
- **Cards and Hero Sections:** Use `rounded-xl` (0.75rem) to contain complex content within a friendly frame.
- **Icons and Small Badges:** Use `rounded-sm` (0.25rem) or full-pill shapes for tech stacks/tags.

## Components

### Navbar
The navbar should be semi-transparent with a backdrop-blur (12px) and a bottom border. The theme toggle should be a smooth sliding switch or a simple icon morph (Sun/Moon). Link items use `label-md` and have a subtle underline hover effect.

### Hero Section
Center-aligned or left-aligned with a massive `display-lg` headline. Use a primary action button (Sage) paired with a secondary text-only button for "View Resume."

### Project Cards
Cards use a Level 1 surface. Featured images should have a `rounded-lg` corner and sit inside the card with padding. Tech stacks are displayed as small, low-contrast chips using the Tertiary (Straw) color background with dark text.

### Experience Timeline
A vertical line using the `border` color, with small `primary` color dots. Title and Company use `headline-sm`, and description uses `body-md`.

### Contact Form
Inputs use a background color that is slightly off-base from the surface color to define the field area without needing heavy borders. On focus, use a 2px Sage border. The submit button should span the full width on mobile but be right-aligned and auto-width on desktop.