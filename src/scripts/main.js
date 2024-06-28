document.addEventListener('DOMContentLoaded', function(){

    window.addEventListener('scroll', function(){

        const scrollAtual = window.scrollY

        if(scrollAtual > 850){
            show();
        }
        else{
            hide();
        }

    })


    function show(){
        const personagens = document.querySelector('[data-personagem]')

        personagens.classList.add('personagens__content__list--is-visible')
    }

    function hide(){
        const personagens = document.querySelector('[data-personagem]')

        personagens.classList.remove('personagens__content__list--is-visible')
    }

})
