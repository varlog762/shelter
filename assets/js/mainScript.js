'use strict';

import {
    petsCollection
} from "./petsCollection.js";
import {
    burgerShowAndHide,
    hideBurgerWhenClickGrayArea,
    createCardsLayout,
    createPetCard
} from "./functions.js";

//Burger menu

const burgerBtn = document.getElementById('main-burger-button'),
    burgerMenuContainer = document.querySelector('.header__burger-menu-container'),
    headerBurgerNav = document.querySelector('.main-header-burger-nav'),
    headerBurgerNavLinksXollection = headerBurgerNav.querySelectorAll('.burger-menu-item-link'),
    headerTitle = document.querySelector('.header__logo-link');

burgerBtn.addEventListener('click', () => burgerShowAndHide(burgerBtn, burgerMenuContainer, headerTitle));
burgerMenuContainer.addEventListener('click', (event) => hideBurgerWhenClickGrayArea(event, burgerBtn, burgerMenuContainer, headerTitle, headerBurgerNavLinksXollection));

for (let link of headerBurgerNavLinksXollection) {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('header__burger-button--active');
        burgerMenuContainer.classList.remove('header__burger-menu-container--active');
        document.body.classList.remove('body-overflow-hidden');
        headerTitle.classList.remove('header__logo-link--invisible');
    });
}

//Carousel

const petCarouselLine = document.querySelector('.our-friends-carousel-line'),
    buttonRight = document.querySelector('.button-right'),
    buttonLeftCollection = document.querySelectorAll('.button-left');

let shiftPosition = 0;

createCardsLayout(petsCollection, petsCollection.length, petCarouselLine);

//Resets the carousel when the screen is resized.
window.onresize = function () {
    shiftPosition = 0;
    petCarouselLine.style.left = shiftPosition + 'px';
};

buttonRight.addEventListener('click', showNext);
for (let buttonLeft of buttonLeftCollection) {
    buttonLeft.addEventListener('click', showPrev);
}

//Show & Hide Popup
//
const petsCardsCollection = document.querySelectorAll('.pet-card'),
    petCardPopupContCollections = document.querySelectorAll('.pet-card-popup-container'),
    petsPopupCloseBtnsCollection = document.querySelectorAll('.pet-card-popup-close-btn');

//Show Popup

for (let card of petsCardsCollection) {
    card.addEventListener('click', (event) => {
        // console.log(event.target);
        event.currentTarget.lastElementChild.classList.add('pet-card-popup-container-active');
        document.body.classList.add('body-overflow-hidden');
        
    });
}

//Hide Popup

for (let button of petsPopupCloseBtnsCollection) {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        event.target.closest('.pet-card-popup-container').classList.remove('pet-card-popup-container-active');
        document.body.classList.remove('body-overflow-hidden');
    });
}

for (let petCardPopupContainer of petCardPopupContCollections) {
    petCardPopupContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        if (event.target === event.currentTarget) {
            event.target.closest('.pet-card-popup-container').classList.remove('pet-card-popup-container-active');
            document.body.classList.remove('body-overflow-hidden');
        }
    })
}

/**
 * Responsible for displaying content when the right button is clicked.
 */
function showNext() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1280) {
        shiftPosition -= 1080;
        if (shiftPosition < -5400) {
            shiftPosition = 0;
        }
    } else if (windowWidth < 1280 && windowWidth >= 768) {
        shiftPosition -= 620;
        if (shiftPosition < -4960) {
            shiftPosition = 0;
        }
    } else if (windowWidth < 768) {
        shiftPosition -= 300;
        if (shiftPosition < -5100) {
            shiftPosition = 0;
        }
    }
    petCarouselLine.style.left = shiftPosition + 'px';
}

/**
 * Responsible for displaying content when the left button is clicked.
 */
function showPrev() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1280) {
        shiftPosition += 1080;
        if (shiftPosition > 0) {
            shiftPosition = -5400;
        }
    } else if (windowWidth < 1280 && windowWidth >= 768) {
        shiftPosition += 620;
        if (shiftPosition > 0) {
            shiftPosition = -4960;
        }
    } else if (windowWidth < 768) {
        shiftPosition += 300;
        if (shiftPosition > 0) {
            shiftPosition = -5100;
        }
    }

    petCarouselLine.style.left = shiftPosition + 'px';
}