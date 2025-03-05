// Menu hamburguer
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
});

// Formulário de contato (exemplo básico com envio para console)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Carrossel de vídeos (opcional, comentado para manter vídeo único)
// const videos = document.querySelectorAll('.hero-video');
// let currentVideo = 0;

// function changeVideo() {
//     videos[currentVideo].style.display = 'none';
//     currentVideo = (currentVideo + 1) % videos.length;
//     videos[currentVideo].style.display = 'block';
//     setTimeout(changeVideo, 10000); // Troca a cada 10 segundos
// }

// videos[currentVideo].style.display = 'block';
// setTimeout(changeVideo, 10000);
