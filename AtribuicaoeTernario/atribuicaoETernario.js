// console.log("Para comentar seleciona e aperta control e ;");

console.log("Trabalhando os operadores");
let a = 5;
let b = 3;
console.log((a += b));

//Olha que legal não precisa atribuir a operação a uma função
function soma(k, l) {
  console.log((k += l));
}
soma(5, 3);

let g = 1;
let h = 2;
console.log((g -= h));
console.log((g *= h));
console.log((g /= h));
console.log((g %= h));
console.log((g **= h));

//Chama ternário porque opera com a variável o verdadeiro e o falso
// A variável da função recebe essa condição = condição ?  true : false; e depois pede para exibir a variável da função.

let boaVontade = 19;
let podeFazer = boaVontade >= 18 ? "por favor" : "ok";
console.log(podeFazer);

//Some 500 ao valor de scroll abaixo
let scroll = 200;
console.log((scroll += 500));

//Atribuindo o novo valor ao scroll var scroll=1000
scroll = 1000;

//Atribua true para o valor da variavel  darCredito
let credito = true;
console.log(credito);
//caso o cliente possua carro e casa verdadeiro
function carroECasa(carro, casa) {
  carro = true;
  casa = true;
  if (carro && casa == true) {
    console.log("possui");
  } else {
    console.log("fim");
  }
}
carroECasa(true, true);

// e false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa ? "possui" : "nao possui";
console.log(darCredito);
