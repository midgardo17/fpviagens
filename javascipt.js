document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
});

// Carrossel de vídeos
const videos = document.querySelectorAll('.hero-video');
let currentVideo = 0;

function changeVideo() {
    videos[currentVideo].style.display = 'none';
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].style.display = 'block';
    setTimeout(changeVideo, 10000); // Troca a cada 10 segundos
}

videos[currentVideo].style.display = 'block';
setTimeout(changeVideo, 10000); // Inicia o carrossel