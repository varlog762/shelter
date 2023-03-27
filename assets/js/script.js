'use strict';

//Burger menu

const mainBurgerBtn = document.getElementById('main-burger-button'),
    petsBurgerBtn = document.getElementById('pets-burger-button'),
    burgerMenuContainer = document.querySelector('.header__burger-menu-container'),
    headerBurgerNav = document.querySelector('.main-header-burger-nav'),
    headerBurgerNavLinksXollection = headerBurgerNav.querySelectorAll('.burger-menu-item-link'),
    headerTitle = document.querySelector('.header__logo-link');

if (mainBurgerBtn) {
    mainBurgerBtn.addEventListener('click', burgerShowAndHide);
}
if (petsBurgerBtn) {
    petsBurgerBtn.addEventListener('click', burgerShowAndHide);
}
burgerMenuContainer.addEventListener('click', hideBurgerWhenClickGrayArea);

for (let link of headerBurgerNavLinksXollection) {
    link.addEventListener('click', () => {
        if (mainBurgerBtn) {
            mainBurgerBtn.classList.remove('header__burger-button--active');
        } else if (petsBurgerBtn) {
            petsBurgerBtn.classList.remove('header__burger-button--active');
        }
        burgerMenuContainer.classList.remove('header__burger-menu-container--active');
        document.body.classList.remove('body-overflow-hidden');
        headerTitle.classList.remove('header__logo-link--invisible');
    });
}

function burgerShowAndHide() {
    if (!checkClass('body-overflow-hidden')) {
        if (mainBurgerBtn) {
            mainBurgerBtn.classList.remove('header__burger-button--inactive');
            mainBurgerBtn.classList.add('header__burger-button--active');
        } else if (petsBurgerBtn) {
            petsBurgerBtn.classList.remove('header__burger-button--inactive');
            petsBurgerBtn.classList.add('header__burger-button--active');
        }
        burgerMenuContainer.classList.remove('header__burger-menu-container--inactive');
        burgerMenuContainer.classList.add('header__burger-menu-container--active');
        document.body.classList.add('body-overflow-hidden');
        headerTitle.classList.add('header__logo-link--invisible');
    } else if (checkClass('body-overflow-hidden')) {
        if (mainBurgerBtn) {
            mainBurgerBtn.classList.add('header__burger-button--inactive');
            mainBurgerBtn.classList.remove('header__burger-button--active');
        } else if (petsBurgerBtn) {
            petsBurgerBtn.classList.add('header__burger-button--inactive');
            petsBurgerBtn.classList.remove('header__burger-button--active');
        }
        burgerMenuContainer.classList.add('header__burger-menu-container--inactive');
        burgerMenuContainer.classList.remove('header__burger-menu-container--active');
        document.body.classList.remove('body-overflow-hidden');
        headerTitle.classList.remove('header__logo-link--invisible');

    }
}

function hideBurgerWhenClickGrayArea(event) {
    for (let item of headerBurgerNavLinksXollection) {
        if (event.target === burgerMenuContainer && event.target !== item) {
            if (mainBurgerBtn) {
                mainBurgerBtn.classList.remove('header__burger-button--active');
                mainBurgerBtn.classList.add('header__burger-button--inactive');
            } else if (petsBurgerBtn) {
                petsBurgerBtn.classList.remove('header__burger-button--active');
                petsBurgerBtn.classList.add('header__burger-button--inactive');
            }
            burgerMenuContainer.classList.remove('header__burger-menu-container--active');
            document.body.classList.remove('body-overflow-hidden');
            headerTitle.classList.remove('header__logo-link--invisible');
            burgerMenuContainer.classList.add('header__burger-menu-container--inactive');

        }
    }
}

function checkClass(className) {
    return document.body.classList.contains(className);
}

//Carousel

const petCarouselContainer = document.querySelector('.our-friends-carousel-container'),
    petCarouselLine = document.querySelector('.our-friends-carousel-line'),
    buttonRight = document.querySelector('.button-right'),
    buttonLeftCollection = document.querySelectorAll('.button-left');

let shiftPosition = 0;

createPetsLayout();

//Resets the carousel when the screen is resized.
window.onresize = function () {
    shiftPosition = 0;
    petCarouselLine.style.left = shiftPosition + 'px';
};

buttonRight.addEventListener('click', showNext);
for (let buttonLeft of buttonLeftCollection) {
    buttonLeft.addEventListener('click', showPrev);
}

/**
 * Create Pet card (DOM element)
 * @param {*} pet - Pet Object
 * @returns DOM Object
 */
function createPetCard(pet) {
    const petCard = document.createElement('div');
    petCard.classList.add('our-friends-card', 'pet-card');
    petCard.setAttribute('id', `${pet.name.toLowerCase()}-card`);

    const petCardFigure = document.createElement('figure');
    petCardFigure.classList.add('our-friends-card-pic', 'pet-card-pic');
    petCard.append(petCardFigure);

    const petCardFigureImg = document.createElement('img');
    petCardFigureImg.classList.add('our-friends-card-pic', 'pet-card-pic');
    petCardFigureImg.setAttribute('src', pet.img);
    petCardFigureImg.setAttribute('alt', pet.name);
    petCardFigure.append(petCardFigureImg);

    const petCardFigureCaption = document.createElement('figcaption');
    petCardFigureCaption.classList.add('our-friends-card-name', 'pet-card-name');
    petCardFigureCaption.innerHTML = pet.name;
    petCardFigure.append(petCardFigureCaption);

    const petCardInformationBtn = document.createElement('a');
    petCardInformationBtn.classList.add('our-friends-card-link', 'link-btn-transparent', 'pet-card-link');
    petCardInformationBtn.setAttribute('href', '#!');
    petCardInformationBtn.innerHTML = 'Learn more';
    petCard.append(petCardInformationBtn);

    return petCard;
}


/**
 * Generates a random number (0 >= petsCollection.length - 1 < petsCollection.length).
 */
function random() {
    return Math.floor(Math.random() * petsCollection.length);
}

/**
 * Creates a layout of cards on page load.
 */
function createPetsLayout() {
    const fragment = document.createDocumentFragment(),
        line = [];

    while (line.length != petsCollection.length) {
        let randomNum = random();

        if (!line.includes(randomNum)) {
            line.push(randomNum);
        }
    }

    line.forEach(num => fragment.append(createPetCard(petsCollection[num])));

    petCarouselLine.append(fragment);
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