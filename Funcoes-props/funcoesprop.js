//Para criar função pode ser diretamente ou usando o construtor, ou seja as duas são iguais
function areaQuadrado(lado) {
  return lado * lado;
}

//const perimetroQuadrado = new Function('lado'-argumentos, 'return lado * 4-miolo da funcao');

//acontece o mesmo que nas aulas usando o nome da função .alguma coisa ela apresenta funcionalidades
function somar(n1, n2) {
  return n1 + n2;
}
console.log(somar.length);
console.log(somar.name);
console.log(somar(3, 3)); //tbm pode acessar os métodos do objeto que ele está retornando que no caso é um número pq uma coisa é a função a outra é o que ela retorna. Lembra que no console function.prototype vc acessa tds os metodos

//O call só executa a função
function darOi(nome) {
  console.log("Oi para vc" + " " + nome + "!");
}
darOi.call({}, "André"); //executa já passando o argumento aqui

const carro = {
  marca: "Ford",
  ano: 2018,
  velocidades: 100,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano + " " + this.velocidades); //esse this está aqui pq é do proprio objeto o carro
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018 pq é o único que usa o carro como argumento ({objeto no caso o carro}, parametros da função) por exemplo:({marca:algo}, 100)

function Dom(seletor) {
  this.element = document.querySelector(seletor);
} //cria uma função que seleciona

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe); //seleciona o elemento aqui
};

const lista = new Dom("ul"); //passou uma classe para lista
lista.ativo("ativar"); //passa a classe ativar
console.log(lista);

//const li = { element: document.querySelector('li')}; //criou um objeto selecionado dentro de uma constante

//para aproveitar a função ele cria um outro objeto selecionado e altera o objeto no metodo call-lembrando que tem que ser parecido
//ul.ativo.call(li, 'ativo');

//a qualquer função construtora é possível adicionar métodos novos dentro do prototype
const frutas = ["uva", "maça", "banana"];
Array.prototype.mostrarThis = function () {
  console.log(this);
};
frutas.mostrarThis();
//O this é a propria array, tenha em mente que modificar um método nativo não é uma boa prática
//Ex com o pop retirando o ultimo item da array
Array.prototype.pop.call(frutas);
console.log(frutas); //a função do pop não é mostrar é retirar

//Em geral usa esse array.prototype.um método qualquer quando tem um objeto que se pareça com uma array eles são chamados array-like(tem um exemplo abaixo e lembrando que o lenght é indispensável).
const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains("ativo"); //esses contains é o método que mostra se está ativo
});

console.log(filtro); // Retorna os itens que possuem ativo

//como alternativa ao call temos o appaly a diferença é que ele recebe uma lista
const argumentos = [3, 4, 9, 5, 8, 7, 3];
console.log(Math.max.apply(null, argumentos));
console.log(Math.max.call(null, 3, 4, 9, 5, 8, 7, 3)); //usa o null nos 2 pq não precisa modificar o objeto
//funcionou igual mas essa é a diferença

//o function.bind retorna função com o novo contexto do this mas ele não ativa a função vc tem que ativar posteriormente onde colocou a função
//Em geral se usa esse para muitas repetições
const $ = document.querySelectorAll.bind(document); //usou o document como objeto
//para executar funciona tbm
console.log($("li"));
//não precisa passar td no bind pode espalhar os argumentos
const carroulos = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

///criando outro objeto logo abaixo mas a estrutura tem que ser semelhante para vc poder interagir
const honda = {
  marca: "honda",
};

const acelerarHonda = carroulos.acelerar.bind(honda);
console.log(acelerarHonda(100, 20));
//a ideia é que fazendo um bind com novos argumentos vc cria automaticamente uma nova função tbm
//No caso abaixo o médico não precisa mais pedir a altura dos pacientes
function imc(altura, peso) {
  return peso / (altura * altura);
}
const imc180 = imc.bind(null, 1.8);
console.log(imc180(70)); //vc add só o objeto que quer mais os parametros

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
//A primeiro coisa é selecionar os paragrafos
const paragrafos = document.querySelectorAll("p");
//para usar reduce ou transforma ela em array ou usa o call
const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
    //console.log(item.innerText.length);//pega o texto que está dentro e como propriedade da string texto usa o lenght
  },
  0
);
//e usa a função de reduce normal dentro do call back-lembbrando que tem que começar com o zero para ele partir de algum ponto
//console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
//Atacou em uma função
function criarElementos(tag, classe, conteudo) {
  const elemento = document.createElement("div"); //aqui vc passa a tag com a prop create element
  //elemento.classList.add(classe); //assim ele cria e adiciona uma classe vazia
  classe ? elemento.classList.add(classe) : " "; //cria um if-else com ? e :
  conteudo ? (elemento.innerHTML = conteudo) : " "; //cria um if-else com ? e : o mesmo para conteúdo se existir pega caso não vazio
}
console.log(criarElementos("li", "azul", "Esse é o conteúdo")); //dps vc pode usar livre com varias diferentes

// Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElementos.bind(null, "h1", "titulo"); //o parametro q vc omite é aquele que vai ser declarado quando vc puxar a função
const cursosJS = h1Titulo("Cursos de JavaScript");
console.log(cursosJS);
