//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
//A ideia é manipular os grupos de informação que em geral estão em arrays-o node list tem mas em geral tem que transformar as listas em node.
//Caso vc modifique qualquer coisa nessa lista array ele modifica na original

// const carros = ["Ford", "Fiat", "Honda"];
// carros.forEach(function (item, index, array) {
//   console.log(item.toUpperCase());
// });

// // com Arrow Function-igual a de cima
// //carros.forEach((item, index, array) => {
// //ex de mudança da array td passando teste array[index] = 'Teste'
// // console.log(item.toUpperCase());
// //});

// //Outro exemplo de sentenças iguais com arrow function
// const li = document.querySelectorAll("li");

// //li.forEach(i => i.classList.add('ativa')); //pq só tem um argumento não precisa de parenteses-já que só tem uma lina para retornar não precisa de chaves
// //tem como add mais classes no automatico li.forEach((item, index) => {i.classList.add('ativa' + index)});

// li.forEach(function (item) {
//   item.classList.add("ativa");
// });

// //Adicionando o carro na frente de todos os nomes que estão dentro da array
// const carros2 = ["Ford", "Fiat", "Honda"];
// carros2.forEach((item, index, array) => {
//   array[index] = "Carro " + item;
// });

// console.log(carros2); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// //Esse map é melhor para add coisas na frente como no exemplo acima. A diferença é que no foreach sempre retorna undefined pq o objetivo não é trabalhar o retorno do método e sim alterar algo na lista. Já o map retorna um array para cada item em cada interação
// const carros66 = ["Ford", "Fiat", "Honda"];
// const newCarros = carros66.map((item) => {
//   return "Carro " + item; //sem essa parte ele retorna undeffined pq na vdd o que aparece é o resultado da interação para isso tem que chamar
// });

// //Parece que as duas são iguais mas não são
// console.log(carros66); // ['Ford', 'Fiat', 'Honda']
// //demonstrando que é nova
// console.log((newCarros[1] = "teste"));
// console.log(newCarros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

// //exemplo de multiplicação dos numeros por 2
// const numeros = [1, 2, 3, 4];
// const numerosx3 = numeros.map((n) => n * 3); //usou a arron function omitindo o function, o () pq um só item e o {} pq retorna só uma linha; Internamente dá para imaginar que primeiro n = 1 dps 2 ...4. Pode tbm adicionar o . dps do map e colocar mais propriedades para interagir
// console.log(numerosx3);

// //Presta atençãaoo se vc precisa de uma nova array usa o map-caso não usa o for each
// //Abaixo com o map foi craida uma array com o numero de minutos de duração de cada aula

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },

//   {
//     nome: "HTML 2",
//     min: 10,
//   },

//   {
//     nome: "CSS 1",
//     min: 20,
//   },

//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const minutos = aulas.map((aulas) => aulas.min);
// console.log(minutos);
// //Ex2:
// //cria uma funcção que recebe um objeto() e retorna esse objeto .nome
// function nomeAulas(aulas) {
//   return aulas.nome;
// }
// //Passa a função que retorna a propriedade para dentro do array.Ele pega a função e leva para cada parte do array
// const arrayNomes = aulas.map(nomeAulas);

// console.log(arrayNomes);

//Outra opção igual para o exemplo 2:
//const ArrayNomes = aulas.map(function nomeAulas(aulas) {return aulas.nome;}); Ou seja o map faz o que vc está pedindo criando uma nova array...
///tbm poderia ser
//const nomeAulas = aula => aulas.nome;
//que é o mesmo que
// const nomeAulas = function(aula) {return aula.nome}

//Abaixo o que ele chama de acumulador é o retorno da interação anterior
//const aulas33 = [10, 25, 30];
//const total1 = aulas33.reduce((acumulador, atual) => {
// return acumulador + atual;//add esse return caso contrário ele pega só o primeiro
//});
//total1; // 65

//const total2 = aulas33.reduce((acc, cur) => acc + cur, 100);
//total2; // 165

//No exemplo abaixo não tem valor de início:
// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

//Tem outras opções para reduce inclusive a pesquisa de valores. Abaixo ele vê se é < e passa o valor anterior
//const numero99 = [10, 25, 36, 66, 99]
// const maiorNumero = numero99.reduce((anterior, atual) => {
//   if(anterior > atual)
//   return anterior
// else
// return atual
// });
//colocando os numeros para ocupar as posiçoes que acima estão descritas
// const maiorNumero = numero99.reduce((0, 10) => {
//   if(0 > 10)
//   return 0
// else
// return 10
// }, 0);
//console.log(maiorNumero);

//tem o find e o find item o find retorna a posição do item que ele acha como true. Já o find item pega o index do valor na array.

// const frutinhas = ['banana', 'hjds', 'pera', 'uva'];
// const indexUva = frutinhas.findIndex(item => {
//   //findIndex é propriedade e põe a função de retornar o index quando achar a uva
//   return item ==='uva';
// });
// console.log(indexUva);

//resumindo vc tem uma constante = array.propriedade(função) aqui no caso do filter ele retorna uma lista
// const frutas = ['banana', undefined, null, '', 'uva', 0, 'maça'];
// const arrayLimpa = frutas.filter(fruta => {
//   console.log(fruta);
//   return item === 'banana'; });
//ele pega só a banana caso não tenha nada dps do return ele diz undeffined.
//return item ele retorna td que não é falso como 2 carro...o 0, null e undeffined são falsos

// const numeros369 = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros369.filter(x => {
//    x > 45; //põe a condição
//   console.log(x); //pede para exibir
// });
// console.log(buscaMaior45);

// Selecione cada curso e retorne uma array
const arrayCursos = document.querySelectorAll(".curso");
//pega tds com class curso
const cursos = Array.from(arrayCursos);
//transforma o array em node list automatico esse array.from
console.log(arrayCursos);
// array com objetos contendo o título, descricao,aulas e horas de cada curso. Como quer um objeto já no return é preciso estruturar um objeto
const objetosCurso = cursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText; //pega o texto dentro de h1 dentro de curso dentro do html
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo: titulo, //poderia ser só titulo pq os dois nomes são iguais os dois últimos estão assim
    descricao: descricao,
    aulas,
    horas,
  };
});

// Retorne uma lista com os
// números maiores que 100
const numeroulos = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeroulos.filter((n) => n > 100); //Só é vdd n >100
console.log(maioresQue100);

// Verifique se Baixo faz parte usa o some para procurar
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixoExiste = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log(baixoExiste);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

//para limpar objeto
//para somar objetos dentro do array
const total = compras.reduce((acumulador, item) => {
  const precoLimpos = +item.preco.replace("R$", "").replace(",", "."); //não esquece do = na frente pq ele que transforma em número
  //console.log(precoLimpos); //pega só o preco dele como a prop é do array não precisa do for eatch ele já puxa td
  return acumulador + precoLimpos;
}, 0); //esse zero vem aqui para ele não pular o primeiro item no caso o banana

console.log(total);
