ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header,.text-home,.icon-home,.box-about,.text-box-about,.title-sklis,.services-box', { origin: 'top' });
ScrollReveal().reveal('.img-home,.about,.title-box-about,.about,.sklis-box,.row,.title-services', { origin: 'bottom' });


  
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // تغيير اللون عند التمرير لأسفل بمقدار يزيد عن 100 بكسل
        header.style.backgroundColor = "rgb(26 77 46 / 55%)"; // اللون الثانوي الذي تريده
    } else {
        header.style.backgroundColor = "#def2f000"; // العودة إلى اللون الأولي عند العودة إلى أعلى
    }
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


