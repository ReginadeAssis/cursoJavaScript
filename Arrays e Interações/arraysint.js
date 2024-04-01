//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
//A ideia é manipular os grupos de informação que em geral estão em arrays-o node list tem mas em geral tem que transformar as listas em node.
//Caso vc modifique qualquer coisa nessa lista array ele modifica na original

const carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function-igual a de cima
//carros.forEach((item, index, array) => {
//ex de mudança da array td passando teste array[index] = 'Teste'
// console.log(item.toUpperCase());
//});

//Outro exemplo de sentenças iguais com arrow function
const li = document.querySelectorAll("li");

//li.forEach(i => i.classList.add('ativa')); //pq só tem um argumento não precisa de parenteses-já que só tem uma lina para retornar não precisa de chaves
//tem como add mais classes no automatico li.forEach((item, index) => {i.classList.add('ativa' + index)});

li.forEach(function (item) {
  item.classList.add("ativa");
});

//Adicionando o carro na frente de todos os nomes que estão dentro da array
const carros2 = ["Ford", "Fiat", "Honda"];
carros2.forEach((item, index, array) => {
  array[index] = "Carro " + item;
});

console.log(carros2); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

//Esse map é melhor para add coisas na frente como no exemplo acima. A diferença é que no foreach sempre retorna undefined pq o objetivo não é trabalhar o retorno do método e sim alterar algo na lista. Já o map retorna um array para cada item em cada interação
const carros66 = ["Ford", "Fiat", "Honda"];
const newCarros = carros66.map((item) => {
  return "Carro " + item; //sem essa parte ele retorna undeffined pq na vdd o que aparece é o resultado da interação para isso tem que chamar
});

//Parece que as duas são iguais mas não são
console.log(carros66); // ['Ford', 'Fiat', 'Honda']
//demonstrando que é nova
console.log((newCarros[1] = "teste"));
console.log(newCarros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

//exemplo de multiplicação dos numeros por 2
const numeros = [1, 2, 3, 4];
const numerosx3 = numeros.map((n) => n * 3); //usou a arron function omitindo o function, o () pq um só item e o {} pq retorna só uma linha; Internamente dá para imaginar que primeiro n = 1 dps 2 ...4. Pode tbm adicionar o . dps do map e colocar mais propriedades para interagir
console.log(numerosx3);

//Presta atençãaoo se vc precisa de uma nova array usa o map-caso não usa o for each
//Abaixo com o map foi craida uma array com o numero de minutos de duração de cada aula

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },

  {
    nome: "HTML 2",
    min: 10,
  },

  {
    nome: "CSS 1",
    min: 20,
  },

  {
    nome: "JS 1",
    min: 25,
  },
];

const minutos = aulas.map((aulas) => aulas.min);
console.log(minutos);
//Ex2:
//cria uma funcção que recebe um objeto() e retorna esse objeto .nome
function nomeAulas(aulas) {
  return aulas.nome;
}
//Passa a função que retorna a propriedade para dentro do array
const arrayNomes = aulas.map(nomeAulas);

console.log(arrayNomes);

//Outra opção igual para o exemplo 2:
//const ArrayNomes = aulas.map(function nomeAulas(aulas) {return aulas.nome;}); Ou seja o map faz o que vc está pedindo criando uma nova array...
