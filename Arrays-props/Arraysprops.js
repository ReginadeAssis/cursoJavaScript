//array armazena uma coleção diversa de elementos pode conter td até mesmo um outro array
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[0]; //retorna o new string como se vc tivesse digitado isso
dados[2]("Ford"); //passou um valor p o elemento que chamou pq na vdd é uma função o elemento que vem do array
dados[1][2].cor; // azul usa dois [] pq é array dentro de outro array caso tivesse mais usa mais sem problema. Como esse elemento do array é um objeto vc pode acessar as propriedades dele direto como no exemplo acima.

//pode criar tradicional ou usando o construtor new array as duas linhas abaixo demonstram isso e tem um resultado igual.
const instrumentos22 = ["guitarra", "baixo", "violão"];
const naves = new Array("Corola", "Mustang", "Honda");
//e vc continua podendo substituir e atribuir diretamente no array
naves[2] = "Parati"; //sai honda e entra parati
//Entre os metodos diretos do array estão o array from ele transforma um objeto que se parece com uma array em uma array real

let li = document.querySelectorAll("li"); // NodeList parece array mas n é.
li = Array.from(li); // Array

const carros33 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4, //tem que add isso para que ele consiga transformar em array caso contrário não funciona
}; //no lugar de nomes ele passou numeros como "index"

const carrosArray = Array.from(carros33);
//O Array.isArray(li) fala se o que está dentro do () é array

//Também tem outras formas de criar array:
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,] cria vazio com 5 espaços
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4] com mais de um elemento no parentese ele entende que os elementos são o array.

//Também temos:

const instrumentos99 = ["Guitarra", "Baixo", "Violão"];
instrumentos99.sort();
instrumentos99; // ['Baixo', 'Guitarra', Violão] coloca em ordem alfabetica

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8] coloca em ordem crescente de acordo com o primeiro caracter ou seja não considera o numero td

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Honda", "Kia"); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']; adiciona elementos no inicio da array
//const novaArray = carros.push('Parati', 'Gol'); essa novaArray na vdd retorna os 7 itens que tem na array carros contando com gol e parati.

carros.push("Ferrari"); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']; adiciona elementos no fim da array

const carros98 = ["Ford", "Fiat", "VW", "Honda"];
const primeiroCarro = carros.shift(); // 'Ford' tira o primeiro e retorna
carros98; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW']; tira o ultimo e retorna

const carros66 = ["Ford", "Fiat", "VW", "Honda"];
carros66.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
//inverte de vez td
