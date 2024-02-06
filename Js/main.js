(function(){
    'use strict'
    

    //DOM

    var $menuButtom = document.querySelector('#js-menu-buttom');

    //DOM

    var $menuButtom = document.querySelector('#js-menu-buttom');
    var $body = document.querySelector('body');
    var $menu = document.querySelector('.menu-list');


    // EVENTOS

    $menuButtom.addEventListener('click', alteraMenu)
    window.addEventListener('resize', confereMenuAtivado)


    // FUNÇÕES DE EVENTO
    var $next =document.querySelectorAll('.js-next');
    var $prev =document.querySelectorAll('.js-prev');


    // EVENTOS

    $menuButtom.addEventListener('click', alteraMenu)
    window.addEventListener('resize', confereMenuAtivado)


    
    $next[0].addEventListener('click', showNextContent); 
    $prev[0].addEventListener('click', showNextContent);


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

    }


    var actualPosition = 0
    function showNextContent(evt){
        var laptop = $next[0] || $prev[0];
        var text = $next[1];
        console.log(evt.currentTarget);

        if(evt.currentTarget == laptop){
            //evento Laptop
            var $laptopFigure = document.querySelectorAll('.js-laptop-figure');
            console.log(evt.currentTarget);
        }
        if(evt.currentTarget == text){
            // evento text
        }
    }
    function showPrevContent(evt){
        var laptop = $prev[0];
        var text = $prev[1]
        var actualPosition = 0
    }

    //testes


    //testes

})();