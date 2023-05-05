//ANIMAÇÃO MAQUINA DE ESCREVER//
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i) => {
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            },140 * i)
            
        });
    
    }
    const tituto = document.querySelector('.digitando');
    ativaLetra(tituto);
}


//MENU RESPONSIVO//
const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .nav-primaria')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})


//SCROL REVEAL//
window.sr = ScrollReveal({reset: true});

sr.reveal('.section-div', {duration: 2000});
sr.reveal('.sobre_rev', {duration: 2000});
sr.reveal('.experiencas', {duration: 2000});
sr.reveal('.minhas_experiencas', {duration: 2000});
sr.reveal('.projetos', {duration: 2000});
sr.reveal('.contato', {duration: 2000});



//SCROLL MENU//
const menuLinks = document.querySelectorAll('.menus a');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop, behavior: "smooth",
    })
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target);
    nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

