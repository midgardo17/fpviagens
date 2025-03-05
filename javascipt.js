// Menu hamburguer
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

// Tenta carregar vídeos localmente com fallback para links externos
videos[currentVideo].style.display = 'block';
setTimeout(() => {
    const firstVideo = videos[currentVideo];
    if (firstVideo.error || !firstVideo.readyState) {
        // Substitua pelos links reais dos vídeos hospedados (ex.: Google Drive, Dropbox)
        const videoLinks = [
            "https://example.com/videos/beach.mp4",
            "https://example.com/videos/mountains.mp4",
            "https://example.com/videos/city.mp4",
            "https://example.com/videos/airplane.mp4",
            "https://example.com/videos/ocean.mp4",
            "https://example.com/videos/forest.mp4"
        ];
        videos.forEach((video, index) => {
            video.querySelector('source').src = videoLinks[index];
            video.load();
        });
    }
    setTimeout(changeVideo, 10000); // Inicia o carrossel
}, 1000);