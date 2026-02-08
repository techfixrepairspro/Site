// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
    }
});

// Scroll Animations for Cards
const observeElements = document.querySelectorAll('.service-card, .pricing-card, .about-text');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Parallax Effect for Floating Components
window.addEventListener('scroll', () => {
    const floatingComponents = document.querySelectorAll('.floating-component');
    const scrolled = window.pageYOffset;
    
    floatingComponents.forEach((component, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        component.style.transform = `translateY(${yPos}px)`;
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message
        alert('Thank you for your message! We will get back to you within 24 hours.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // });
    });
}

// Add hover effect sound (optional - commented out)
// Uncomment if you want to add sound effects
/*
const buttons = document.querySelectorAll('.btn, .service-card, .pricing-card');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        // Play hover sound
        // const audio = new Audio('hover-sound.mp3');
        // audio.play();
    });
});
*/

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add glitch effect on mouse over to title
const glitchTitle = document.querySelector('.glitch');
if (glitchTitle) {
    glitchTitle.addEventListener('mouseenter', () => {
        glitchTitle.style.animation = 'none';
        setTimeout(() => {
            glitchTitle.style.animation = 'glitch 0.3s infinite';
        }, 10);
    });
    
    glitchTitle.addEventListener('mouseleave', () => {
        glitchTitle.style.animation = 'glitch 3s infinite';
    });
}

// Pricing Card Interactive Highlight
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
        if (this.classList.contains('featured')) {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        if (this.classList.contains('featured')) {
            this.style.transform = 'scale(1.05)';
        }
    });
});

// Service Card Tilt Effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add typing effect to hero subtitle (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
/*
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText);
    }, 1000);
}
*/

// Add circuit animation to background
function createCircuitAnimation() {
    const circuitBg = document.querySelector('.circuit-bg');
    if (!circuitBg) return;
    
    // Add pulsing effect to circuit lines
    setInterval(() => {
        circuitBg.style.opacity = '0.3';
        setTimeout(() => {
            circuitBg.style.opacity = '0.4';
        }, 500);
    }, 2000);
}

createCircuitAnimation();

// Add random glowing dots on the circuit board
function addGlowingDots() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '3px';
        dot.style.height = '3px';
        dot.style.background = '#00ff88';
        dot.style.borderRadius = '50%';
        dot.style.boxShadow = '0 0 10px #00ff88';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.opacity = '0';
        dot.style.animation = `pulse ${2 + Math.random() * 3}s infinite`;
        dot.style.animationDelay = Math.random() * 2 + 's';
        hero.appendChild(dot);
    }
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

addGlowingDots();

// Console Easter Egg
console.log('%c🔧 TechFix Pro', 'color: #00ff88; font-size: 24px; font-weight: bold;');
console.log('%cLooking for a job? Check our careers page!', 'color: #0088ff; font-size: 14px;');
console.log('%cOr contact us at: careers@techfixpro.com', 'color: #a0aec0; font-size: 12px;');
