document.addEventListener('DOMContentLoaded', function () {
    $(window).on('load', function() {
        $('#loading').fadeOut('slow', function() {
          $('#root').fadeIn('slow');
        });
    });

    window.onscroll = async function () {
        // await new Promise(r => setTimeout(r, 700));
        verificarPosicao();
        animacao();
    }
    criaCarrosel();
    criaCards();
    criaServicos();
    addScalaCard();
    criaFedbeek();
    clickSeta();
    criaWidget();
    clickSetaWidget();
    criaCircles();
    alternarPosicao();
})

function criaCarrosel() {
    let htmlImage = "";
    for (let i = 0; i < images.length; i++) {
        htmlImage += `<li class="splide__slide"><img src="./assets/img/${images[i].image}"><div titulo="${images[i].titulo}" descricao="${images[i].descricao}"></div></li>\n`;
    }
    $('#carouselImage').html(`<div class="splide w-60 " role="group" aria-label="Splide Basic HTML Example"><div class="splide__track"><ul class="splide__list">${htmlImage}</ul></div></div>`)

    let splide = new Splide('.splide', {
        type: larguraWindow < 767 ? 'fade' : 'loop',
        rewind: larguraWindow < 767 ? true : false,
        padding: '8rem',
        height: '25rem',
        gap: '1.6rem',
        breakpoints: {
            1198: {
                height: '20rem'
            },
            991: {
                height: '17rem',
                gap: '0.6rem'
            },
            767: {
                height: '15rem',
                perPage: 1,
                padding: '0',
                height: 'unset'
            }
        },

    });
    splide.mount();
    $('#descricaoCarrosel').text(images[0].descricao);
    $('#tituloCarrosel').text(images[0].titulo);
    splide.on('moved', function (newIndex) {
        const slides = splide.Components.Elements.slides;
        const currentSlide = slides[newIndex];
        const texto = $(currentSlide).find('div');
        const titulo = texto.attr('titulo');
        const descricao = texto.attr('descricao')
        $('#descricaoCarrosel').text(descricao);
        $('#tituloCarrosel').text(titulo);
    });
}
function animateText() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["autêntica.", "forte.", "memorável."];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
}


function verificarPosicao() {
    const sections = document.querySelectorAll('.js-section');
    sections.forEach(item => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalfSize) < 0;
        if (isSectionVisible) {
            $('.nav-item').each((i, el) => ($(el).children().removeClass('active')));
            $(`[rota='${item.id}']`).addClass('active');

        }
    })

}
function animacao() {
    const sections = document.querySelectorAll('.animation-section');
    sections.forEach(item => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalfSize) < 0;
        if (isSectionVisible) {
            item.classList.add('animation-section--active')
        } else {
            item.classList.remove('animation-section--active')
        }
    })

}

function criaCards() {
    let exec = 0;
    let html = '';
    for (let i = 0; i < cardsServicos.length; i++) {
        exec++;
        let animacao = exec === 1 ? "animation-section-direita" : (exec === 2 ? "animation-section-top" : "animation-section-esquerda");
        html += `<div class="col-sm-6 w-100 scale-card"><div class="card fundo-gray box"><span></span><div class="card-body animation-section ${animacao} justify-content-between "><div class="header-card d-flex align-items-start  pb-5 gap-4 "><div class="bolha-shadow"></div><div class="textHeader"><h5><span class="gradient-text">${cardsServicos[i].titulo}</span></h5><p>${cardsServicos[i].titulo2}</p></div></div><p class="card-text gray">${cardsServicos[i].descricao}</p></div></div></div>\n`;
        if (exec === 3) {
            exec = 0;
        }
    }

    document.querySelector("#card-servicos").innerHTML = html;
}



function addScalaCard() {
    let cardsScala = document.querySelectorAll('.scale-card');
    cardsScala.forEach(e => {
        e.addEventListener("mouseover", () => {
            cardsScala.forEach(outherE => {
                if (outherE !== e) {
                    outherE.classList.add('blur-div');
                }
            });
            e.classList.add('scale');
        });
    
        e.addEventListener("mouseout", () => {
            cardsScala.forEach(outherE => {
                outherE.classList.remove('blur-div');
            });
    
            e.classList.remove('scale');
        })
    
    });
}


