let burgerMenu = function (){
    const burger = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    const header = document.querySelector('.header');
    const menuLinks = document.querySelectorAll('.list__link');

    burger.addEventListener('click' , () => {
        navigation.classList.toggle('navigation');
        navigation.classList.toggle('navigation__active');
        burger.classList.toggle('burger-menu__active');

        header.classList.toggle('header-style');


    });
    
    // if (window.innerWidth <=766){
    //     for(let i = 0; i<menuLinks.length; i++){
    //         menuLinks[i].addEventListener ('click' , () => {
    //             header.classList.remove('header-style ');
    //         });
    //     }
        
    // }
    
    
    
   

    
    
}
burgerMenu();





