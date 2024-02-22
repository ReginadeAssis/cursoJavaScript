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

//Para que não gere problemas ao mudar o seletor usa as funções construtoras
function Dom(seletor) {
  this.seletor = seletor; //agr ele pega o parametro que chama seletor e joga aqui
  (this.element = function () {
    return document.querySelector(this.selector); //um metodo que retorna esse objeto baseado na propriedade selector
  }),
    (this.ativo = function () {
      this.element().classList.add("ativo"); //um metodo chamado ativo que add a classe ativo no elemento
    });
}
const li = new Dom("li"); //o li passa a ser o seletor e add a classe ativo se eu ativar esse metodo
