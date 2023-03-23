/**
 * Burger menu
 */

const burgerBtn = document.getElementById('burger-button'),
    burgerMenuContainer = document.querySelector('.header__burger-menu-container');
headerBurgerNav = document.querySelector('.main-header-burger-nav'),
    headerBurgerNavLinksXollection = headerBurgerNav.querySelectorAll('.burger-menu-item'),
    headerTitle = document.querySelector('.main-header__logo-link');

burgerBtn.addEventListener('pointerdown', burgerShowAndHide);
burgerMenuContainer.addEventListener('pointerdown', hideBurgerWhenClickGrayArea);

for (let link of headerBurgerNavLinksXollection) {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('header__burger-button--active');
        burgerMenuContainer.classList.remove('header__burger-menu-container--active');
        document.body.classList.remove('body-overflow-hidden');
        headerTitle.classList.remove('main-header__logo-link--invisible');
    });
}

function burgerShowAndHide() {
    if (!checkClass()) {
        burgerMenuContainer.classList.remove('header__burger-menu-container--inactive');
        burgerBtn.classList.remove('header__burger-button--inactive');
        burgerMenuContainer.classList.add('header__burger-menu-container--active');
        burgerBtn.classList.add('header__burger-button--active');
        document.body.classList.add('body-overflow-hidden');
        headerTitle.classList.add('main-header__logo-link--invisible');
    } else if (checkClass()) {
        burgerMenuContainer.classList.add('header__burger-menu-container--inactive');
        burgerBtn.classList.add('header__burger-button--inactive');
        burgerMenuContainer.classList.remove('header__burger-menu-container--active');
        burgerBtn.classList.remove('header__burger-button--active');
        document.body.classList.remove('body-overflow-hidden');
        headerTitle.classList.remove('main-header__logo-link--invisible');
        
    }
}

function hideBurgerWhenClickGrayArea(event) {
    console.log(event.target);
    if (event.target === burgerMenuContainer) {
        burgerBtn.classList.remove('header__burger-button--active');
        burgerMenuContainer.classList.remove('header__burger-menu-container--active');
        document.body.classList.remove('body-overflow-hidden');
        headerTitle.classList.remove('main-header__logo-link--invisible');
        burgerMenuContainer.classList.add('header__burger-menu-container--inactive');
        burgerBtn.classList.add('header__burger-button--inactive');
    }
}

function checkClass() {
    return document.body.classList.contains('body-overflow-hidden');
}