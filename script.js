// Menu hamburguer
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
});git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add videos/video01.mp4
git commit -m "Adicionando vídeo com Git LFS"
git push origin main
git lfs push origin main