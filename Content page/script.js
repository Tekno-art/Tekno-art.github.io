const spaceImg = document.querySelectorAll('.space-img');
const shadow = document.querySelector('.shadow');

window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
    
    spaceImg.forEach(e => {
        let speed = e.dataset.speed;
        e.style.transform = `translateY(${scroll * speed}px)`
    })
    shadow.style.height = `${scroll * 0.5 + 200}px`;
})

const bars = document.getElementById("bars");
const navbar = document.querySelector("nav ul");
const close = document.querySelector(".close");
const judul = document.querySelector(".judul");

bars.addEventListener('click', () =>{
    navbar.classList.add('navbar-slide');
    judul.style.opacity = 0;
    bars.style.opacity = 0;
    bars.style.transitionDelay = '.2s';
})

close.addEventListener('click', () =>{
    navbar.classList.remove('navbar-slide');
    judul.style.opacity = 1;
    bars.style.opacity = 1;
    bars.style.transitionDelay = '.3s';
})

