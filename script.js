95% of storage used … If you run out of space, you can't save to Drive, back up Google Photos, or use Gmail. Get 100 GB of storage for $1.99 $0.49/month for 3 months.
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
      });
    }
    
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        const tabId = this.getAttribute('data-tab');
        this.classList.add('active');
        document.getElementById(`tab-${tabId}`).classList.add('active');
      });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Close mobile menu if open
          if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
          }
          
          // Scroll to target
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const btn = this.querySelector('.card-btn');
        if (btn) {
          btn.classList.add('hover');
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const btn = this.querySelector('.card-btn');
        if (btn) {
          btn.classList.remove('hover');
        }
      });
    });
    
   // Form validation
const contactForm = document.querySelector('.contact-form');
    
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    let isValid = true;
    const requiredFields = contactForm.querySelectorAll('input, textarea');
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });
    
    // Email validation
    const emailField = contactForm.querySelector('#email');
    if (emailField && emailField.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value.trim())) {
        isValid = false;
        emailField.classList.add('error');
      }
    }
    
    if (isValid) {
      // Submit to Formspree
      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        alert('There was a problem sending your message. Please try again later.');
        console.error('Error:', error);
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  });
}
    
    // Add animation classes on scroll
    const animateOnScroll = function() {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate');
        }
      });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', function() {
      animateOnScroll();
    });
    
    // Add responsive navigation for mobile
    const setupMobileNav = function() {
      if (window.innerWidth < 768) {
        mainNav.classList.add('mobile-nav');
        
        // Add click event to close menu when a link is clicked
        const mobileNavLinks = mainNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
          link.addEventListener('click', function() {
            mainNav.classList.remove('active');
          });
        });
      } else {
        mainNav.classList.remove('mobile-nav');
        mainNav.classList.remove('active');
      }
    };
    
    // Run on page load
    setupMobileNav();
    
    // Run on window resize
    window.addEventListener('resize', function() {
      setupMobileNav();
    });
    
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.querySelector('.project-card-overlay').style.opacity = '1';
        this.querySelector('.project-image').style.transform = 'scale(1.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.querySelector('.project-card-overlay').style.opacity = '0';
        this.querySelector('.project-image').style.transform = 'scale(1)';
      });
    });
    
    // Initialize any additional interactive elements
    const initializeInteractiveElements = function() {
      // Add any additional interactive elements initialization here
      
      // Example: Add back-to-top button functionality
      const backToTopBtn = document.createElement('button');
      backToTopBtn.classList.add('back-to-top');
      backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
      document.body.appendChild(backToTopBtn);
      
      backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      });
    };
    
    initializeInteractiveElements();
  });
  
  // Add CSS for back-to-top button
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--blue-600);
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 100;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      .back-to-top.show {
        opacity: 1;
        visibility: visible;
      }
      
      .back-to-top:hover {
        background-color: var(--blue-700);
        transform: translateY(-3px);
      }
      
      /* Add animation classes */
      .section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s, transform 0.6s;
      }
      
      .section.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Mobile navigation styles */
      @media (max-width: 767px) {
        .main-nav {
          position: fixed;
          top: 4rem;
          left: 0;
          right: 0;
          background-color: white;
          flex-direction: column;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s;
          z-index: 40;
        }
        
        .main-nav.active {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }
        
        .nav-link {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--gray-200);
        }
      }
    </style>
  `);
