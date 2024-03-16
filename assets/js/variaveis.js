let linkWhats = 'https://api.whatsapp.com/send?phone=+5569999927726&text=%2AOl%C3%A1+Mateus%2A%2C+_gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+seus+servi%C3%A7os._';

let images = [
    // {
    //     image: "1.jpg",
    //     titulo: "teclado",
    //     descricao: "teclado top"
    // },
    // {
    //     image: "2.jpg",
    //     titulo: "tela",
    //     descricao: "tela top"
    // },
    {
        image: "img.png",
        titulo: "Roblox 1",
        descricao: "Roblox  top"
    },
    {
        image: "img.png",
        titulo: "Roblox 2",
        descricao: "Roblox  top"
    },
    {
        image: "img.png",
        titulo: "Roblox 3",
        descricao: "Roblox  top"
    },
    {
        image: "img.png",
        titulo: "Roblox 4",
        descricao: "Roblox  top"
    },
];


let cardsServicos = [
    {
        "titulo": "Naming",
        "titulo2": "Nome da marca", 
        "descricao": "Desenvolvo nomes estratégicos e impactantes para marcas, criando uma identidade única e memorável.",
    },
    {
        "titulo": "Brading",
        "titulo2": "Estrategia de marca", 
        "descricao": "Desenvolvo nomes estratégicos e impactantes para marcas, criando uma identidade única e memorável.",
    },
    {
        "titulo": "Identidade visual",
        "titulo2": "Visual da marca", 
        "descricao": "Desenvolvo nomes estratégicos e impactantes para marcas, criando uma identidade única e memorável.",
    },
];

let servicos = [
    {
        "titulo": "Social Media",
        "descricao": 'Gerenciamento estratégico de postagens para redes sociais.'
    },
    {
        "titulo": "Web Design",
        "descricao": 'Criação de interfaces digitais atrativas e funcionais para websites.'
    },
    {
        "titulo": "Programação",
        "descricao": 'Soluções digitais personalizadas e programação de sistemas. (Full Stack)'
    },
    {
        "titulo": "Motion Design",
        "descricao": 'Animações e elementos visuais em movimento para vídeos e mídias digitais.'
    },
    {
        "titulo": "Tráfego Pago",
        "descricao": 'Anúncios de alta conversão utilizando plataformas como o facebook e Google.'
    },
    {
        "titulo": "3D Design",
        "descricao": 'Criação de elementos, mascotes, personagens e ambientes em três dimensões.'
    },
    {
        "titulo": "Ilustração",
        "descricao": 'Temos uma equipe completa e qualificada que vai impulsionar o seu negócio.'
    },
    {
        "titulo": "Diagramação",
        "descricao": 'Organização de elementos em peças gráficas, como revistas ou folhetos.'
    },
    {
        "titulo": "Edição de Vídeos",
        "descricao": 'Montagem de vídeos dinâmicos para conteúdos e intituições.'
    },
]; 


let fedbacks = [
    {
        "nome": "Matheus Staudinger",
        "profissao": 'Fisioterapeuta',
        "comentario": 'Se tem uma palavra que se encaixa no meu projeto feito pelo Jhonzzera, eu diria “impecável”. Conseguiu atingir os tópicos mais importantes que eu pedi, dando modernidade, autenticidade, e a responsabilidade que a marca traz, técnica apurada e objetividade. Trabalho impecável!'
    },
    {
        "nome": "Gisela Meireles",
        "profissao": 'Mentora e Infoprodutora',
        "comentario": 'Fiquei apaixonada pelo trabalho incrível do Jhonzzera! Ele mandou muito bem no projeto, criando uma identidade visual linda e funcional pra mim. Além disso, ele fez uma landing page e cuidou das minhas redes sociais, deixando tudo com uma cara profissional demais! Super recomendo, ele é top!'
    },
    {
        "nome": "Halisson Brito",
        "profissao": 'Advogado e Consultor Jurídico',
        "comentario": 'O Jhonzzera mandou muito bem em inovar minha marca no ramo do direito. Agora tô passando muito mais autoridade e confiança pros meus clientes, graças ao trampo dele.'
    },
]; 


let widgets = [
    {
        "titulo": "Como funciona o processo de contratação de serviços?",
        "descricao": 'Primeiro você precisa entrar em contato comigo e me explicar um pouco do seu negócio.<br>Eu vou analisar se há a possibilidade de te atender.<br>Caso sim, marcamos uma reunião e após obter as informações que preciso vou te enviar uma proposta com os valores e prazos detalhados.<br>Essa proposta já é um contrato com termos para assegurar ambas as partes.<br>Caso você aceite os valores e prazos estipulados você pode assinar e me enviar ou simplesmente responder o e-mail confirmando. 50% do valor total do projeto deve ser antecipado.<br>Esse pagamento serve como sinal para reservar a data estipulada no contrato.'
    },
    {
        "titulo": "Quais as formas de pagamento?",
        "descricao": 'O pagamento pode ser feito de 04 formas:<br>Pix, boleto, transferência e depósito.<br><br>50% antecipado e o restante na apresentação do projeto.<br>Parcelamentos no cartão de crédito em até 12x. (Juros a negociar)<br>'
    },
    {
        "titulo": "Qual o prazo médio para a entrega da apresentação do projeto?",
        "descricao": 'Um projeto de Identidade Visual costuma levar em torno de 30 dias, podendo ultrapassar esse prazo de acordo com a complexidade do projeto. É importante ressaltar que, caso eu já esteja desenvolvendo outros projetos, o seu irá entrar na fila, mas tudo isso será especificado na proposta.'
    },
    {
        "titulo": "Quais os formatos de arquivo você entrega?",
        "descricao": 'Os formatos entregues são:<br>EPS;<br>JPG;<br>PNG;<br>AI;<br>PSD.'
    },
    {
        "titulo": "Você cria apenas o logotipo?",
        "descricao": 'Não. Eu desenvolvo apenas o projeto de Identidade Visual completo. Desde o estudo da persona, do mercado, concorrentes, até a forma em que a marca será aplicada no mundo real e digital, criando a melhor experiência com o seu cliente.'
    },
    {
        "titulo": "Você entrega os materiais impressos?",
        "descricao": 'Não. Eu entrego apenas os projetos fechados para serem enviados para a gráfica de sua preferência.'
    },
    {
        "titulo": "Se eu já tiver o logotipo pronto, você faz apenas os materiais?",
        "descricao": 'Sim, eu desenvolvo os materiais, mas isso tambem necessita pesquisa e todo desenvolvimento de um projeto de identidade visual. O projeto vai ser criado do zero.'
    },
    
]; 