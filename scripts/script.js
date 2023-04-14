
const buttonElem = document.querySelector('.link__menu');
const btnElem = document.querySelector('.popup_button');
const modalElem = document.querySelector('.modal');
const burger = document.querySelector('.burger');
const lines = burger.querySelectorAll('.burger__line');
const popup = document.querySelector('.popup')

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.modal__close')) {
        
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

function toggleBurger() {
    lines.forEach((line, index) => {
      line.classList.toggle(`burger_line${index + 1}_active`);
    })
    popup.classList.toggle('popup_active');
}

burger.addEventListener('click', toggleBurger);
buttonElem.addEventListener('click', openModal);
btnElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);