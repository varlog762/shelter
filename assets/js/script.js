//Burger menu

const mainBurgerBtn = document.getElementById('main-burger-button'),
    petsBurgerBtn = document.getElementById('pets-burger-button'),
    burgerMenuContainer = document.querySelector('.header__burger-menu-container'),
    headerBurgerNav = document.querySelector('.main-header-burger-nav'),
    headerBurgerNavLinksXollection = headerBurgerNav.querySelectorAll('.burger-menu-item-link'),
    headerTitle = document.querySelector('.header__logo-link');



if (mainBurgerBtn) {
    console.log('Hello!');
    mainBurgerBtn.addEventListener('pointerdown', burgerShowAndHide);
}
if (petsBurgerBtn) {
    petsBurgerBtn.addEventListener('pointerdown', burgerShowAndHide);
}
burgerMenuContainer.addEventListener('pointerdown', hideBurgerWhenClickGrayArea);

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
    console.log(event.target);
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

