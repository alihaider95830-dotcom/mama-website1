document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission (WhatsApp Routing)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const gradeSelect = document.getElementById('grade');
            const gradeText = gradeSelect.options[gradeSelect.selectedIndex].text;
            const timingSelect = document.getElementById('timing');
            const timingText = timingSelect.options[timingSelect.selectedIndex].text;
            
            // Get checked subjects
            const subjectCheckboxes = document.querySelectorAll('input[name="subject"]:checked');
            const subjects = Array.from(subjectCheckboxes).map(cb => cb.parentElement.textContent.trim()).join(', ');
            
            const message = document.getElementById('message').value;

            // Construct WhatsApp message
            let waMessage = `*New Tutoring Inquiry* 🎓\n\n`;
            waMessage += `*Parent's Name:* ${name}\n`;
            waMessage += `*Contact Number:* ${phone}\n`;
            if (gradeSelect.value) waMessage += `*Child's Grade:* ${gradeText}\n`;
            if (timingSelect.value) waMessage += `*Preferred Timing:* ${timingText}\n`;
            if (subjects) waMessage += `*Subjects Needed:* ${subjects}\n`;
            if (message) waMessage += `\n*Additional Message:*\n${message}`;

            // Define target phone number (with country code, no + or spaces)
            const targetPhone = '923214128605';
            
            // Create WhatsApp link
            const waLink = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waMessage)}`;
            
            // Open WhatsApp in a new tab
            window.open(waLink, '_blank');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Intersection Observer for Blur-in Animations
    const animatedElements = document.querySelectorAll('.animate-blur-in');
    
    // Initially pause animations by setting visibility to hidden
    animatedElements.forEach(el => {
        el.style.opacity = '0'; // hide them initially
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the inline style and let CSS animation take over
                entry.target.style.opacity = '';
                // Ensure the animation is restarted if it's already there
                entry.target.style.animation = 'none';
                entry.target.offsetHeight; /* trigger reflow */
                entry.target.style.animation = null; 
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
