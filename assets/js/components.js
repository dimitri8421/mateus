class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let width = this.getAttribute('width') ?? "75.7%";
        let position = this.getAttribute('position') ?? "fixed";
        const ano = new Date().getFullYear();
        this.innerHTML = `
            <style>
                @font-face {
                    font-family: 'Almarai';
                    font-style: normal;
                    font-weight: 400;
                    src: url(https://fonts.gstatic.com/s/almarai/v12/tsstApxBaigK_hnnQ1iFow.woff2) format('woff2');
                    unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0898-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                @font-face {
                    font-family: 'Allison';
                    font-style: normal;
                    font-weight: 400;
                    src: url(https://fonts.gstatic.com/s/allison/v11/X7nl4b88AP2nkbvZCCGa4Q.woff2) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                
                footer {
                    padding-top: 2rem;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1;
                }
                
                footer>#containerFooter {
                    padding: 2rem 0;
                    background: #202020;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    font-family: Almarai;
                }
                
                .socialNetwork {
                    display: flex;
                    gap: 1rem;
                }
                
                .socialNetwork a>svg {
                    height: 3rem;
                    width: 3rem;
                }
                
                .space-little {
                    padding-top: 1rem;
                }
                
                .gray {
                    color: #c1bdbd;
                }
                
                #containerFooter  span {
                    font-family: Allison;
                    font-size: 1.8rem;
                }
                .subject {
                    display: flex;
                    justify-content: center;
                    align-items: baseline;
                
                }
                @media (max-width: 575px) {
                    .socialNetwork a>svg {
                        height: 2rem;
                        width: 2rem;
                    }
                    .subject {
                        flex-direction: column;
                    }
                }
            </style>

            <footer>
                <div id="containerFooter">
                    <div class="socialNetwork">
                        <a href="https://www.linkedin.com/in/william-patrick-412744256/" target="_blank">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.9685" cy="15.5522" r="14.5" stroke="#32F845" />
                                <path
                                    d="M12.9309 20.2949H10.6503V12.9509H12.9309V20.2949ZM11.7894 11.9492C11.0601 11.9492 10.4686 11.3451 10.4686 10.6159C10.4686 10.2656 10.6078 9.92969 10.8555 9.682C11.1031 9.43431 11.4391 9.29517 11.7894 9.29517C12.1396 9.29517 12.4756 9.43431 12.7233 9.682C12.971 9.92969 13.1101 10.2656 13.1101 10.6159C13.1101 11.3451 12.5184 11.9492 11.7894 11.9492ZM21.4662 20.2949H19.1905V16.7199C19.1905 15.8679 19.1734 14.7753 18.0049 14.7753C16.8192 14.7753 16.6375 15.7009 16.6375 16.6585V20.2949H14.3594V12.9509H16.5466V13.9527H16.5785C16.883 13.3757 17.6267 12.7668 18.7363 12.7668C21.0443 12.7668 21.4686 14.2867 21.4686 16.2608V20.2949H21.4662Z"
                                    fill="#32F845" />
                            </svg>
                        </a>
                        <a href="mailto:devwilliampatrick@gmail.com" target="_blank">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15.0315" cy="15.2888" r="14.5" stroke="#32F845" />
                                <path
                                    d="M19.6982 9.52539H10.3649C9.83444 9.52539 9.32573 9.7361 8.95065 10.1112C8.57558 10.4862 8.36487 10.995 8.36487 11.5254V18.1921C8.36487 18.7225 8.57558 19.2312 8.95065 19.6063C9.32573 19.9813 9.83444 20.1921 10.3649 20.1921H19.6982C20.2286 20.1921 20.7373 19.9813 21.1124 19.6063C21.4875 19.2312 21.6982 18.7225 21.6982 18.1921V11.5254C21.6982 10.995 21.4875 10.4862 21.1124 10.1112C20.7373 9.7361 20.2286 9.52539 19.6982 9.52539ZM19.2515 10.8587L15.0315 14.0254L10.8115 10.8587H19.2515ZM19.6982 18.8587H10.3649C10.1881 18.8587 10.0185 18.7885 9.89346 18.6635C9.76844 18.5384 9.6982 18.3689 9.6982 18.1921V11.6921L14.6315 15.3921C14.7469 15.4786 14.8873 15.5254 15.0315 15.5254C15.1758 15.5254 15.3161 15.4786 15.4315 15.3921L20.3649 11.6921V18.1921C20.3649 18.3689 20.2946 18.5384 20.1696 18.6635C20.0446 18.7885 19.875 18.8587 19.6982 18.8587Z"
                                    fill="#32F845" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/patrickfranca.dev/" target="_blank"><svg width="30" height="30"
                                viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_209_11)">
                                    <path
                                        d="M12.5088 9.09839H17.6269C19.5767 9.09839 21.1608 10.6692 21.1608 12.6024V17.6772C21.1608 18.6065 20.7885 19.4978 20.1258 20.1549C19.463 20.812 18.5642 21.1812 17.6269 21.1812H12.5088C10.559 21.1812 8.97485 19.6104 8.97485 17.6772V12.6024C8.97485 11.6731 9.34718 10.7818 10.0099 10.1247C10.6727 9.46756 11.5715 9.09839 12.5088 9.09839ZM12.3869 10.3067C11.8052 10.3067 11.2473 10.5358 10.8359 10.9437C10.4245 11.3516 10.1935 11.9048 10.1935 12.4816V17.798C10.1935 19.0002 11.1744 19.9729 12.3869 19.9729H17.7488C18.3305 19.9729 18.8884 19.7438 19.2998 19.3359C19.7111 18.928 19.9422 18.3748 19.9422 17.798V12.4816C19.9422 11.2793 18.9613 10.3067 17.7488 10.3067H12.3869ZM18.2667 11.2129C18.4687 11.2129 18.6624 11.2924 18.8052 11.4341C18.948 11.5757 19.0283 11.7678 19.0283 11.9681C19.0283 12.1683 18.948 12.3604 18.8052 12.502C18.6624 12.6437 18.4687 12.7232 18.2667 12.7232C18.0647 12.7232 17.8709 12.6437 17.7281 12.502C17.5853 12.3604 17.505 12.1683 17.505 11.9681C17.505 11.7678 17.5853 11.5757 17.7281 11.4341C17.8709 11.2924 18.0647 11.2129 18.2667 11.2129ZM15.0678 12.1191C15.8758 12.1191 16.6507 12.4373 17.222 13.0038C17.7934 13.5703 18.1143 14.3387 18.1143 15.1398C18.1143 15.9409 17.7934 16.7093 17.222 17.2757C16.6507 17.8422 15.8758 18.1605 15.0678 18.1605C14.2599 18.1605 13.485 17.8422 12.9136 17.2757C12.3423 16.7093 12.0213 15.9409 12.0213 15.1398C12.0213 14.3387 12.3423 13.5703 12.9136 13.0038C13.485 12.4373 14.2599 12.1191 15.0678 12.1191ZM15.0678 13.3274C14.5831 13.3274 14.1181 13.5183 13.7753 13.8582C13.4325 14.1981 13.2399 14.6591 13.2399 15.1398C13.2399 15.6205 13.4325 16.0815 13.7753 16.4214C14.1181 16.7613 14.5831 16.9522 15.0678 16.9522C15.5526 16.9522 16.0176 16.7613 16.3604 16.4214C16.7032 16.0815 16.8957 15.6205 16.8957 15.1398C16.8957 14.6591 16.7032 14.1981 16.3604 13.8582C16.0176 13.5183 15.5526 13.3274 15.0678 13.3274Z"
                                        fill="#32F845" />
                                </g>
                                <circle cx="15" cy="15" r="14.5" stroke="#32F845" />
                                <defs>
                                    <clipPath id="clip0_209_11">
                                        <rect width="13" height="13" fill="white" transform="translate(8 8)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                    </div>

                    <div class="subject space-little">
                        <div class="gray ">© ${ano}&nbsp;&nbsp
                            <span style="color: #FFFFFF">William </span>
                            <span style="color: #32F845;">Patrick</span>.
                        </div>
                        <div class="gray"> Todos os direitos reservados</div>
                    </div>


                </div>


            </footer>
        
        `


    }
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-transparent rounded navbar-dark fixed-top  blur container ">
                <div class="container-fluid">
                    <div class="navbar-brand" href="#"><img src="/assets/img/logo-white.png" alt="logo" id="logo"></div>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse d-lg-flex " id="navbarsExample11">
                        <a class="navbar-brand col-lg-3 me-0" href="#"></a>
                        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                            <li class="nav-item ">
                                <a class="nav-link mx-2" rota="portfolio" href="#portfolio">Portfólio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 " rota="servico" href="#servico">Serviços</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 " rota="quem" href="#quem">Sobre min</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 " rota="fedback" href="#fedback">Feedbacks</a>
                            </li>
                        </ul>
                        <div class="d-lg-flex col-lg-3 justify-content-lg-end ">
                            <a href="https://www.instagram.com/eu.mateusdesign" target="_blank">
                                <i class="fa fa-instagram text-white mx-2 lead"></i>
                            </a>
                            <a href="https://www.behance.net/matguedes" target="_blank">
                                <i class="fa fa-behance text-white mx-2 lead"></i>
                            </a>
                            <a href="${linkWhats}" target="_blank">
                                <i class="fa fa-whatsapp text-white mx-2 lead"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </nav>
        `;
    }
}
customElements.define('footer-component', Footer);
customElements.define('navbar-component', Navbar);
$(document).ready(()=> {
    $('[url-image]').each((i, e) => {
        let el = $(e);
        let url = el.attr('url-image');
        let tamanho = el?.attr('height-image') || "100%";
        let largura = el?.attr('width-image') || "100%";
        el.css({
            'background': `url(${url})`,
            'width': largura,
            'height': tamanho,
            'background-size': 'contain',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
        })
    });
    $('[data-cor]').each((i, e) => {
        const el = $(e);
        el.css({'background': el.data('cor'), 'z-index': -1, 'position': 'relative'});
    });

    $('.button-animado').each((i, e) => {
        e?.href === "" ? e.href = linkWhats: "";
    });
})
