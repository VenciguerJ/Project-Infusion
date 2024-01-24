(function(){
    'use strict'
    
    var $menuButtom = document.querySelector('#js-menu-buttom')
    var $body = document.querySelector('body');

    $menuButtom.addEventListener('click', mostraMenu)
    window.addEventListener('load', confereMenuAtivado)

    function confereMenuAtivado(){
        if(document.querySelector('.start-menu-effect') == null){
            $body.classList.add('start-menu-effect');
        }
        else if(document.querySelector('.start-menu-effect') != null){
            $body.classList.remove('start-menu-effect');
        }
    }
    function mostraMenu(){
        $body.classList.toggle('start-menu-effect');
    }

})();