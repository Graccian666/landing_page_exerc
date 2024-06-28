document.addEventListener('DOMContentLoaded', function(){

    const questions = document.querySelectorAll('[data-faq-question]')

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreFecha)   
    }




    window.addEventListener('scroll', function(){

        const scrollAtual = window.scrollY

        if(scrollAtual > 850){
            show();
        }
        else{
            hide();
        }

    })

})

function show(){
    const personagens = document.querySelector('[data-personagem]')

    personagens.classList.add('personagens__content__list--is-visible')
}

function hide(){
    const personagens = document.querySelector('[data-personagem]')

    personagens.classList.remove('personagens__content__list--is-visible')
}

function abreFecha(elemento) {
    const classe = 'faq__list__item--is-open';  

    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}