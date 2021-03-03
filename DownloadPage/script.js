const navbarList = document.querySelector('.navbar-list');
const button = document.querySelector('button');
const judul = document.querySelector('.image-kosong h1');
const teks = document.querySelector('.image-kosong h3');
const teksP = document.querySelector('.image-kosong p');
const image = document.querySelector('.image-content img');


button.addEventListener('click', () =>{
    navbarList.classList.toggle('navbar-list-klik')
    judul.classList.toggle('judul-hilang');
    teks.classList.toggle('judul-hilang');
    teksP.classList.toggle('teks-hilang');
    image.classList.toggle('efek-gambar');
    
})