'use strict';

import {
    petsCollection
} from "./petsCollection.js";
import {
    burgerShowAndHide,
    hideBurgerWhenClickGrayArea,
    createPetsLayout,
    checkPageNumber
} from "./functions.js";

//Burger menu

const burgerBtn = document.getElementById('pets-burger-button'),
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

//Pagination
//
const petsCardContainerLine = document.querySelector('.pets-our-friends-cards-container-line'),
    buttonNextPage = document.getElementById('button-next-page'),
    buttonLastPage = document.getElementById('button-last-page'),
    buttonPrevPage = document.getElementById('button-prev-page'),
    buttonFirstPage = document.getElementById('button-first-page'),
    pageNumElem = document.querySelector('.pets-our-friends-page-circle');

let shiftPosition = 0;


//Resets the carousel when the screen is resized.
window.onresize = function () {
    shiftPosition = 0;
    petsCardContainerLine.style.left = shiftPosition + 'px';
};

buttonNextPage.addEventListener('click', () => {
    shiftPosition -= 1280;
    petsCardContainerLine.style.left = shiftPosition + 'px';
    pageNumElem.innerHTML = +pageNumElem.innerHTML + 1;
    checkPageNumber(8);
    console.log(shiftPosition);
});
buttonPrevPage.addEventListener('click', () => {
    shiftPosition += 1280;
    petsCardContainerLine.style.left = shiftPosition + 'px';
    pageNumElem.innerHTML = +pageNumElem.innerHTML - 1;
    checkPageNumber(8);
    console.log(shiftPosition);
});

buttonLastPage.addEventListener('click', () => {
    shiftPosition -= ((8 - +pageNumElem.innerHTML) * 1280);
    petsCardContainerLine.style.left = shiftPosition + 'px';
    pageNumElem.innerHTML = 8;
    checkPageNumber(8);
    console.log(shiftPosition);
})

buttonFirstPage.addEventListener('click', () => {
    shiftPosition += ((+pageNumElem.innerHTML - 1) * 1280);
    petsCardContainerLine.style.left = shiftPosition + 'px';
    pageNumElem.innerHTML = 1;
    checkPageNumber(8);
    console.log(shiftPosition);
})

for (let i = 0; i < 8; i++) {
    const page = document.createElement('div');
    page.classList.add('pet-card-page');
    createPetsLayout(petsCollection, 8, page);
    petsCardContainerLine.append(page);
}

//Show & Hide Popup
//
const petsCardBtnsCollection = document.querySelectorAll('.pet-card-link'),
    petCardPopupContCollections = document.querySelectorAll('.pet-card-popup-container'),
    petsPopupCloseBtnsCollection = document.querySelectorAll('.pet-card-popup-close-btn');

//Show Popup

for (let button of petsCardBtnsCollection) {
    button.addEventListener('click', (event) => {
        event.target.nextElementSibling.classList.add('pet-card-popup-container-active');
        document.body.classList.add('body-overflow-hidden');
    });
}

//Hide Popup

for (let button of petsPopupCloseBtnsCollection) {
    button.addEventListener('click', (event) => {
        event.target.closest('.pet-card-popup-container').classList.remove('pet-card-popup-container-active');
        document.body.classList.remove('body-overflow-hidden');
    });
}

for (let petCardPopupContainer of petCardPopupContCollections) {
    petCardPopupContainer.addEventListener('click', (event) => {
        console.log(event.target, event.currentTarget);
        if (event.target === event.currentTarget) {
            event.target.closest('.pet-card-popup-container').classList.remove('pet-card-popup-container-active');
            document.body.classList.remove('body-overflow-hidden');
        }
    })
}