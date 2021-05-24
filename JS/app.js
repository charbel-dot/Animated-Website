const button = document.querySelector('.menu');
button.addEventListener("click", toggle);

function toggle(){
    button.classList.toggle('samir');
};

const random_button = document.getElementById('random-button');

random_button.addEventListener("click", generate);

function generate(){
    let number = Math.floor(Math.random () * 10000);
    let random = document.getElementById('random-number').innerHTML = number;
};

// Menu for the Mobile View

const navSlide = () => {
    const burger = document.querySelector('.menu');
    const nav = document.querySelectorAll('.header-content .list');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('list-active');
    });
}

navSlide();
