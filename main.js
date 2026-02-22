 // Fade-in sections
    const sections = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Typing effect for tagline
    const tagline = "Frontend Developer | Problem Solver | Creative Thinker";
    let index = 0;
    const typingElement = document.getElementById('typing');

    function type() {
        if(index < tagline.length){
            typingElement.innerHTML += tagline.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    // Ensure page loads at top, then start typing
    window.addEventListener('load', () => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 10);

        type();
    });