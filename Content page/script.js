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

const bars = document.querySelector(".bars");
const navbar = document.querySelector(".navbar1");
const close = document.querySelector(".close");
const judul = document.querySelector(".judul");


bars.addEventListener('click', () =>{
    anime({
        targets : '.navbar1',
        translateY : 0,
        duration : 800,
        easing : 'linear' 
    })
    anime({
        targets : '.judul',
        opacity : 0,
        duration : 500,
        easing : 'linear'
    })
})
close.addEventListener('click', () =>{
    anime({
        targets : '.navbar1',
        translateY : -250,
        duration : 800,
        easing : 'linear' 
    })
    anime({
        targets : '.judul',
        opacity : 1,
        duration : 500,
        easing : 'linear'
    })
})

