---
name: Sovereign Digital
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f1'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#424840'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#73796f'
  outline-variant: '#c2c8bd'
  surface-tint: '#446741'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#012104'
  on-primary-container: '#698d64'
  inverse-primary: '#aad1a3'
  secondary: '#306c00'
  on-secondary: '#ffffff'
  secondary-container: '#aaf778'
  on-secondary-container: '#337200'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0a200f'
  on-tertiary-container: '#718a72'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6edbd'
  primary-fixed-dim: '#aad1a3'
  on-primary-fixed: '#012104'
  on-primary-fixed-variant: '#2d4e2b'
  secondary-fixed: '#aaf778'
  secondary-fixed-dim: '#90da5f'
  on-secondary-fixed: '#0a2100'
  on-secondary-fixed-variant: '#225100'
  tertiary-fixed: '#cfeace'
  tertiary-fixed-dim: '#b3cdb3'
  on-tertiary-fixed: '#0a200f'
  on-tertiary-fixed-variant: '#354c38'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e0'
  deep-navy: '#0A142F'
  vibrant-blue: '#0066FF'
  surface-white: '#FFFFFF'
  slate-gray: '#4A5568'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

This design system establishes a visual language of "Strategic Sophistication." It transitions the brand from a local service provider to a global digital transformation powerhouse. The aesthetic is rooted in **Corporate Modernism** with a high-end editorial flair, blending the reliability of an established consultancy with the agility of a technology innovator.

The design philosophy emphasizes:
- **Authority:** Bold, deliberate typography and a grounded color palette.
- **Innovation:** Subtle glassmorphic layers and precision-engineered accents.
- **Heritage:** A "Standard of Excellence" that honors African roots through geometric patterns and a refined "Emerald" palette, presented with global refinement.
- **Clarity:** Excessive whitespace and a rigid grid system to facilitate complex decision-making for executive leadership.

## Colors

The palette is anchored by **Deep Emerald (#012104)**, a color that represents both growth and deep-seated institutional trust. This is paired with **Precision Green (#377A00)** for calls to action and interactive elements, signaling innovation.

- **Primary:** Use the Deep Emerald for headers, primary backgrounds, and high-level navigation to project authority.
- **Secondary/Accents:** Use the vibrant green and tech-blue sparingly for "points of innovation"—buttons, active states, and data visualizations.
- **Neutrals:** The "Rich Black" (#151716) is reserved for body text to ensure maximum legibility against the stark white (#FFFFFF) background.
- **Functional Gradients:** Use soft gradients from Emerald to Navy in hero sections to create a sense of depth and "infinite" digital space.

## Typography

The typography strategy utilizes **Geist** for high-impact headlines to convey a technical, forward-thinking edge. **Inter** serves as the workhorse for body copy, providing institutional legibility. **JetBrains Mono** is introduced as a tertiary label font to reference the "Technology/Data" core of the business in a subtle, sophisticated way.

- **Scale:** Use dramatic scale contrasts. Large display type should be paired with generous margin to create an editorial feel.
- **Weights:** Headlines should remain SemiBold or Bold to maintain an authoritative voice.
- **Monospaced Accents:** Use JetBrains Mono for overlines, categories, and technical metadata.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Content is housed in a 12-column grid with a maximum container width of 1440px to ensure readability on large executive monitors.

- **Rhythm:** An 8px base unit governs all spatial relationships.
- **Whitespace:** Embody the "Global Standard" by utilizing exaggerated padding (80px - 120px) between major sections to allow the content to breathe.
- **Breakpoints:** 
    - **Desktop (1440px+):** 12 columns, 80px margins.
    - **Tablet (768px - 1024px):** 8 columns, 40px margins.
    - **Mobile (Under 768px):** 4 columns, 20px margins. Headlines scale down significantly to maintain visual hierarchy.

## Elevation & Depth

To achieve an "Enterprise Premium" feel, depth is created through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Surface Tiers:** Use #FFFFFF for the primary background. Use the pale Emerald (#D0EBCF) at 10-20% opacity for secondary sections to create subtle containment.
- **Glassmorphism:** Navigation bars and floating action cards should use a backdrop blur (20px) with a semi-transparent white stroke (1px, 20% opacity) to feel light and futuristic.
- **Shadows:** Only use shadows for "Floating" elements (e.g., Modals). These should be ambient, low-opacity (#012104 at 8%), with a large blur radius (32px) to appear soft and integrated.

## Shapes

The shape language is **Soft (0.25rem)**. This near-sharp approach communicates precision and professional rigor. 

- **Containers:** Cards and input fields use a 4px (Soft) radius.
- **Interactive Elements:** Buttons follow the same 4px radius. 
- **Exceptions:** No pill-shaped elements are used, as they feel too "consumer-grade" and playful for a global consulting context.

## Components

### Buttons
Primary buttons are solid Deep Emerald with white Geist Medium text. Hover states transition to Precision Green. Secondary buttons use a 1px Emerald border with a transparent background.

### Solution Cards
Industry-specific cards use a "Ghost Border" (1px, low-opacity) and a subtle Glassmorphic background. They feature a Geist Headline-MD and a small JetBrains Mono label at the top.

### Input Fields
Fields are minimal, using only a bottom border (2px) in neutral gray that turns Deep Emerald on focus. This mimics high-end stationery and architectural blueprints.

### Imagery
Use high-fidelity, desaturated photography. Executive imagery should feel candid and natural. Abstract motifs (AI/Cloud) should use "Digital Grain" or "Light Trail" textures rather than literal illustrations.

### Data Visualization
Charts should use a palette of Emerald, Tech-Blue, and Slate-Gray. Lines should be thin (1.5px) and precise, avoiding rounded caps to maintain a technical aesthetic.