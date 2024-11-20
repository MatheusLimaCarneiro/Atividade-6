
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev' 
        }
    });

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slideNext();
        } else if(event.key === 'ArrowRight') {
            swiper.slidePrev();
        }
    });

    const gameInput = document.getElementById('gameInput');
    
    gameInput.addEventListener('keypress', function (event){
      
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase();
            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                    case'ZELDA':
                    swiper.slideTo(2);
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
        }
    });
});

// Seleciona o botão de login e o modal
const btnLogin = document.getElementById('btnLogin');
const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.btn-modal-close');

// Função para abrir o modal
btnLogin.addEventListener('click', () => {
    modalContainer.classList.add('show-modal');
});

// Função para fechar o modal
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show-modal');
});

// Fechar modal quando clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
        modalContainer.classList.remove('show-modal');
    }
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});