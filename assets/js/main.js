/* ============================================
   BRIGHT BEGINNINGS PRESCHOOL - MAIN JAVASCRIPT
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // 1. INITIALIZATION
  // ============================================

  document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initMobileMenu();
    initDropdowns();
    initActiveLinks();
    initScrollAnimations();
    initFormValidation();
    initGalleryLightbox();
    initFAQAccordion();
    initCounterAnimations();
    initMapInteraction();
    initBackToTop();
  });

  // ============================================
  // 2. DARK MODE TOGGLE
  // ============================================

  function initDarkMode() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    // Function to update icon based on theme
    function updateThemeIcon(theme) {
      if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
          // Light mode: show moon (clicking will switch to dark)
          // Dark mode: show sun (clicking will switch to light)
          if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
          } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
          }
        }
      }
    }
    
    // Set initial icon based on saved theme
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon after theme change
        updateThemeIcon(newTheme);
      });
    }
  }

  // ============================================
  // 3. MOBILE MENU
  // ============================================

  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const menuClose = document.querySelector('.mobile-menu-close');
    const body = document.body;
    
    if (!menuToggle || !mobileMenu) return;
    
    // Create overlay if it doesn't exist
    if (!mobileOverlay) {
      const overlay = document.createElement('div');
      overlay.className = 'mobile-menu-overlay';
      document.body.appendChild(overlay);
      
      overlay.addEventListener('click', closeMobileMenu);
    }
    
    function openMobileMenu() {
      mobileMenu.classList.add('active');
      if (mobileOverlay) mobileOverlay.classList.add('active');
      body.style.overflow = 'hidden';
      body.classList.add('mobile-menu-open');
    }
    
    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      body.style.overflow = '';
      body.classList.remove('mobile-menu-open');
    }
    
    menuToggle.addEventListener('click', openMobileMenu);
    if (menuClose) menuClose.addEventListener('click', closeMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
    
    // Close menu automatically when window is resized and toggle is hidden
    let resizeTimeout;
    window.addEventListener('resize', function() {
      // Debounce resize events
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        // Check if mobile menu toggle is visible
        const toggleStyle = window.getComputedStyle(menuToggle);
        const isToggleVisible = toggleStyle.display !== 'none';
        
        // If toggle is hidden and menu is open, close the menu
        if (!isToggleVisible && mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        }
      }, 100);
    });
  }

  // ============================================
  // 4. DROPDOWN NAVIGATION
  // ============================================

  function initDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
    const isMobile = window.innerWidth <= 820;
    let dropdownTimeout = null;
    
    // Ensure dropdowns are hidden by default
    dropdownItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Click functionality (Desktop & Mobile)
    dropdownItems.forEach(item => {
      const dropdownLink = item.querySelector('.nav-link.has-dropdown');
      const dropdownMenu = item.querySelector('.nav-dropdown');
      
      if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Close other dropdowns
          dropdownItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          
          // Toggle current dropdown
          item.classList.toggle('active');
        });
      }
    });
    
    // Hover functionality (Desktop only)
    if (!isMobile) {
      dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          clearTimeout(dropdownTimeout);
          item.classList.add('active');
        });
        
        item.addEventListener('mouseleave', function() {
          dropdownTimeout = setTimeout(() => {
            item.classList.remove('active');
          }, 100);
        });
      });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-item-dropdown')) {
        dropdownItems.forEach(item => {
          item.classList.remove('active');
        });
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      const newIsMobile = window.innerWidth <= 820;
      if (newIsMobile !== isMobile) {
        // Reload dropdown behavior if breakpoint crossed
        dropdownItems.forEach(item => {
          item.classList.remove('active');
        });
      }
    });
  }

  // ============================================
  // 5. ACTIVE LINK DETECTION
  // ============================================

  function initActiveLinks() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .nav-dropdown-link');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
        
        // If it's a dropdown link, mark parent link as active
        const dropdownItem = link.closest('.nav-item-dropdown');
        if (dropdownItem) {
          const parentLink = dropdownItem.querySelector('.nav-link.has-dropdown');
          if (parentLink) {
            parentLink.classList.add('active');
          }
        }
      }
    });
  }

  // ============================================
  // 6. SCROLL ANIMATIONS
  // ============================================

  function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length === 0) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }

  // ============================================
  // 7. FORM VALIDATION
  // ============================================

  function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('.form-input, .form-textarea, .form-select');
      
      inputs.forEach(input => {
        // Real-time validation on blur
        input.addEventListener('blur', function() {
          validateField(input);
        });
        
        // Clear error on input
        input.addEventListener('input', function() {
          if (input.classList.contains('error')) {
            clearFieldError(input);
          }
        });
      });
      
      // Form submission validation
      form.addEventListener('submit', function(e) {
        let isValid = true;
        
        inputs.forEach(input => {
          if (!validateField(input)) {
            isValid = false;
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          // Focus first invalid field
          const firstError = form.querySelector('.error');
          if (firstError) {
            firstError.focus();
          }
        }
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (required && value === '') {
      isValid = false;
      errorMessage = 'This field is required';
    }
    
    // Email validation
    if (type === 'email' && value !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }
    
    // Phone validation
    if (type === 'tel' && value !== '') {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(value) || value.length < 10) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }
    
    // Password validation (if exists)
    if (type === 'password' && value !== '') {
      if (value.length < 8) {
        isValid = false;
        errorMessage = 'Password must be at least 8 characters';
      }
    }
    
    // Show error or success
    if (!isValid) {
      showFieldError(field, errorMessage);
    } else if (value !== '') {
      field.classList.add('success');
    }
    
    return isValid;
  }

  function showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.form-error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Add error message
    const errorElement = document.createElement('span');
    errorElement.className = 'form-error-message';
    errorElement.textContent = message;
    field.parentElement.appendChild(errorElement);
  }

  function clearFieldError(field) {
    field.classList.remove('error', 'success');
    const errorMessage = field.parentElement.querySelector('.form-error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  // ============================================
  // 8. GALLERY LIGHTBOX
  // ============================================

  function initGalleryLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    if (galleryImages.length === 0) return;
    
    // Create lightbox structure
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close lightbox">×</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous image">‹</button>
      <button class="lightbox-nav lightbox-next" aria-label="Next image">›</button>
      <div class="lightbox-content">
        <img class="lightbox-img" src="" alt="">
      </div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;
    const images = Array.from(galleryImages);
    
    // Open lightbox
    function openLightbox(index) {
      currentIndex = index;
      updateLightboxImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    // Update lightbox image
    function updateLightboxImage() {
      const img = images[currentIndex];
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Gallery image';
    }
    
    // Navigate to previous image
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightboxImage();
    }
    
    // Navigate to next image
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightboxImage();
    }
    
    // Add click handlers to gallery images
    images.forEach((img, index) => {
      img.addEventListener('click', function() {
        openLightbox(index);
      });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    // Close on overlay click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    });
  }

  // ============================================
  // 9. FAQ ACCORDION
  // ============================================

  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      if (question) {
        question.addEventListener('click', function() {
          // Close other items
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          
          // Toggle current item
          item.classList.toggle('active');
        });
      }
    });
  }

  // ============================================
  // 10. COUNTER ANIMATIONS
  // ============================================

  function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        element.textContent = formatNumber(target);
        clearInterval(timer);
      } else {
        element.textContent = formatNumber(Math.floor(current));
      }
    }, 16);
  }

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K+';
    }
    return num + '+';
  }

  // ============================================
  // 11. MAP INTERACTION (About Page)
  // ============================================

  function initMapInteraction() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    if (!mapPlaceholder) return;
    
    // Star collection animation (if stars exist)
    const stars = document.querySelectorAll('.star');
    let collectedStars = 0;
    
    stars.forEach((star, index) => {
      star.addEventListener('click', function() {
        if (!star.classList.contains('collected')) {
          star.classList.add('collected');
          collectedStars++;
          
          // Animate star
          star.style.transform = 'scale(1.5) rotate(360deg)';
          star.style.transition = 'transform 0.5s ease';
          
          setTimeout(() => {
            star.style.opacity = '0.5';
          }, 500);
          
          // Check if all stars collected
          if (collectedStars === stars.length) {
            showCompletionMessage();
          }
        }
      });
    });
  }

  function showCompletionMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--bg-primary);
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      text-align: center;
    `;
    message.innerHTML = `
      <h3>🎉 Congratulations!</h3>
      <p>You've collected all the stars!</p>
      <button onclick="this.parentElement.remove()" class="btn btn-primary mt-md">Close</button>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 5000);
  }

  // ============================================
  // 12. LAZY LOADING IMAGES
  // ============================================

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // 13. SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============================================
  // 14. BACK TO TOP BUTTON
  // ============================================

  function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    let scrollTimeout;
    function handleScroll() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      }, 10);
    }
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Scroll to top on click
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Initial check
    handleScroll();
  }

  // ============================================
  // END OF MAIN JAVASCRIPT
  // ============================================

})();

