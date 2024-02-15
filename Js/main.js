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
    window.addEventListener('load', confereMenuAtivado)

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

    
        if(widthWindow > LARGURA_MENU_DESKTOP){
            $body.classList.remove('start-menu-effect')
        }
        if(widthWindow < LARGURA_MENU_DESKTOP){
            $body.classList.add('start-menu-effect')
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
        var evento = evt.currentTarget;
        var nextLaptop = $next[0];
        var prevLaptop = $prev[0];
        var nextText = $next[1];
        var prevText = $prev[1];

        if(evento == nextLaptop || evento == prevLaptop){
            //evento Laptop
            var $laptopFigure = document.querySelectorAll('.js-laptop-figure');
            var actualPosition = returnShowedPosition($laptopFigure);
            if(evento == nextLaptop){
                actualPosition = alteraSlide('proximo', $laptopFigure, actualPosition);
            }
            if(evento == prevLaptop){
                actualPosition = alteraSlide('anterior', $laptopFigure, actualPosition);
            }
        }
        if(evento == nextText || evento == prevText){
            // evento text
            var $textPartition = document.querySelectorAll('.text-partition');
            var actualPosition = returnShowedPosition($textPartition);

            if(evento == nextText){
                actualPosition = alteraSlide('proximo', $textPartition, actualPosition);
            }
            if(evento == prevText){
                actualPosition = alteraSlide('anterior', $textPartition, actualPosition);
            }
        }
    }

    function returnShowedPosition(positions){ // mostra o index que não possui a classe hidden
        for(var i=0;positions[i];i++){
            if(!positions[i].classList.contains('hidden')){
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
        if(direcao ==='anterior'){
            arr[position].classList.add('hidden');
            position--;

            if(position >= arr.length){
                position = 0;
            }
            arr[position].classList.remove('hidden');
        }
        return position;
    }

    //testes

})();