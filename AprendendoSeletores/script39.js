// //console.log("teste");
// const animaisSection = document.getElementById("animais");
// //console.log(animais.innerText);
// // getElementbyid cata o elemento com base no id. Para funcionar o script precisou estar lá no fundo antes só do fim do body.
// //const animaisSection = document.getElementById("animais");
// //Cria uma constante chamada section aqui ele fala com o metodo documentos -logo um método e o valor que vc passa é o id
// //console.log(animais.innerText);
// //acessa só o texto que está dentro de animais.

// const contatoSection = document.getElementById("contato");
// //console.log(contato);

// // não precisei nem dar o exemplo do null pq ele não abriu de primira e deu null

// // Também podemos selecionar por classes ou por Tags. A estrutura é a mesma só troca o id pelos outros nomes e o s do element indica que é mais um elemento.
// // Tbm podemos adicionar mais uma classe é só colocar do lado não precisa nem de ,
// const gridSection = document.getElementsByClassName("grid-section");
// // criou a chamada constante grid section com tds as grid section dentro
// console.log(gridSection);
// console.log(gridSection.length);
// console.log(gridSection[0]);
// //camou o primeiro item que tem o id como animais antes puxou pelo tamanho

// // Usamos mais o query pq ele retorna o primeiro elemento que estiver de acordo com o css. Aqui vc seleciona da mesma forma que faria no css usando . para classe o # para puxar o id last child para pegar o ultimo li no animais lista. Td item hf que começar com https:// ou tag ul. Em todos abaixo ele usou isso como o metodo de document
// const animais = document.querySelector(".animais");
// //classe
// const contato = document.querySelector("#contato");
// //id
// const ultimoItem = document.querySelector(".animais-lista li:last-child");
// //pega o ultimo item da li dentro do animais lista
// const linkCSS = document.querySelector('[href^="https://"]');
// //Td item hf que começar com https://
// const primeiroUl = document.querySelector("ul");

// // Abaixo deixou de usar o metodo de document e está usando um metodo que xiste dentro da propria seleção
// const navItem = primeiroUl.querySelector("li");
// //substituiu o document que faz uma pegada geral do site por uma seleção específica, ou seja vira uma propriedade do objeto primeiro ul

// // Depois criou uma constante que será usada como objeto da seleçção da primeira li e da primeira ul
// const primeiraLi = document.querySelector("li");
// console.log(primeiraLi);

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

// // Para o primeiro link interno viu que todos começavam com # com o href como atributo. What out!! O query selector retorna apenas o primeiro e não uma lista. O que diz o começa com é o acento.

// const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);
// //O que vai trazer a possibilidade de usar propriedades como
// console.log(linkInterno.href);

// // o all puxa justamente tds os que tiverem dentro ali do item que vc está chamando. COmo exemplo ele pegou todas as imgs que estão dentro de animais
// const animaisImg = document.querySelectorAll(".animais img");
// console.log(animaisImg);
// //retorna os resultados na forma dessa lista node que parece um array com metodos e propriedades do html colection mas tem outras opções.
// //Esse método animaisImg é estatico ainda que eu mude o animais img selecionado anteriormente é o que vale. O get by class ou tag consegue atualizar. Quando ele seleciona assim pega tds que são os dois o animais e tbm img.
// console.log(animaisImg[1]);
// // Esse 1 chama o segundo item da lista já que começa do zero-não esqueça.
// //Resolveu falar das diferenças entre html colection e node list e focou nos métodos que poderão ser usados.A node list tem mais métodos.

