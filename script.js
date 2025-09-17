// Cadastro
const form = document.getElementById('formCadastro');
const msgSucesso = document.getElementById('msgSucesso');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(nome && email && senha){
        msgSucesso.textContent = `Cadastro realizado com sucesso, ${nome}!`;
        form.reset();
        setTimeout(() => { msgSucesso.textContent = ''; }, 4000);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Carrossel
const carrossel = document.querySelector('.carrossel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const scrollStep = 240;

nextBtn.addEventListener('click', () => {
    carrossel.scrollBy({ left: scrollStep, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
    carrossel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

setInterval(() => {
    if(carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth){
        carrossel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        carrossel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
}, 4000);

// Fade-in
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Botão voltar ao topo
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
