# 🎨 BRIGHT BEGINNINGS PRESCHOOL - DESIGN SYSTEM

## Phase 2: Complete Design System Documentation

---

## 1. DESIGN TOKENS

### 1.1 Color Palette

#### Brand Colors
```css
--sky-blue: #4DA6FF        /* Primary brand color */
--sunshine-yellow: #FFD93D  /* Secondary accent */
--mint-green: #6EE7B7       /* Success/accent */
--lavender-purple: #C4B5FD  /* Accent/creative */
```

#### Neutral Colors
```css
--white: #FFFFFF
--light-gray: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-600: #4B5563
--gray-800: #1F2937
--text-dark: #2D3748
```

#### Dark Mode Colors
```css
--bg-dark: #1a1a1a
--bg-dark-secondary: #2d2d2d
--text-light: #e5e5e5
--text-light-secondary: #b0b0b0
--border-dark: #404040
```

### 1.2 Typography

#### Font Families
- **Headings:** `Poppins` (400, 500, 600, 700)
- **Body:** `Nunito` (300, 400, 600, 700)

#### Font Sizes (Responsive)
```css
h1: clamp(2.5rem, 5vw, 4rem)
h2: clamp(2rem, 4vw, 3rem)
h3: clamp(1.5rem, 3vw, 2rem)
h4: clamp(1.25rem, 2.5vw, 1.5rem)
p: clamp(1rem, 2vw, 1.125rem)
```

### 1.3 Spacing Scale
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 1.5rem   /* 24px */
--spacing-lg: 2rem     /* 32px */
--spacing-xl: 3rem     /* 48px */
--spacing-2xl: 4rem    /* 64px */
--spacing-3xl: 6rem    /* 96px */
```

### 1.4 Border Radius
```css
--radius-sm: 12px
--radius-md: 20px
--radius-lg: 30px
--radius-full: 999px
```

### 1.5 Shadows (Elevated Flat UI)
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08)
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.1)
```

### 1.6 Gradients
```css
--gradient-calm: linear-gradient(180deg, #FFF7ED 0%, #E0F2FE 50%, #F0FDF4 100%)
--gradient-sky: linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 100%)
--gradient-sunshine: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)
--gradient-mint: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)
--gradient-lavender: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)
```

### 1.7 Transitions
```css
--transition-fast: all 0.2s ease
--transition-base: all 0.3s ease
--transition-slow: all 0.5s ease
--transition-bounce: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### 1.8 Z-Index Scale
```css
--z-dropdown: 1000
--z-sticky: 1001
--z-modal: 10000
--z-tooltip: 10001
```

---

## 2. COMPONENT LIBRARY

### 2.1 Header Component

#### Structure
```html
<header class="header">
  <div class="container header-container">
    <a href="index.html" class="logo">...</a>
    <nav>...</nav>
    <div class="header-actions">...</div>
  </div>
</header>
```

#### Features
- Sticky positioning
- Responsive mobile menu
- Dropdown navigation
- Dark mode toggle
- Auth buttons

### 2.2 Footer Component

#### Structure
```html
<footer class="footer">
  <div class="container">
    <div class="footer-content footer-content-grid">
      <!-- 4 columns -->
    </div>
  </div>
</footer>
```

#### Classes
- `.footer-content-grid` - Grid layout
- `.footer-logo-wrapper` - Logo container
- `.footer-logo-text` - Logo text
- `.footer-text` - Footer text
- `.footer-contact-text` - Contact info

### 2.3 Button Components

#### Variants
```html
<!-- Primary -->
<a href="#" class="btn btn-primary">Button</a>

<!-- Secondary -->
<a href="#" class="btn btn-secondary">Button</a>

<!-- Outline -->
<a href="#" class="btn btn-outline">Button</a>

<!-- Mint -->
<a href="#" class="btn btn-mint">Button</a>

<!-- Lavender -->
<a href="#" class="btn btn-lavender">Button</a>

<!-- Sizes -->
<a href="#" class="btn btn-primary btn-lg">Large</a>
<a href="#" class="btn btn-primary btn-sm">Small</a>
```

### 2.4 Card Components

#### Basic Card
```html
<div class="card text-center">
  <h3 class="card-title">Title</h3>
  <p class="card-text">Content</p>
</div>
```

#### Card with Image
```html
<div class="card text-center">
  <img src="..." alt="..." class="card-img">
  <h3 class="card-title">Title</h3>
  <p class="card-text">Content</p>
</div>
```

#### Card with Icon
```html
<div class="card text-center">
  <div class="card-icon sky">🎨</div>
  <h3 class="card-title">Title</h3>
  <p class="card-text">Content</p>