// //Retorne no console tds as imagens do site
// // const todasAsImagens = document.querySelectorAll("img");
// // console.log(todasAsImagens);
// //Retorne só as img que começam com a palavra imagem
// const imagemQueComecaComImagem = document.querySelectorAll(
//   'img[src^="img/imagem"]'
// );
// console.log(imagemQueComecaComImagem);
// //Selecione tds os links internos onde href começa com #
// const linkInternos = document.querySelector('[href^="#"]');
// console.log(linkInternos);
// //selecione o primeiro h2 dentro de .animais-descricao
// const primeiroH2 = document.querySelector("h2");
// //tbm retornaria se no lugar de h2 tivesse .animais-descricao  h2
// console.log(primeiroH2);
// //Selecione o ultimo p do site
// const ultimoPDoSite = document.querySelector(".copy p:last-child");
// console.log(ultimoPDoSite);
//Para modificar cada item falaremos com td a lista, assim podemos add classe e fazer alterações em bloco
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item){console.log(item);});
//o callback é o neme dessa função que vai ser ativada em cada item-lembra?as opções de parametro sõ valor atual, index e array
//Abaixo td que está no for each é o primeiro parametro dele o index, valorAtual e o array tbm são parametros mas dessa vez da função de callback
// const imgs = document.querySelectorAll("img");
// imgs.forEach(function (valorAtual, index, array) {
//   console.log(valorAtual);
//   console.log(index);
//   console.log(array);
// });
// //O valor atual exibe o atual do loop, o index o proprio index e o array td a lista. Esses são parametros padrões que vc pode usar. Lembrando que no item pode ser qualquer coisa.
// //Para cada imagem ele roda e conta:
// let i = 0;
// imgs.forEach(function () {
//   console.log(i++);
// });

