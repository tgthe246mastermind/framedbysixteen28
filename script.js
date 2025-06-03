document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            if (mainNav.classList.contains('active')) {
                mainNav.style.display = 'flex';
                mainNav.style.flexDirection = 'column';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = 'white';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                mainNav.style.display = 'none';
            }
        });
    }
    
    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    if (testimonials.length > 1) {
        // Initially hide all but the first testimonial
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Set up the slider rotation
        setInterval(() => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 5000);
    }
    
    // Form submission handling
    const consultationForm = document.getElementById('consultation-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would handle form submission to a server here
            alert('Thank you for your interest! We will contact you soon to confirm your consultation.');
            consultationForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would handle form submission to a server here
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mainNav.style.display = 'none';
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        if (scrollTop <= 0) {
            // At the top of the page
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

 const carousel = document.querySelector('.carousel');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= items.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = items.length - 1;
            } else {
                currentIndex = index;
            }
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        // Auto-slide every 5 seconds
        let autoSlide = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);

        // Pause auto-slide on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });

        carousel.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 5000);
        });

        //  // Video looping enhancement
        // const video = document.querySelector('.hero-video');
        // video.muted = true; // Ensure muted for autoplay

        // // Ensure seamless looping
        // video.addEventListener('ended', () => {
        //     video.currentTime = 0; // Reset to start
        //     video.play(); // Play again
        // });

        // // Optional: Handle video load errors
        // video.addEventListener('error', (e) => {
        //     console.error('Video failed to load:', e);
        //     // Optionally switch to fallback image
        //     video.style.display = 'none';
        //     document.querySelector('.hero').style.backgroundImage = 'url(hero-image.png)';
        //     document.querySelector('.hero').style.backgroundSize = 'cover';
        //     document.querySelector('.hero').style.backgroundPosition = 'center';
        // });