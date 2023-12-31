//console.log("teste");
const animaisSection = document.getElementById("animais");
//console.log(animais.innerText);
// getElementbyid cata o elemento com base no id. Para funcionar o script precisou estar lá no fundo antes só do fim do body.
//const animaisSection = document.getElementById("animais");
//Cria uma constante chamada section aqui ele fala com o metodo documentos -logo um método e o valor que vc passa é o id
//console.log(animais.innerText);
//acessa só o texto que está dentro de animais.

const contatoSection = document.getElementById("contato");
//console.log(contato);

// não precisei nem dar o exemplo do null pq ele não abriu de primira e deu null

// Também podemos selecionar por classes ou por Tags. A estrutura é a mesma só troca o id pelos outros nomes e o s do element indica que é mais um elemento.
// Tbm podemos adicionar mais uma classe é só colocar do lado não precisa nem de ,
const gridSection = document.getElementsByClassName("grid-section");
// criou a chamada constante grid section com tds as grid section dentro
console.log(gridSection);
console.log(gridSection.length);
console.log(gridSection[0]);
//camou o primeiro item que tem o id como animais antes puxou pelo tamanho

// Usamos mais o query pq ele retorna o primeiro elemento que estiver de acordo com o css. Aqui vc seleciona da mesma forma que faria no css usando . para classe o # para puxar o id last child para pegar o ultimo li no animais lista. Td item hf que começar com https:// ou tag ul. Em todos abaixo ele usou isso como o metodo de document
const animais = document.querySelector(".animais");
//classe
const contato = document.querySelector("#contato");
//id
const ultimoItem = document.querySelector(".animais-lista li:last-child");
//pega o ultimo item da li dentro do animais lista
const linkCSS = document.querySelector('[href^="https://"]');
//Td item hf que começar com https://
const primeiroUl = document.querySelector("ul");

// Abaixo deixou de usar o metodo de document e está usando um metodo que xiste dentro da propria seleção
const navItem = primeiroUl.querySelector("li");
//substituiu o document que faz uma pegada geral do site por uma seleção específica, ou seja vira uma propriedade do objeto primeiro ul

// Depois criou uma constante que será usada como objeto da seleçção da primeira li e da primeira ul
const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

// Para o primeiro link interno viu que todos começavam com # com o href como atributo. What out!! O query selector retorna apenas o primeiro e não uma lista. O que diz o começa com é o acento.

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
//O que vai trazer a possibilidade de usar propriedades como
console.log(linkInterno.href);

// o all puxa justamente tds os que tiverem dentro ali do item que vc está chamando. COmo exemplo ele pegou todas as imgs que estão dentro de animais
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
//retorna os resultados na forma dessa lista node que parece um array com metodos e propriedades do html colection mas tem outras opções.
//Esse método animaisImg é estatico ainda que eu mude o animais img selecionado anteriormente é o que vale. O get by class ou tag consegue atualizar. Quando ele seleciona assim pega tds que são os dois o animais e tbm img.
console.log(animaisImg[1]);
// Esse 1 chama o segundo item da lista já que começa do zero-não esqueça.
//Resolveu falar das diferenças entre html colection e node list e focou nos métodos que poderão ser usados.A node list tem mais métodos.

//Retorne no console tds as imagens do site
const todasAsImagens = document.querySelectorAll("img");
console.log(todasAsImagens);
//Retorne só as img que começam com a palavra imagem
const imagemQueComecaComImagem = document.querySelectorAll(
  'img[src^="img/imagem"]'
);
console.log(imagemQueComecaComImagem);
//Selecione tds os links internos onde href começa com #
const linkInternos = document.querySelector('[href^="#"]');
console.log(linkInternos);
//selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector("h2");
//tbm retornaria se no lugar de h2 tivesse .animais-descricao  h2
console.log(primeiroH2);
//Selecione o ultimo p do site
const ultimoPDoSite = document.querySelector(".copy p:last-child");
console.log(ultimoPDoSite);
