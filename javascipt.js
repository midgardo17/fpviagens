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

// Tenta carregar vídeos com fallback para links do Google Drive
videos[currentVideo].style.display = 'block';
setTimeout(() => {
    const firstVideo = videos[currentVideo];
    if (firstVideo.error || !firstVideo.readyState) {
        // Links diretos dos vídeos no Google Drive (substituímos os placeholders pelos seus links)
        const videoLinks = [
            "https://drive.google.com/uc?export=download&id=1RYxh3px2GpxCuVk3N7fxxlu61Ew2xpr4",
            "https://drive.google.com/uc?export=download&id=11zQqbiVevRNvSULepV8UTPmIG1l7WfbS",
            "https://drive.google.com/uc?export=download&id=1OAtmSsLNLUFNdobQt5GZNLHGeKl-ks42",
            "https://drive.google.com/uc?export=download&id=1gb-244zRHAk0ATpb-cpqZ08sjVgfFY7m",
            "https://drive.google.com/uc?export=download&id=1nSqRpKNwoHeyYevOEtel4bNsiYpHC-OT"
        ];
        videos.forEach((video, index) => {
            video.querySelector('source').src = videoLinks[index];
            video.load();
        });
    }
    setTimeout(changeVideo, 10000); // Inicia o carrossel
}, 1000);