// const carro = {
//   marca: "Marca",
//   preco: 0,
// };

//A ideia é aproveitar os itens dessa constante, mas se eu só for mudando o conteúdo honda.marca = honda na vdd eu mudo o conteudo da cons carro
// const carro2 = {
//   marca: 'Marca',
//   preco: 130,
// }

// //Parar esolver isso cria uma função "normal" chamada construtura que faz ref a ela mesma chamndo o this. Para usar ela chama o new

// function Teste() {
//   this.marca = "Marca";
//   this.preco = 0;
//   this.andar = function () {
//     console.log("andou");
//   };
// }
// //O this é simplismente o objeto carro
// const honda2 = new Teste(); //Assim honda é na vdd um objeto que vem do construtor carro
// honda2.marca = "Honda";
// honda2.preco = 1000;

// const fiat = new Teste();
// fiat.marca = "Fiat";
// fiat.preco = 6000;

// function Teste2(marca, preco) {
//   this.marca = marca;
//   this.preco = preco;
//   this.andar = function () {
//     console.log("andou");
//   };
// } //Pode fazer como atributo tbm

// const fiat2 = new Teste2("Fiat", 4000);

// //A ideia é criar um objeto com duas constantes uma delas definida pela multiplicação de dois atributos e duas com a propriedade mostrando td no final com console.log this. Com esse objeto estruturado vc cria as constantes por fora com essa estrutura

// function moto (marca, precoInicial) {
// const taxa = 1.2;
// const precoFinal = precoInicial * taxa;
// this.marca = marca;
// this.preco = precoFinal;
// console.log(this);
// }

// const honda = new moto('Honda', 2000);

// //----------------------------------------------------------------------------------------
// const Dom = {
//   selector: 'li',  //objeto que tem um seletor como propriedade
//   element () {
//     return document.querySelector(this.selector); //um metodo que retorna esse objeto baseado na propriedade selector
//   },
//   ativo () {
//     this.element().classList.add('ativo'); //um metodo chamado ativo que add a classe ativo no elemento
//   },
// }

// Dom.ativo(); //adiciona ativo ao li ativando a função no objeto dom com o seletor li

// Dom.selector = 'ul'; //define o seletor como ul sai o li e entra ele add a classe ativo
// Dom.ativo(); //adiciona ativo ao ul
// //Cuidado!! o nome do objeto para selecionar a propriedade é Dom.element().classList.add('teste)-exemplo se quisesse usar a propriedade class list
//---------------------------------------------------------------------------------------------

// //Para que não gere problemas ao mudar o seletor usa as funções construtoras
// function Dom(seletor) {
//   this.seletor = seletor; //agr ele pega o parametro que chama seletor e joga aqui
//   this.element = function () {
//     return document.querySelector(seletor); //um metodo que retorna esse objeto baseado na propriedade selector
//   }
//     this.ativo = function () {
//       this.element().classList.add('ativo');
//       //um metodo chamado ativo que add a classe ativo no elemento
//     };
// }
// const li = new Dom(); //o li passa a ser o seletor e add a classe ativo se eu ativar esse metodo. è um objeto do tipo dom
// li.seletor = 'li';
// li.ativo();

// const ul = new Dom();
// ul.seletor = 'ul';
// ul.ativo();

//---------------------------------------//__________________________________________________
// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

// function Pessoa (nome, idade) {} //Paso 1 é transformar o objeto em uma função
// function Pessoa (nome, idade) {this.nome = nome;} //Passo 2 é levar os argumentos a propriedade
// function Pessoa (nome, idade) {
//   this.nome = nome;
//   this.idade = idade;}
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + "andou");
  };
} //Passo 3 adicionar o metodo andar

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

//priemro cria uma função
//2  cria a constante que pega o seletor
//3 joga dentro do seletor a propriedade que vc quer no caso a node list
//4 cria uma propriedade que vai exibir o que definiu na constante
//5 cria uma propriedade que vai adicionar a classe em tds os itens para isso tem que usar o for each

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
