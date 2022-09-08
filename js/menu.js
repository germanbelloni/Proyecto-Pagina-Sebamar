(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const germanPhoto = document.querySelector('.campNou');

    openButton.addEventListener('click',()=>{
        menu.classList.add('.nav__link--show');
    });

    openButton.addEventListener('click',()=>{
        germanPhoto.classList.remove('hide');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('.nav__link--show');
    });
 
})();