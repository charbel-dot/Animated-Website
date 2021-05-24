const random_button = document.getElementById('random-button');

random_button.addEventListener("click", generate);

function generate(){
    let number = Math.floor(Math.random () * 10000);
    let random = document.getElementById('random-number').innerHTML = number;
};

// Menu for the Mobile View

let navSlide = () => {
    const burger = document.querySelector('.menu');
    const nav = document.querySelector('.list');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('list-active');
    });
}

navSlide();
