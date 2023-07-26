let btnInicio = document.querySelector('#btnInicio');
let btnSobre = document.querySelector('#btnSobre');
let btnPessoal = document.querySelector("#btnPessoal");
let btnCurso = document.querySelector('#btnCurso');
let inicio = document.querySelector(".header");
let sobre = document.querySelector("#sobre");
let pessoal = document.querySelector("#pessoal");
let cursos = document.querySelector('#cursos')

function scrollToElement(element) {
    window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop
    });
}

btnInicio.addEventListener('click', () => {
    scrollToElement(inicio);
})

btnSobre.addEventListener("click", () => {
    scrollToElement(sobre);
})

btnPessoal.addEventListener("click", () => {
    scrollToElement(pessoal);
})

btnCurso.addEventListener('click', () => {
    scrollToElement(cursos);
})


const item = document.querySelectorAll("[data-anime]");

animeScroll = () => {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4)

    item.forEach((e) => {
        if(windowTop > e.offsetTop){
            e.classList.add("animation");
        }
    })
}


window.addEventListener("scroll", () => {
    animeScroll();
})