function clickSeta() {
    const setas = document.querySelectorAll('.seta');

    for (let i = 0; i < setas.length; i++) {
        let seta = setas[i];

        seta.onclick = function(e) {
            let seta = e.target;
            let setaClass = seta.className.match(/fa-arrow-down/) ? "fa-arrow-up" : "fa-arrow-down";
            seta.classList.remove(setaClass === "fa-arrow-up" ? "fa-arrow-down" : "fa-arrow-up");
            seta.classList.add(setaClass);
            let el = e.target.parentNode.parentNode.querySelector('.overflow-hidden');
            let obj = setaClass === "fa-arrow-up" ? "remove" : "add"
            el.classList[obj]('texto-escondido');
        }
    }
}


function clickSetaWidget() {
    const setas = document.querySelectorAll('.widget');

    for (let i = 0; i < setas.length; i++) {
        let seta = setas[i];

        seta.onclick = function(e) {
            let seta = e.target;
            seta?.querySelector('i')?.classList.toggle('rodar-seta') ?? seta.parentNode.parentNode.querySelector('i').classList.toggle('rodar-seta')
            let el = seta?.querySelector('div > p') ?? (seta?.nextElementSibling ?? seta);
            el.classList.toggle('activeP');
        }
    }
}
function criaServicos() {
    let elementos = '';
    for (let i = 0; i < servicos.length; i++) {
        elementos += `<div class="container-adicionais"><div class="header-adicionais d-flex align-items-center gap-3 "><i class="fa fa-arrow-down text-white seta"></i><h5 class="m-0 "><span class="gradient-text">${servicos[i].titulo}:</span></h5></div><div class="overflow-hidden texto-escondido " style="/*transition: 1s;*/"><p class="card-text gray pt-2 pb-2 ml-2 ">${servicos[i].descricao}</p></div></div>\n`;
    }
    let html = `<div class="col-sm-6 w-100" style="flex: 0 0 auto !important"><div class="card fundo-gray box box-large"><span></span><div class="card-body d-flex flex-column gap-2 " style="height: unset;">${elementos}</div></div></div>`;
    document.querySelector("#servicos-adicionais").innerHTML = html;
}

function apareceCard(id, el) {
    let e = document.querySelector(id);
    let icon = el?.querySelector('i');
    e.className.match(/escondido/) ? e.classList.remove('escondido') : e.classList.add('escondido');
    icon?.className?.match(/fa-arrow-down/) ? $(icon).removeClass('fa-arrow-down').addClass('fa-arrow-up') : $(icon).removeClass('fa-arrow-up').addClass('fa-arrow-down');
}

function criaFedbeek() {
    exec = 0;
    let html = '';
    for (let i = 0; i < fedbacks.length; i++) {
        exec++;
        let animacao = exec === 1 ? "animation-section-direita" : "animation-section-esquerda";
        html += `<div class="position-relative"><div class="col-sm-6 w-100 overflow-hidden "><div class="card fundo-gray animation-section ${animacao}"><div class="card-body  flex-row align-items-center "><div class="header-card d-flex align-items-start  pb-5 gap-4 "><div class="bolha-shadow"></div></div><div class="textHeader"><h5><span class="gradient-text">${fedbacks[i].nome}</span></h5><p>${fedbacks[i].profissao}</p><p class="card-text gray">${fedbacks[i].comentario}</p></div></div></div></div></div>\n`;
        if (exec === 2) {
            exec = 0;
        }
    
    }
    document.querySelector("#card-feedback").innerHTML = html;
    
}

function criaWidget() {
    let html = '';
    for (let i = 0; i < widgets.length; i++) {
        html += `<div class="widget d-flex justify-content-between  fundo-gray p-4 mt-2 " style="border-radius: 0.5rem;"><div><h5 class="text-white ">${widgets[i].titulo}</h5><p class="p-0 m-0 gray">${widgets[i].descricao}</p></div><i class="fa fa-arrow-down text-white z-n1 "></i></div>\n`;
    }
    document.querySelector("#widgets").innerHTML = html;

}

function criaCircles() {
    document.querySelector('.container-circle').innerHTML = '<div class="circles"><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>';
}

function alternarPosicao() {
    var divs = document.querySelectorAll('#card-feedback > div');
    var posicao = 'right';
    
    divs.forEach(function(div, index) {
    //   div.style.float = posicao;
    //   posicao = (posicao === 'left') ? 'right' : 'left';
    div.classList.toggle('left', index % 2 === 0); // Adiciona a classe 'left' para índices pares
    div.classList.toggle('right', index % 2 !== 0);
    });
  }