const slides = document.querySelector('.slides');
const marcadores = document.querySelectorAll('.marcador');
const totalSlides = marcadores.length;
const intervalo = 3000; // Tempo em milissegundos para a transição automática

let slideIndex = 0;

// Função para mostrar um slide específico
function mostrarSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
    atualizarMarcadores(index);
}

// Função para atualizar o estado dos marcadores
function atualizarMarcadores(index) {
    marcadores.forEach((marcador, i) => {
        marcador.classList.toggle('active', i === index);
    });
}

// Função para alterar o slide ao clicar nos marcadores
marcadores.forEach(marcador => {
    marcador.addEventListener('click', () => {
        const index = parseInt(marcador.dataset.slide, 10);
        slideIndex = index;
        mostrarSlide(slideIndex);
    });
});

// Inicia o carrossel e define o intervalo automático
function iniciarCarrossel() {
    mostrarSlide(slideIndex);
    setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        mostrarSlide(slideIndex);
    }, intervalo);
}

iniciarCarrossel();
