addHeaderList();

const links = document.querySelectorAll('.scroll-to');

addScrolling();

// add headers via appendChild
function addHeaderList() {
    const div = document.getElementById('nav-list');


    const navList = ['Home', 'Lakers', 'Celtics', 'Rockets', 'Warriors'];

    for (i of navList) {
        let newHeaderItem = document.createElement('li');
        newHeaderItem.textContent = i;
        newHeaderItem.setAttribute("data-link", i);
        newHeaderItem.classList.add("scroll-to");
        newHeaderItem.classList.add(i);
    
        div.appendChild(newHeaderItem);
    }
}

// add click functionality
function addScrolling() {
    links.forEach(item => {
        item.addEventListener('click', () => {
            const el = document.getElementById(item.getAttribute("data-link"));
            el.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    });
}

// remove active state
function removeActiveState() {
    links.forEach(l => l.classList.remove("active"));
}

// add scrolling function

const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('nav .container ul li');

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
        li.classList.remove('active');

        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });
}); 