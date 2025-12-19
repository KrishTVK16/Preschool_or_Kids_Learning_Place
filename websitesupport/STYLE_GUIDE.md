# Style Guide - Bright Beginnings Preschool

## Overview

This style guide documents the design system, color palette, typography, spacing, and visual guidelines for the Bright Beginnings Preschool website.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Shadows & Elevation](#shadows--elevation)
5. [Border Radius](#border-radius)
6. [Gradients](#gradients)
7. [Animations & Transitions](#animations--transitions)
8. [Icons & Emojis](#icons--emojis)
9. [Dark Mode](#dark-mode)

---

## Color Palette

### Brand Colors

#### Sky Blue
- **Hex**: `#4DA6FF`
- **Usage**: Primary actions, links, highlights
- **CSS Variable**: `--sky-blue`

#### Sunshine Yellow
- **Hex**: `#FFD93D`
- **Usage**: Accents, highlights, call-to-action
- **CSS Variable**: `--sunshine-yellow`

#### Mint Green
- **Hex**: `#6EE7B7`
- **Usage**: Success states, nature themes
- **CSS Variable**: `--mint-green`

#### Lavender Purple
- **Hex**: `#C4B5FD`
- **Usage**: Accents, creative themes
- **CSS Variable**: `--lavender-purple`

### Neutral Colors

#### White
- **Hex**: `#FFFFFF`
- **Usage**: Backgrounds, cards
- **CSS Variable**: `--white`

#### Light Gray
- **Hex**: `#F9FAFB`
- **Usage**: Subtle backgrounds
- **CSS Variable**: `--light-gray`

#### Gray Scale
- **Gray 100**: `#F3F4F6` - Very light backgrounds
- **Gray 200**: `#E5E7EB` - Borders, dividers
- **Gray 300**: `#D1D5DB` - Disabled states
- **Gray 600**: `#4B5563` - Secondary text
- **Gray 800**: `#1F2937` - Primary text
- **Text Dark**: `#2D3748` - Headings

### Dark Mode Colors

- **Background Dark**: `#1a1a1a`
- **Background Dark Secondary**: `#2d2d2d`
- **Text Light**: `#e5e5e5`
- **Text Light Secondary**: `#b0b0b0`
- **Border Dark**: `#404040`

---

## Typography

### Font Families

#### Headings
- **Font**: `Poppins`
- **Weights**: 400, 500, 600, 700
- **CSS Variable**: `--font-heading`
- **Usage**: All headings (h1-h6)

#### Body Text
- **Font**: `Nunito`
- **Weights**: 300, 400, 600, 700
- **CSS Variable**: `--font-body`
- **Usage**: Paragraphs, body text, buttons

### Font Sizes

- **Small**: `0.875rem` (14px) - `.text-sm`
- **Base**: `1rem` (16px) - Default
- **Large**: `1.125rem` (18px) - `.text-lg`
- **Extra Large**: `1.25rem` (20px) - `.text-xl`

### Heading Sizes

- **H1**: `2.5rem` (40px) - Page titles
- **H2**: `2rem` (32px) - Section titles
- **H3**: `1.5rem` (24px) - Subsection titles
- **H4**: `1.25rem` (20px) - Card titles
- **H5**: `1.125rem` (18px)
- **H6**: `1rem` (16px)

### Line Height

- **Tight**: `1.2` - Headings
- **Normal**: `1.5` - Body text
- **Relaxed**: `1.7` - `.leading-relaxed` - Long form content

### Font Weights

- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600 - `.font-semibold`
- **Bold**: 700

---

## Spacing System

### Spacing Scale

- **XS**: `0.5rem` (8px) - `.spacing-xs`
- **SM**: `1rem` (16px) - `.spacing-sm`
- **MD**: `1.5rem` (24px) - `.spacing-md`
- **LG**: `2rem` (32px) - `.spacing-lg`
- **XL**: `3rem` (48px) - `.spacing-xl`
- **2XL**: `4rem` (64px) - `.spacing-2xl`
- **3XL**: `6rem` (96px) - `.spacing-3xl`

### Margin Utilities

```css
.mb-xs, .mb-sm, .mb-md, .mb-lg, .mb-xl  /* Margin bottom */
.mt-md, .mt-xl, .mt-0                    /* Margin top */
```

### Padding

- Cards: `var(--spacing-lg)` (2rem)
- Sections: `var(--spacing-xl)` (3rem)
- Container: `var(--container-padding)` (1.5rem)

---

## Shadows & Elevation

### Shadow Scale

- **Small**: `0 2px 8px rgba(0, 0, 0, 0.05)` - `.shadow-sm`
- **Medium**: `0 4px 16px rgba(0, 0, 0, 0.08)` - `.shadow-md`
- **Large**: `0 8px 24px rgba(0, 0, 0, 0.08)` - `.shadow-lg`
- **Extra Large**: `0 12px 32px rgba(0, 0, 0, 0.1)` - `.shadow-xl`

### Usage

- **Cards**: `shadow-md` or `shadow-lg`
- **Buttons**: `shadow-sm` (hover: `shadow-md`)
- **Modals**: `shadow-xl`
- **Header**: `shadow-sm`

---

## Border Radius

### Radius Scale

- **Small**: `12px` - `.rounded-sm` - Cards, inputs
- **Medium**: `20px` - `.rounded-md` - Buttons, larger cards
- **Large**: `30px` - `.rounded-lg` - Special elements
- **Full**: `999px` - `.rounded-full` - Pills, circles

### Usage

- **Buttons**: `var(--radius-sm)` (12px)
- **Cards**: `var(--radius-md)` (20px)
- **Inputs**: `var(--radius-sm)` (12px)
- **Images**: `var(--radius-md)` (20px)

---

## Gradients

### Calm Gradient
```css
linear-gradient(180deg, #FFF7ED 0%, #E0F2FE 50%, #F0FDF4 100%)
```
- **Usage**: Page backgrounds
- **Class**: `.bg-gradient-calm`

### Sky Gradient
```css
linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 100%)
```
- **Usage**: Sky-themed sections
- **Class**: `.bg-gradient-sky`

### Sunshine Gradient
```css
linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)
```
- **Usage**: Yellow-themed sections
- **Class**: `.bg-gradient-sunshine`

### Mint Gradient
```css
linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)
```
- **Usage**: Green-themed sections
- **Class**: `.bg-gradient-mint`

### Lavender Gradient
```css
linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)
```
- **Usage**: Purple-themed sections
- **Class**: `.bg-gradient-lavender`

---

## Animations & Transitions

### Transition Durations

- **Fast**: `0.2s` - `.transition-fast`
- **Base**: `0.3s` - `.transition-base`
- **Slow**: `0.5s` - `.transition-slow`

### Easing Functions

- **Default**: `ease`
- **Bounce**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Smooth**: `cubic-bezier(0.25, 0.1, 0.25, 1)`

### Common Transitions

- **Hover Effects**: `0.2s ease`
- **Button States**: `0.3s ease`
- **Card Interactions**: `0.3s cubic-bezier`
- **Page Transitions**: `0.6s ease-out`

### Animation Types

- **Fade In**: `fadeIn 0.6s ease-out`
- **Slide In**: `slideIn 0.6s ease-out`
- **Scale In**: `scale 0.6s ease-out`
- **Pulse**: `pulse 2s ease-in-out infinite`
- **Shake**: `shake 0.5s ease-in-out`

---

## Icons & Emojis

### Icon Usage

- **Card Icons**: Large emojis (🎓, 👥, 🌿, 💝)
- **Social Icons**: Font Awesome icons
- **UI Icons**: Font Awesome for buttons, navigation

### Icon Sizes

- **Card Icons**: `4rem` (64px)
- **Social Icons**: `1.25rem` (20px)
- **Button Icons**: `1rem` (16px)
- **Nav Icons**: `1.5rem` (24px)

### Icon Colors

- Use brand colors for icon backgrounds
- Icons inherit text color
- Social icons use brand-specific colors

---

## Dark Mode

### Implementation

Dark mode is implemented using the `[data-theme="dark"]` attribute on the `<html>` element.

### Color Adaptations

- **Backgrounds**: Switch to dark variants
- **Text**: Switch to light variants
- **Borders**: Use `--border-dark`
- **Cards**: Use `--bg-dark-secondary`

### Toggle

- Toggle button in header
- Persists in localStorage
- Smooth transition between themes

---

## Visual Guidelines

### Layout

- **Max Container Width**: 1200px
- **Container Padding**: 1.5rem (responsive)
- **Section Spacing**: 3rem vertical
- **Card Spacing**: 2rem padding

### Images

- **Border Radius**: 20px (medium)
- **Aspect Ratio**: Maintain original or 16:9
- **Object Fit**: `cover` for gallery images
- **Lazy Loading**: Enabled by default

### Buttons

- **Min Height**: 44px (touch-friendly)
- **Padding**: 12px 24px (default)
- **Border Radius**: 12px
- **Hover Effect**: Scale 1.05 or lift

### Forms

- **Input Height**: 48px minimum
- **Border**: 2px solid
- **Focus**: 3px outline with brand color
- **Error State**: Red border (#ef4444)
- **Success State**: Green border (mint-green)

---

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Mobile-First Approach

- Base styles for mobile
- Progressive enhancement for larger screens
- Touch targets minimum 44px
- Font size minimum 16px for inputs

---

## Accessibility

### Color Contrast

- **Text on Background**: WCAG AA compliant
- **Interactive Elements**: High contrast
- **Focus States**: 3px outline, visible

### Typography

- **Minimum Font Size**: 14px for body
- **Line Height**: 1.5 minimum
- **Letter Spacing**: Normal

### Interactive Elements

- **Focus Indicators**: Visible outline
- **Keyboard Navigation**: Full support
- **Screen Readers**: ARIA labels where needed

---

## Best Practices

1. **Consistency**: Always use design tokens (CSS variables)
2. **Responsive**: Test on all breakpoints
3. **Accessibility**: Maintain contrast and focus states
4. **Performance**: Use efficient animations
5. **Dark Mode**: Test both themes

---

**Last Updated**: Phase 6
**Version**: 1.0