</div>
```

#### Icon Variants
- `.card-icon.sky` - Sky blue gradient
- `.card-icon.yellow` - Sunshine yellow gradient
- `.card-icon.mint` - Mint green gradient
- `.card-icon.lavender` - Lavender purple gradient

### 2.5 Form Components

#### Input Field
```html
<div class="form-group">
  <label for="name" class="form-label">Name *</label>
  <input type="text" id="name" class="form-input" required>
</div>
```

#### Textarea
```html
<div class="form-group">
  <label for="message" class="form-label">Message *</label>
  <textarea id="message" class="form-textarea" required></textarea>
</div>
```

#### Select Dropdown
```html
<div class="form-group">
  <label for="program" class="form-label">Program</label>
  <select id="program" class="form-select">
    <option>Select...</option>
  </select>
</div>
```

#### Validation States
```html
<!-- Error State -->
<input class="form-input error" ...>
<span class="form-error-message">Error message</span>

<!-- Success State -->
<input class="form-input success" ...>
```

### 2.6 Hero Section Variants

#### Full Hero
```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Title</h1>
      <p>Description</p>
    </div>
  </div>
</section>
```

#### Compact Hero
```html
<section class="hero hero-compact">
```

#### Minimal Hero
```html
<section class="hero hero-minimal">
```

#### Page Header
```html
<section class="page-header">
  <div class="container">
    <div class="page-header-content">
      <h1>Page Title</h1>
      <p>Page description</p>
    </div>
  </div>
</section>
```

### 2.7 Info Card Component

```html
<div class="info-card">
  <div class="info-card-icon info-card-icon-sky">📍</div>
  <div class="info-card-content">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

#### Icon Color Variants
- `.info-card-icon-sky`
- `.info-card-icon-mint`
- `.info-card-icon-yellow`
- `.info-card-icon-lavender`

### 2.8 Schedule Item Component

```html
<div class="schedule-item">
  <span class="schedule-time">8:30 - 9:00</span>
  <span class="schedule-activity">🌅 Arrival & Free Play</span>
</div>
```

### 2.9 Feature List Component

```html
<ul class="feature-list">
  <li>Sensory exploration and play</li>
  <li>Music and movement activities</li>
  <li>Early language development</li>
</ul>
```

### 2.10 Highlight Box Component

```html
<div class="highlight-box highlight-box-sunshine">
  <p>Class Size: 8-10 children</p>
  <p>Teacher Ratio: 1:4</p>
</div>
```

#### Variants
- `.highlight-box-sunshine`
- `.highlight-box-mint`
- `.highlight-box-sky`
- `.highlight-box-lavender`

### 2.11 Social Card Component

```html
<div class="card social-card text-center">
  <div class="social-card-icon social-card-icon-facebook">
    <i class="fab fa-facebook-f"></i>
  </div>
  <h4 class="card-title">Facebook</h4>
  <p class="card-text">Description</p>
  <a href="#" class="btn btn-primary">Follow Us</a>
</div>
```

### 2.12 Two Column Layout

```html
<div class="two-column">
  <div>Left Content</div>
  <div>Right Content</div>
</div>
```

#### Reverse Order
```html
<div class="two-column two-column-reverse">
  <div>This appears on right</div>
  <div>This appears on left</div>
</div>
```

### 2.13 Content Box Component

```html
<div class="content-box">
  <!-- Content -->
</div>

<!-- Centered Variant -->
<div class="content-box content-box-center">
  <!-- Centered content -->
</div>
```

### 2.14 Testimonial Component

```html
<div class="card text-center">
  <p class="testimonial-text">"Quote text"</p>
  <h4 class="testimonial-author">— Author Name</h4>
</div>
```

---

## 3. ANIMATION GUIDELINES

### 3.1 Transition Timing

#### Fast Interactions (Buttons, Links)
- **Duration:** 0.2s
- **Easing:** ease
- **Use:** Hover states, quick feedback

#### Standard Interactions (Cards, Dropdowns)
- **Duration:** 0.3s
- **Easing:** ease or cubic-bezier(0.4, 0, 0.2, 1)
- **Use:** Most UI interactions

#### Slow Animations (Page Transitions)
- **Duration:** 0.5s
- **Easing:** ease
- **Use:** Page loads, major state changes

### 3.2 Hover Effects

#### Buttons
```css
transform: translateY(-2px);
box-shadow: var(--shadow-md);
```

#### Cards
```css
transform: translateY(-4px);
box-shadow: var(--shadow-xl);
```

#### Links
```css
color: var(--sky-blue);
/* Underline animation via ::after */
```

### 3.3 Scroll Animations

#### Fade In on Scroll
- Uses Intersection Observer
- Class: `.fade-in`
- Threshold: 0.1
- Root Margin: -50px

