const links = document.querySelectorAll('.menu-li a');
const burger = document.querySelector('.burger');


links.forEach(link => {
    link.addEventListener('click', (e) => {
        const lis = document.querySelectorAll('.menu-li');
        lis.forEach(li => {
            if (e.path[1] === li) {
                li.classList.toggle('show');
            }
        })


    })

})


burger.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile');

    const img = burger.querySelector('img');
    if (nav.classList.contains('mobile')) {
        img.src = "images/icon-close.svg";
    } else {
        img.src = 'images/icon-hamburger.svg';
    }

    if (window.innerWidth < 970) {

        links.forEach(link => {
            const img = link.querySelector('img')
            img.src = 'images/icon-arrow-dark.svg'
        })


    }
})


