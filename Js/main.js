(function(){
    'use strict'
    

    //DOM

    var $menuButtom = document.querySelector('#js-menu-buttom');
    var $body = document.querySelector('body');
    var $menu = document.querySelector('.menu-list');


    // EVENTOS

    $menuButtom.addEventListener('click', alteraMenu)
    window.addEventListener('resize', confereMenuAtivado)


    // FUNÇÕES DE EVENTO

    function confereMenuAtivado(){
        const LARGURA_MENU_DESKTOP = 1024;
        var widthWindow = parseFloat(getComputedStyle($body).width);
        console.log(widthWindow)

        if(widthWindow > LARGURA_MENU_DESKTOP){
            console.log('maior: ', widthWindow);
        }
        else if(widthWindow < LARGURA_MENU_DESKTOP){
            alteraMenu();
        }

    }
    function alteraMenu(){
        var isActive = document.querySelector('.start-menu-effect');

        if(isActive == null){
            $body.classList.add('start-menu-effect');
        }
        else if(isActive != null){
            $body.classList.remove('start-menu-effect');
        }

    }

    //testes

})();