### 3.4 Dropdown Animations

#### Show/Hide
- Opacity: 0 → 1
- Transform: translateY(-10px) → translateY(0)
- Duration: 0.3s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### 3.5 Mobile Menu Animation

#### Slide In
- Transform: translateX(100%) → translateX(0)
- Duration: 0.3s
- Easing: ease

---

## 4. INTERACTION RULES

### 4.1 Dropdowns

#### Desktop Behavior
- **Hover:** Show dropdown immediately
- **Mouse Leave:** Hide after 150ms delay
- **Click:** Toggle dropdown
- **Outside Click:** Close all dropdowns

#### Mobile Behavior
- **Click:** Toggle dropdown
- **Touch:** Expand/collapse with animation
- **Outside Touch:** Close dropdown

### 4.2 Mobile Menu

#### Opening
- Slide from right
- Show overlay
- Lock body scroll
- Change hamburger to X

#### Closing
- Slide to right
- Hide overlay
- Unlock body scroll
- Change X to hamburger
- **Triggers:** Close button, overlay click, ESC key, link click

### 4.3 Forms

#### Validation
- **Real-time:** On blur
- **Submit:** Full validation
- **Error State:** Red border + error message
- **Success State:** Green border

#### Feedback
- Immediate visual feedback
- Error messages below fields
- Success confirmation on submit

### 4.4 Buttons

#### States
- **Default:** Base styling
- **Hover:** Lift + shadow increase
- **Active:** Slight scale down
- **Disabled:** Reduced opacity + no pointer

### 4.5 Cards

#### Hover Behavior
- Lift up (translateY(-4px))
- Increase shadow
- Smooth transition

#### Click Behavior
- Links navigate
- Buttons trigger actions
- No card-level click unless specified

---

## 5. RESPONSIVE BREAKPOINTS

### Breakpoint System
```css
/* Mobile Small */
@media (max-width: 320px) { }

/* Mobile Medium */
@media (max-width: 375px) { }

/* Mobile Large */
@media (max-width: 425px) { }

/* Tablet Portrait */
@media (max-width: 780px) { }

/* Tablet Landscape */
@media (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1101px) { }
```

### Mobile Menu Breakpoint
- **Show Mobile Menu:** ≤ 1100px
- **Show Desktop Menu:** ≥ 1101px

### Dropdown Breakpoint
- **Mobile Behavior:** ≤ 820px
- **Desktop Behavior:** ≥ 821px

---

## 6. ACCESSIBILITY GUIDELINES

### 6.1 ARIA Labels
- All interactive elements have aria-labels
- Buttons have descriptive labels
- Navigation landmarks properly marked

### 6.2 Keyboard Navigation
- Tab through all interactive elements
- Enter/Space activate buttons
- ESC closes modals/menus
- Arrow keys for dropdowns (future enhancement)

### 6.3 Focus States
- Visible focus indicators
- Consistent focus styling
- Focus trap in modals

### 6.4 Color Contrast
- WCAG AA compliant
- Text meets 4.5:1 ratio
- Large text meets 3:1 ratio

---

## 7. USAGE EXAMPLES

### Complete Page Header
```html
<section class="page-header">
  <div class="container">
    <div class="page-header-content">
      <h1>Page Title</h1>
      <p>Page description text</p>
    </div>
  </div>
</section>
```

### Contact Info Section
```html
<div class="info-card">
  <div class="info-card-icon info-card-icon-sky">📞</div>
  <div class="info-card-content">
    <h4>Call Us</h4>
    <p>Main: (555) 123-4567<br>Fax: (555) 123-4568</p>
  </div>
</div>
```

### Program Schedule
```html
<div class="schedule-item">
  <span class="schedule-time">8:30 - 9:00</span>
  <span class="schedule-activity">🌅 Arrival & Free Play</span>
</div>
```

### Feature List
```html
<ul class="feature-list">
  <li>Sensory exploration and play</li>
  <li>Music and movement activities</li>
  <li>Early language development</li>
</ul>
```

---

## 8. BEST PRACTICES

### 8.1 Component Usage
- Always use semantic HTML
- Apply utility classes for spacing
- Use component classes for structure
- Maintain consistent spacing

### 8.2 Color Usage
- Use brand colors for primary actions
- Use gradients for backgrounds
- Maintain contrast ratios
- Test in dark mode

### 8.3 Typography
- Use heading hierarchy correctly
- Maintain readable line heights
- Use responsive font sizes
- Keep text aligned appropriately

### 8.4 Spacing
- Use spacing scale consistently
- Maintain visual rhythm
- Group related elements
- Use negative space effectively

---

**Design System Version:** 2.0
**Last Updated:** 2025-01-XX
**Status:** Phase 2 Complete ✅
