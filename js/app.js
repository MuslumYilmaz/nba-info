addHeaderList();

const links = document.querySelectorAll('.scroll-to');

addScrolling();

// add headers via appendChild
function addHeaderList() {
    const div = document.getElementById('nav-list');


    const navList = ['Home', 'Lakers', 'Celtics', 'Rockets', 'Warriors'];

    for (i of navList) {
        let newHeaderItem = document.createElement('a');
        newHeaderItem.textContent = i;
        newHeaderItem.setAttribute("data-link", i);
        newHeaderItem.classList.add("scroll-to");
        newHeaderItem.classList.add(i);
    
        div.appendChild(newHeaderItem);
    }
}

// add scrolling functionality
function addScrolling() {
    links.forEach(item => {
        item.addEventListener('click', () => {
            removeActiveState();
            item.classList.add("active");
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