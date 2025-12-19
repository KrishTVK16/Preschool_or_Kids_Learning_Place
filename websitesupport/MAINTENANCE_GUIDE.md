# Maintenance Guide - Bright Beginnings Preschool

## Overview

This guide provides instructions for maintaining and updating the Bright Beginnings Preschool website after deployment.

---

## Table of Contents

1. [Content Updates](#content-updates)
2. [Design Changes](#design-changes)
3. [Adding New Pages](#adding-new-pages)
4. [Troubleshooting](#troubleshooting)
5. [Best Practices](#best-practices)

---

## Content Updates

### Updating Text Content

1. **Open** the HTML file you want to edit
2. **Locate** the content section
3. **Edit** the text directly in the HTML
4. **Save** and upload to server

**Example**:
```html
<!-- Before -->
<h2>Welcome to Bright Beginnings</h2>
<p>Old description text</p>

<!-- After -->
<h2>Welcome to Bright Beginnings</h2>
<p>New updated description text</p>
```

### Updating Images

1. **Prepare** new image (optimize size)
2. **Upload** to `assets/images/` (create folder if needed)
3. **Update** image path in HTML:
```html
<!-- Before -->
<img src="old-image.jpg" alt="Description">

<!-- After -->
<img src="assets/images/new-image.jpg" alt="Description">
```

### Updating Contact Information

**Files to Update**:
- `contact.html` - Contact form and info
- `index.html` - Footer contact info
- All other pages - Footer contact info

**Example**:
```html
<p class="footer-contact-text">
  123 New Address Lane<br>
  New City, SC 12345
</p>
<p class="footer-contact-text">
  Phone: (555) 123-4567<br>
  Email: newemail@brightbeginnings.com
</p>
```

---

## Design Changes

### Changing Colors

**Location**: `assets/css/styles.css`

**Find** the `:root` section and update CSS variables:
```css
:root {
  --sky-blue: #4DA6FF;        /* Change this */
  --sunshine-yellow: #FFD93D; /* Change this */
  --mint-green: #6EE7B7;      /* Change this */
  --lavender-purple: #C4B5FD; /* Change this */
}
```

**Note**: Changes will apply site-wide automatically.

### Changing Fonts

**Location**: `assets/css/styles.css`

**Update** font imports and variables:
```css
@import url('https://fonts.googleapis.com/css2?family=NewFont:wght@400;600&display=swap');

:root {
  --font-heading: 'NewFont', sans-serif;
  --font-body: 'NewFont', sans-serif;
}
```

### Changing Spacing

**Location**: `assets/css/styles.css`

**Update** spacing variables:
```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  /* Adjust as needed */
}
```

### Adding New Components

1. **Create** CSS class in `assets/css/styles.css`
2. **Follow** existing naming conventions
3. **Use** design tokens (CSS variables)
4. **Test** responsiveness
5. **Document** in `COMPONENT_LIBRARY.md`

---

## Adding New Pages

### Step 1: Create HTML File

1. **Copy** an existing page (e.g., `about.html`)
2. **Rename** to new page name (e.g., `news.html`)
3. **Update** page title:
```html
<title>News - Bright Beginnings Preschool</title>
```

### Step 2: Update Navigation

**Add to header navigation** in all pages:
```html
<li><a href="news.html" class="nav-link">News</a></li>
```

### Step 3: Update Content

1. **Replace** page header content
2. **Add** your content sections
3. **Use** existing component classes
4. **Maintain** consistent structure

### Step 4: Test

- [ ] Page loads correctly
- [ ] Navigation works
- [ ] Responsive design works
- [ ] Dark mode works
- [ ] All links work

---

## Troubleshooting

### Issue: Page Not Loading

**Check**:
1. File name is correct
2. File is uploaded to correct location
3. File permissions are correct (644)

**Solution**: Re-upload file, check server logs

### Issue: Styles Not Applying

**Check**:
1. CSS file path is correct
2. CSS file uploaded
3. Browser cache (clear cache)

**Solution**: 
- Verify file paths
- Hard refresh (Ctrl+F5)
- Check browser console for errors

### Issue: JavaScript Not Working

**Check**:
1. JavaScript file loaded
2. No console errors
3. File path correct

**Solution**:
- Open browser console (F12)
- Check for errors
- Verify `main.js` is loaded

### Issue: Images Not Displaying

**Check**:
1. Image path is correct
2. Image file exists
3. File permissions

**Solution**:
- Use relative paths
- Check file names (case-sensitive)
- Verify image uploaded

### Issue: Form Not Working

**Check**:
1. JavaScript loaded
2. Form validation working
3. No console errors

**Solution**:
- Check browser console
- Verify form structure
- Test form validation

### Issue: Dark Mode Not Working

**Check**:
1. JavaScript loaded
2. localStorage enabled
3. No console errors

**Solution**:
- Check browser console
- Clear localStorage
- Verify toggle button exists

---

## Best Practices

### 1. Always Use Component Classes

**❌ Don't**:
```html
<div style="padding: 2rem; background: blue;">
```

**✅ Do**:
```html
<div class="card highlight-box highlight-box-sky">
```

### 2. Maintain File Structure

- Keep HTML files in root
- Keep CSS in `assets/css/`
- Keep JS in `assets/js/`
- Keep images organized

### 3. Test Before Publishing

- Test on multiple browsers
- Test on mobile devices
- Test all functionality
- Check for errors

### 4. Backup Regularly

- Backup before major changes
- Keep version history
- Document changes

### 5. Use Semantic HTML

**❌ Don't**:
```html
<div class="heading">Title</div>
```

**✅ Do**:
```html
<h2 class="card-title">Title</h2>
```

### 6. Maintain Accessibility

- Use alt text for images
- Use proper heading hierarchy
- Maintain keyboard navigation
- Test with screen readers

### 7. Optimize Images

- Compress before uploading
- Use appropriate sizes
- Use WebP format when possible
- Implement lazy loading

---

## Regular Maintenance Tasks

### Weekly
- [ ] Check for broken links
- [ ] Verify forms working
- [ ] Test on mobile devices

### Monthly
- [ ] Update content if needed
- [ ] Review analytics
- [ ] Check performance
- [ ] Update images

### Quarterly
- [ ] Full site audit
- [ ] Update dependencies
- [ ] Review and optimize
- [ ] Backup all files

---

## Common Updates

### Updating Programs

**File**: `programs.html`

1. Find program section
2. Update text content
3. Update pricing if needed
4. Update schedule information

### Updating Teachers

**File**: `teachers.html`

1. Find teacher card
2. Update name, bio, photo
3. Maintain card structure
4. Update image path

### Updating Gallery

**File**: `gallery.html`

1. Add new image cards
2. Use `card-image-overlay` class
3. Add proper alt text
4. Maintain grid structure

### Updating Activities

**File**: `activities.html`

1. Find activity section
2. Update descriptions
3. Update images
4. Maintain card layout

---

## Version Control

### Recommended: Git

**Initialize**:
```bash
git init
git add .
git commit -m "Initial commit"
```

**Updates**:
```bash
git add .
git commit -m "Updated content"
git push
```

### File Naming

- Use lowercase
- Use hyphens for spaces
- Be descriptive
- Keep consistent

---

## Getting Help

### Documentation

- **Component Library**: `COMPONENT_LIBRARY.md`
- **Style Guide**: `STYLE_GUIDE.md`
- **Deployment Guide**: `DEPLOYMENT_GUIDE.md`

### Code Reference

- **CSS Variables**: See `:root` in `styles.css`
- **Components**: See component classes in `styles.css`
- **JavaScript**: See functions in `main.js`

---

## Emergency Procedures

### Site Down

1. **Check** hosting status
2. **Verify** files uploaded
3. **Check** server logs
4. **Restore** from backup if needed

### Content Error

1. **Identify** problematic content
2. **Revert** to previous version
3. **Fix** issue
4. **Re-upload** corrected file

### Security Issue

1. **Identify** vulnerability
2. **Remove** malicious code
3. **Update** affected files
4. **Change** passwords
5. **Notify** hosting provider

---

**Last Updated**: Phase 6
**Version**: 1.0
