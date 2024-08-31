function menuMobile() {
    // FUNÇÃO PARA ABRIR MENU RESPONSIVO

    const btnMenu = document.querySelector('.mobile_btn');
    const content = document.querySelector('#mobile_menu');

    content.classList.toggle('active1');

    const icon = document.querySelector('.mobile_btn');
    icon.classList.toggle('fa-x');

    const modal = document.querySelector('.modal');
}
const btnMenu = document.querySelector('.mobile_btn');
btnMenu.addEventListener('click', menuMobile);








// FUNÇÃO DE SCROLL
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav_item');

function scrollHandler() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY - header.offsetHeight;

    let activeSectionIndex = 0;

    // Adiciona ou remove sombra no header baseado na posição do scroll
    if (scrollPosition <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
    }

    // Verifica qual seção está visível e atualiza o item de navegação correspondente
    sections.forEach(function(section, index) {
        const sectionTop = section.offsetTop - 96; // Posição da seção ajustada pelo offset
        const sectionBottom = sectionTop + section.offsetHeight; // Posição inferior da seção

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = index;
            return;
        }
    });

    // Remove a classe 'active' de todos os itens de navegação
    navItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' ao item de navegação correspondente
    navItems[activeSectionIndex].classList.add('active');
}

// Adiciona o evento de scroll ao window
window.addEventListener('scroll', scrollHandler);

// ANIMAÇÃO DE SCROLL
ScrollReveal().reveal('#navbar', {
    origin: 'top',
    duration: 1000,
    distance: '60%',
});


ScrollReveal().reveal('.title', {
    origin: 'left',
    duration: 2000,
    distance: '30%',
    delay: 900
});

ScrollReveal().reveal('.description', {
    origin: 'left',
    duration: 2100,
    distance: '30%',
    delay: 900
});

ScrollReveal().reveal('.banner', {
    origin: 'rigth',
    duration: 2100,
    distance: '30%',
    delay: 900
});

ScrollReveal().reveal('.about_image', {
    origin: 'left',
    duration: 2100,
    distance: '30%',
    delay: 900
});

ScrollReveal().reveal('.about_content', {
    origin: 'rigth',
    duration: 2100,
    distance: '30%',
    delay: 900
});

ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2100,
    distance: '30%',
    delay: 900
});