//No próximo exemplo ele pega o html collection para transformar em um array para poder usar o foreach
// const titulos = document.getElementsByClassName("titulo");
// //Esse byclassname retorna o html colection que não tem for each
// const titulosArray = Array.from(titulos);
// //Aqui ele transforma
// titulosArray.forEach(function (item) {
//   console.log(item);
// });
// //Sintaxe nova e mais curta essa arrow function: Tira o function e coloca => antes do {.
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item) => {
//   console.log(item);
// })

//E ainda tem menos-com um argumento só não precisa nem do parentese, com mais de um vai precisar poderia ser assim:
// imgs.forEach(item => {
//   console.log(item);
// })
//No caso de não ter nenhum argumento vc põe o parentese vazio:
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach((item, index) => {
//   console.log(item);
//   console.log(index);
// })

//E mais hehe-quando vc só tem uma linha de código não precisa das {s.
//imgs.forEach(item => console.log(item)-não pode o ; sem{ )
//E saiu disso:
//imgs.forEach(function (item) {
//   console.log(item);
// });

//Mostre no console kd paragrafo do site:
//Mostre o texto dos parágrafos:
// const paragrafos = document.getElementsByTagName("p");
// //console.log(paragrafos); ou
// const paragrafostemQueTerOutroNomeParaTransformar = Array.from(paragrafos);
// paragrafostemQueTerOutroNomeParaTransformar.forEach(function (item) {
//   console.log(item);
// });
// paragrafostemQueTerOutroNomeParaTransformar.forEach(function (item) {
//   console.log(item.innerText);
//});
//O innertext é uma propriedade padrão que podemos usar para exibir o texto.

//Para fazer operações com a classe toda dá para fazer como propriedade, não esquecendo que só da para fazer isso com node se for html list tem que transformar.

// const menu = document.querySelectorAll('.menu');
// const menu2= Array.from(menu);
// //console.log(menu); //escrevendo para exibir vc evita bug.

// menu2.forEach(function(item) {
//   console.log(item);
//   }); Não faz sentido fazer for each se vc só selecionou um elemento -o primeiro

// const menu = document.querySelector('.menu');
// menu.className; //retorna uma string
// console.log(menu.classList); //chama as classes e exibe
// console.log(menu.className); //retorna uma string com a lista de classes
// console.log(menu.classList[0]);//como é array like pode pedir para ele exibir assim- caso ponha 2 que seria a segunda classe ele dá undefined pq só tem uma.
// //Sendo um objeto com várias propriedades vc põe . e segue o baile. Na hora de fazer operações não usa console.log escreve direto pq ele não aceita.

// menu.classList.add ('ativo');
// //Pode inclusive criar funções
// if(menu.classList.contains('azul')) {
//   menu.classList.add ('possui-azul');
// } else {
//   menu.classList.add('nao-possui-azul');
// }

// menu.classList.add ('ativo'); //Adiciona a classe
// menu.classList.add('ativo', 'mobile'); //... dessa vez duas não esquece da ,
// menu.classList.remove('ativo'); //remove a classe
// menu.classList.toggle('ativo'); //faz o oposto ou cria ou remove a classe
// //menu.classList.contains('ativo'); //diz se tem ou não
// menu.classList.replace('ativo', 'inativo'); //troca a primeira pela segunda

//Por mais estranho que parece vc pode mudar o valor atribuido a uma certa propriedade
// //menu.className = '22' ao habilitar esse comando ele sai da classe menu e vai para a 22 pq agora o class name do menu é 22
// //menu.className += 'vermelho'; é o mesmo que menu.className = menu.className + ' vermelho';

// const animais = document.querySelector('.animais');
// console.log(animais.attributes);
// console.log(animais.attributes[1]);
// //namedNode map é outro tipo de item parece mais com o objeto do que com array mas é array like
// //caso vc tente passar o atributo data-texto não vai conseguir pq ele não aceita hífen-vc sai disso:
//console.log(animais.attributes.data-texto);
//para isso:
//console.log(animais.attributes['data-texto']);
//ou:
//console.log(animais.attributes[2]);

//O get atribute e o setatributte são métodos(funções) que retornam ou definem de acordo com o atributo selecionado. é para mexer dentro dos atributos da classe ou id selecionada.
// const img = document.querySelector("img");
// console.log(img); //ipc vc confirmar se selecionou certo
// console.log(img.getAttribute("src")); //coloco ali o atributo que eu quero ver
// console.log(img.hasAttribute("id"));
// img.setAttribute("alt", "Texto Alternativo"); //Troca o texto do alt e tbm adiciona caso não tenha nada-não vê se tem no html então cuidado
// img.hasAttribute("id"); //diz se tem ou não o tributo do parenteses
// img.removeAttribute("alt"); //remove
// //img.hasAttributes(o que quer saber); //diz se tem ou não
// const possuiAlt = img.hasAttribute("alt");
// console.log(possuiAlt);
// //Ele cria um objeto que exibe o atributo que ele quer mostrar

//Existem algumas propriedade que só podem ser lidas chama read only. Ele dá como exemplo o classname e o attributes que são propriedades do objeto animal.
// const animais = document.querySelector('.animais');
// console.log (animais.className); //vc coloca o console justamente pq quer ver a string com o nome das classes
// animais.className = 'azul'; propriedade vindo definida por padrão vc pode mudar o valor dela objeto.propriedade = ' novo valor'
// console.log (animais.className); //o .classname= substitui td a string do class name de cima
// animais.className += ' vermelho'; //adiciona o vermelho na string dps pedi para exibir. Para incluir o azul separado do vermelho o espaço vai dentro do '.
// console.log (animais.className);
// animais.attributes = 'class="ativo"'; //não funciona é read only ele demonstra isso aqui pq em teoria mesmo a propriedade vindo definida por padrão vc pode mudar o valor dela objeto.propriedade = ' novo valor'

// const carro = {
//   portas: 4,
//   andar: function (km){
//     console.log(`Carro andou ${km}`);
//   }
// }
// console.log(carro); //vem td que está no carro
// console.log(carro.andar);//exibe a propriedade andar do objeto
// console.log(carro.andar(32));
// console.log(carro.portas);
// carro.portas = 20;
// console.log(carro.portas);
// //é possivel transformar uma propriedade que não é só leitura em só leitura

// //Adicione a classe ativo a tds os itens do menu
// const menui = document.querySelectorAll(".menu a"); //eu quero que ele vá lá no menu e fale com tds os a.
// console.log(menui);
// //menui.className += ' vermelho';// está errado pq tem que usar o for each
// menui.forEach((item) => {
//   item.classList.add("ativo");
// });
// //Para saber se deu certo abre cada uma a e vc verá a classe.

// //Remove a classe ativo de todos os itens do menu e mantém apenas no primeiro
// //vc remove td entra no itens menu que é uma array fala com o zero e coloca a classe ativo nele.
// menui.forEach((item) => {
//   item.classList.remove("ativo");
// });
// menui[0].classList.add("ativo");
// //Verifica se as imagens possuem o tributo alt
// const img = document.querySelectorAll("img");
// img.forEach((img) => {
//   const possuiAtributo = img.hasAttribute("alt");
//   console.log(possuiAtributo);
// });
// //Modifique o href do link externo no menu
// //para modificar o atributo usa o set o primeiro valor que vc passa é o que vc quer modificar e o segundo é o novo valor que eu quero dar.
// const link = document.querySelector('a[href^="http"]');
// link.setAttribute("href", "https://www.google.com/");
// console.log(link);
// 0305;

//Nessa parte de posicionamento é importante pegar a altura e largura dos elementos pq só dps vc consegue alterar e deixar como vc quer. Abaixo estão as propriedades de element e html element a maioria só leitura(ready only).

// const section = document.querySelector(".animais");
// console.log(section.clientHeight); //exibe a altura e o padding
// console.log(section.offsetHeight); //height, padding e border
// console.log(section.scrollHeight); //height total mesmo dentro do scrool
// //Para a largura o mesmo com width na propriedade
// console.log(section.clientWidth); //exibe a altura e o padding
// console.log(section.offsetWidth); //height, padding e border
// console.log(section.scrollWidth); //height total mesmo dentro do scrool
// //exemplo da distancia entre o topo do elemento e o topo da pagina:
// console.log(section.offsetTop);
// //exemplo da distancia entre o topo esquerdo do elemento e o topo da pagina:
// console.log(section.offsetLeft);
// A propriedade getboundingcleintrect retorna algumas distancias
// const usando = document.querySelector(".animais");
// const h = usando.getBoundingClientRect(); //É como se ele criasse um retangulo e calculado os tamanhos
// console.log(h);
// if (h.top < 0) {
//   console.log("passou do elemento");
// } //usou propriedade para criar condicionais e fazer comunicados
// // vc está esquecendo que pode pedir para ele exibir vários:
// console.log(
//   window.innerWidth, //diz a largura
//   window.outerWidth, //diz a altura da janela, soma a barra de endereço
//   window.pageXOffset, //quanto desceu a pag no eixo x e a outra no y
//   window.pageYOffset //vc desce/sobe e atualiza que ele calcula
// );
// //Outro exemplo que dessa vez verifica se a tela do usuario é menor que 600px
// if (window.innerWidth < 600) {
//   console.log("Tela pequena");
// }
// //para ver se a largura se adequa usa esse media querry
// const small = window.matchMedia("max-width:600px");
// if (small.matches) {
//   console.log("tela menor");
// } else {
//   console.log("tela maior");
// }
// //esse match é uma propriedade
// console.log(small); // é um objjeto conforme vc modifica o tamanho da tela esse objeto small vai de true p false e vice versa

// // Verifique a distância da primeira imagem
// // em relação ao topo da página:
// const primeiraImagem = document.querySelector("#teste li a");
// console.log(primeiraImagem);
// const topo = primeiraImagem.offsetTop;
// console.log(topo);
// // Retorne a soma da largura de todas as imagens-o offset width conta o tamanho da borda tbm. Se vc não dá tamanho fixo para imagem ele só sabe o tamanho dps da imagem. Para que o java espere vc add propriedade como função de callback que segura td p isso não dar erro. Assim ele só ativa o somaimagem dentro do onload. soma = 0 mais o offset width do primeiro item no proximo a variavel soma já mudou e tem valor atualizado.
// //frogge- jogo para aprender posicionamento
// function somaImagens() {
//   const imagens = document.querySelectorAll("img");
//   let soma = 0 //cria uma variável para fazer a soma
//   imagens.forEach((imagem) => {
//     soma = soma + imagem.offsetWidth;
//     //=soma += imagem.offsetwidth;
//     //console.log(imagem.offsetWidth);
//   });
//   console.log(soma);
// }
// window.onload = function () {
//   //aqui vai o código que vc quer q funcione só dps de td carregar
//   somaImagens();
// };

// // Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll('a');
// console.log(links);
// links.forEach((link) => {
//   if (links.offsetWidth && links.offsetHeight >= 48) {console.log('possui');
// } else {
//   console.log('não possui');
// }
// })

// // Se o browser for menor que 720px,para isso usa o media querry
// // adicione a classe menu-mobile ao menu. Usa o media querry cria uma seleção do primeiro item do menu e dps com a propriedade do objeto cria a classe
// const browserSmall = window.matchMedia("(max-width: 720px)").matches; //até 720 ele dá verdadeiro
// if (browserSmall) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu-mobile");
// }

//Eventos são ótimos para gerar movimentação na página
//A estrutura é elemntoque selecionou.addEventListener('evento', nome da função que está fora ou function anonima o que quer() {;}, terceiro parâmetro). Tem algumas já prontas e o legal é que vc pode criar a função sobre e dps colocar só o nome. O terceiro é opcional
//Para começar vc seleciona o que quer add o evento
//const img = document.querySelector('img');
//img.addEventListener('click', function () {console.log('oi');});
//Pode tbm sempre usar a arrow function
//img.addeventListener('click', () => {;});
//Cuidado! não pode add a função ativando ou seja com os () quando vc cria ela fora:
//img.addEventListener('click', clique()); assim não pode
//Assim pode:
// const img = document.querySelector('img');
// function oi () {
//   console.log('oi');
// }
// img.addEventListener('click', oi);
//e como arrow function tbm pode:
// const img = document.querySelector('img');
// img.addEventListener('click', () => {console.log('opção menor');});

//O addevent listener se aplica a um único elemento, logo se c quiser aplicar em vários tem que fazer um loop desse evento dentro da lista. Eu crio primeiro a função e dps faço um for each do que eu criei.
// //selecione tds as imagens:
// const imgs = document.querySelectorAll("img");
// //cria a função que vc quer
// //A estrutura é elemento que selecionou.addEventListener('evento', nome da função que está fora ou function anonima o que quer() {;}, terceiro parâmetro).
// function clicar(event) {
//   console.log('azul');
// }
// //crie um loop com a função-denntro do for each que vai o addevent listener!!
// imgs.forEach((img) => {
//   img.addEventListener('click', clicar);
// });

// Quando o usuário clicar nos links internos do site,adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna  o comportamento padrão desses links (o comportamento padrão é que quando vc clica no link ele vai para outro de igual id)
// const linkInternos = document.querySelectorAll('a[href^="#"]');
// console.log(linkInternos);
// function handleLink(event) {
//   event.preventDefault();
//   event.currentTarget.classList.add("ativo");
// //poderia ser this.classList.add("ativo");
// }
// linkInternos.forEach((link) => {
//   link.addEventListener("click", handleLink);
// link.classList.remove('ativo');
// });

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.
// const todos = document.querySelectorAll('body *');//o * aqui e no css seleciona tds os elementos. Para começar de algo digita o que vc quer q dê início e o * dps
// function handleElemento (event) {
//   console.log(event.currentTarget); //o current target é o elemento que está sendo clicado-o que está selecionado
// }
// todos.forEach((elemento)=>{
//   elemento.addEventListener('click', handleElemento);
// });//como quer q vá para tds usa for each

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

// const todos = document.querySelectorAll('body *');
// function handleElemento (event) {
//   event.currentTarget.remove();
// }
// todos.forEach((elemento)=>{
//   elemento.addEventListener('click', handleElemento);
// });//como quer q vá para tds usa for each
// Se o usuário clicar na tecla (t), aumente todo o texto do site
// function aumentar(event) {
//   if (event.key === "t") {
//     document.documentElement.classList.toggle("textomaior");
//     //document fala com o body o docelement fala com o body
//   }
// }
// window.addEventListener("keydown", aumentar);

//Dá para osar outras propriedades do html tbm
//nome que eu dei.innerText = 'o novo valor' eu mudo o que está dentro do html como se a propriedade fosse uma variavel
//o html que ele fala é td a parte do código em html não http-eita soninho
// outro exemplo nomequeeudei.innerHTML = 'novo valor'

// const menu = document.querySelectorAll('.menu');
// menu.otherHTML = 'doideira';
// //menu.otherHtml -envolve td o html do elemento incluindo ele mesmo.
// //menu.innerHTML -envolve só o que está dentro(filhos)
// //menu.innerText - envolve só o texto que está no html

// console.log(menu.otherHTML);

// const h1 = document.querySelector('h1');
// console.log(h1.innerHTML);
// h1.innerHTML = '<p>Mudou</p>'; //observe que muda o estilo tbm pq ele vai catar de p
// console.log(h1.innerHTML);
// //O otherhtmlsubstitui o inner troca o conteúdo
// h1.outerHTML = '<p>Troca</p>';
// console.log(h1.outerHTML);

//Transversing é uma navegação entre os itens pais e filhos-pelo dom. A ideia é pegar o elemento ou o pai ou seja lá qual for o lugar
//O html colection do elemento é uma lista no formato html que vc acessa como se fosse um array-Para pegar o ultimo elemento nomequeeudeiparaaseleção.children.lenght -1 pq a contagem começa do zero ou -1 na frente de td
//Tbm poderia selecionar como elemento css lista.querrySelector('li:last-child');

// const lista = document.querySelector('.animais-lista');
// //abaixo estão as opções levando em consideração o formato já que se trata de propriedades
// console.log(lista.parentElement);
// //lista.parentElement vem o pai
// //lista.parentElement.parentElement vem o pai do pai
// //lista.previousElementSibling vem o que está acima
// //lista.nextElementSibling vem o que está dps
// //lista.children vem o html colection(lista) com os filhos
// //lista.children[0] vem o primeiro filho
// //lista.children[--lista.children.length]

// //Td tag html é um elemento mas um node pode ser qualquer coisa - por isso lidamos com ele de forma diferente até mesmo o espaço entre as linhas. Quando vc puxa a setinha ele mostra tds os itens até mesmo o espaço.
// const lista = document.querySelector('.animais-lista');'
// console.log(lista.childNodes);//vem td
// console.log(lista.previousSibling);//caso eu não ponha o .element antes do sibling ele traz a node list tbm na vdd um espaço que é o que vem antes dessa lista
// //Cuidado!
// //lista.ElementSibling -elemento antes
// //lista.previousSibling -node antes
// //lista.firstchild -primeiro node child
// //lista.childNodes //tds os node child

//0308
//1)Selecione contato
//2)Selecione titulo
//3)Mova o titulo de contato para a lista
//4)Mova para animais
//5)Remova o título
//6) Substitua o titulo pela lista
//7) crie com java um novo elemento no h1 e dps posicione
//8)crie 3 variaveis com valor igual
//9) Crie uma variável clonando e os filhos do elemento
//Duplique o menu e adicione ele em copy
//Selecione o primeiro DT da dl de FAQ
//Selecione o dd referente ao primeiro dt
//Substitua o conteudo html de faq pelo de .animais