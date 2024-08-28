function menuMobile() {
    const btnMenu = document.querySelector('.mobile_btn');
    const content = document.querySelector('#mobile_menu');

    content.classList.toggle('active1');

    // btnMenu.classList.add('fa-x');
    // btnMenu.classList.remove('mobile_btn');
    // btnMenu.classList.toggle('fa-x');
    const icon = document.querySelector('.mobile_btn');
    icon.classList.toggle('fa-x');

}
const btnMenu = document.querySelector('.mobile_btn');
btnMenu.addEventListener('click', menuMobile);

// $('#mobile_menu').find('i').toggleClass('fa-x');