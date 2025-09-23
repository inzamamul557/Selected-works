document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const scrollDownBtn = document.getElementById('scrollDownBtn');

    const scrollContainerBy = (amount) => {
        container.scrollBy({
            top: amount,
            left: 0,
            behavior: 'smooth'
        });
    };

    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', () => {
            scrollContainerBy(-300);
        });
    }

    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            scrollContainerBy(300);
        });
    }

    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.scroll-anchor');

    const updateActiveDot = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (container.scrollTop >= sectionTop - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href').slice(1) === currentSectionId) {
                dot.classList.add('active');
            }
        });
    };
    
    navDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                container.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    if (container) {
       container.addEventListener('scroll', updateActiveDot);
    }
    
    updateActiveDot();

});
