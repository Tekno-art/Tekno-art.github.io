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

