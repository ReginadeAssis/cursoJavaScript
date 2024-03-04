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

//____________________________________________//_______________________________________

//O prototipo é uma propriedade de uma função graças a ele podemos usar as propriedades que já “vem com o js”
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return console.log("Andou");
  };
} //criou a função construtora
const andre = new Pessoa("André", 28); // criou o novo objeto com a função construtora
console.log(Pessoa.prototype); //objeto
console.log(andre.prototype); //indef pq andre é um objeto novo e pessoa é a função. O prototype está só na função
console.log(Pessoa.prototype);

function teste(a) {
  return a + 1;
}
console.log(teste(1));

teste.prototype; //nesse ponto só tem uma propriedade o constructor e o proto
typeof teste.prototype; //é um objeto

//O curioso é que vc pode add métodos e propriedades a esses prototipes e não aos objetos
//demosntração co o objeto normal incluindo o teste
var objeto = {
  nome: "Anna",
  idade: 30,
};
objeto.teste = "Isso";

//Agr com prototype adicionando a função andar dentro do objeto pessoa:
Pessoa.prototype.andar = function () {
  return console.log("Pessoa Andou");
  //Pode inclusive usar os atributos da constructor function
  //return console.log( this.nome + 'Pessoa Andou');
};
//A prioridade é do método que está no objeto. Caso duas funções andar uma dentro e outra no prototype ele usa a que está dentro do objeto.

//___________________________//__________________________________________
//Existem construtor de função de string de node list. Os construtores são sempre uma função acompanhada do construtor, nelas sempre tem propriedades e objetos q vc vai poder usar
const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B vê quem está no index 0
cidade.charAt(0); // R

String.prototype;

//___________________________//-__________________________________________
//Array é um construtor
const listaAnimais = ["Cachorro", "Gato", "Cavalo"];
const lista = document.querySelectorAll("li"); //criou uma constante cahamada lista como  seletor que acomoda os itens da lista na node liste
const listaArray = Array.prototype.slice.call(lista); // chama a lista selecionada para transformar em array- o call é um método de funções-transforma a nodelist em array pa ater mais opções.
//outra opção de transformação seria dentro do array objeto não do prototype com:
//Array.from(lista); Antes não tinha o .from
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype)); //esse get é um método do construtor object para mostrar quais as propriedades do objeto que eu estou passando

//#Só os métodos dos prototipos são herdáveis
[1, 2, 3].slice(); // existe
//[1, 2, 3].from(); // não existe

//É ipc vc lembrar que na vdd o q manipula é o que ele retorna-o resultado tem propriedades para interagir
const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
//____________________________//_________________________________________
// Crie uma função construtora de Pessoas3- Deve conter nome3, sobrenome3 e idade3
function Pessoa3(nome3, sobrenome3, idade3) {
  this.nome3 = nome3;
  this.sobrenome3 = sobrenome3;
  this.idade3 = idade3;
}
// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoa3.prototype.nomeCompleto = function () {
  return console.log(this.nome3 + this.sobrenome3);
};
const teste3 = new Pessoa3("Ana", "Julia", 34);
// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document:
//A ideia é ir no objeto nodelist que é um construtor ver as propriedades e exibir-entra nesse caso nas propriedades do objeto:
Object.getOwnPropertyNames(NodeList.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
//no console li.constructorname ai vê o que ele é Html li element dps digita HtmalLIElement.prototype vê as opções de manipulação-td herdado do construtor
li.click;
//no console li.click.constructor.name vc vê que é função
li.innerText;
// no console li.innerText.constructor.name
li.value;
// no console li.value.constructor.name
li.hidden;
// no console li.hidden.constructor.name
li.offsetLeft;
// no console li.offsetLeft.constructor.name
li.click();
// no console li.click.constructor.name. Não é nada quando é null e undefined pq é uma função que vai retornar algo mas por agr ela não retorna nada

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//É boolean, mas o valor que está retornando é uma strign. Logo, o tipo de dado que retorna é uma string

//Tem os objetos nativos os do host e do usuario
//nativos são aqueles especificos da linguagem e independentes do host, ou seja, abrindo em qualquer browser eles existem como objeto, string array e function.
//Já o node list é um objeto do host no caso da pg do site-O nodejs não é browser
//Os objetos do host são aqueles do proprio ambiente como domlist e html collection.
//Os user são os objetos do usuario-criados por vc pode ser um simples ou uma bibliioteca
//O ecmascript é o padrão o js é o q foi implementado
//A engenie é resp por implementar o ecmascript ela interpreta o js e faz o código funcionar elas são diferentes do js.
//As bibliotecas como o jquery foi criada para equilibrar as funções entre os browsers e trazer novas ferramentas
//Para saber se um metodo existe vc vê o tipo dele se for undeffined ele não existe
// if (typeof Array.from !== "undefined");
// if (typeof NodeList !== "undefined");
console.log(typeof ArrayList !== "undefined"); //ArrayList diferente de undefined?
//API é aplication program interface é uma interface criada para interagir com outros softwaresex:console.log é a api do browser para mostar as mensagens

//Liste 5 objetos nativos:Object, String, Array, Function e number
// agr do browser: digita window no console: Window, HIstory, document, HTMLColection, NodeList
