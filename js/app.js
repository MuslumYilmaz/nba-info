// grab sections
const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('nav .container ul li');
const header = document.querySelectorAll('.card-header');

// handle scroll event
window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navli.forEach(li => {
        // remove the state
        li.classList.remove('active');

        // add active state
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });

    header.forEach(h => {
        // remove the state
        h.classList.remove('active');

        // add active state
        if (h.id == current) {
            h.classList.add('active');
        }
    });
});