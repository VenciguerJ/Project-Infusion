(function(){
    'use strict'
    


    //DOM

    var $menuButtom = document.querySelector('#js-menu-buttom');
    var $body = document.querySelector('body');
    var $next =document.querySelectorAll('.js-next');
    var $prev =document.querySelectorAll('.js-prev');


    // EVENTOS

    $menuButtom.addEventListener('click', alteraMenu)
    window.addEventListener('resize', confereMenuAtivado)

    for (let i = 0;$next[i]; i++) {
        $next[i].addEventListener('click', showNextContent);
    }
    for (let i = 0;$prev[i]; i++) {
        $prev[i].addEventListener('click', showNextContent);
    }

    // FUNÇÕES DE EVENTO

    function confereMenuAtivado(){
        const LARGURA_MENU_DESKTOP = 1024;
        var widthWindow = parseFloat(getComputedStyle($body).width);
        
        if(widthWindow < LARGURA_MENU_DESKTOP){
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

    function showNextContent(evt){
        var laptop = $next[0];
        var text = $next[1];
        if(evt.currentTarget == laptop){
            //evento Laptop
            var $laptopFigure = document.querySelectorAll('.js-laptop-figure');
            var actualPosition = returnShowedPosition($laptopFigure);
            actualPosition = alteraSlide('proximo', $laptopFigure, actualPosition);
        }
        if(evt.currentTarget == text){
            // evento text
            var $textPartition = document.querySelectorAll('.text-partition');
            console.log($textPartition[1] != document.querySelector('.hidden'))
            var actualPosition = returnShowedPosition($textPartition);
            actualPosition = alteraSlide('proximo', $textPartition, actualPosition);
        }
    }

    function showPrevContent(evt){
        var laptop = $prev[0];
        var text = $prev[1]
        var actualPosition = 0
    }

    function returnShowedPosition(positions){ // mostra o index que não possui a classe hidden
        for(var i=0;positions[i];i++){
            if(positions[i] != document.querySelector('.hidden')){
                var showedPosition = i;
            }
        }
        return showedPosition
    }
    function alteraSlide(direcao, arr, position){
        if(direcao === 'proximo'){
            arr[position].classList.add('hidden');
            position ++;

            if(position >= arr.length){
                position = 0;
            }
            arr[position].classList.remove('hidden');
        }
        return position;
    }

    //testes

})();