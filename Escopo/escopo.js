console.log("teste");
//As variáveis que vc declara dentro da função não tem como acessar fora dela
//Caso vc declare sem o var ele cria uma espécie de variável global, até funciona e dá para usar mas não é uma boa prática.

function mostrarCarro() {
  let carro = "fusca";
  console.log(carro);
}
mostrarCarro();

//As variaveis criadas por vc com var vazam do bloco por isso é melhor usar o let e quando for constatnte não pode mudar o valor e vc declara com const.
//Mas observe que também, Regina- que podemos usar o const para dados e criar um objeto grande.

const mes = "Dezembro";
console.log(mes);
const data = {
  dia: 20,
  mes: "Janeiro",
  ano: 1998,
};
console.log(data);

//Resolva o erro:
// Por qual motivo o código abaixo retorna com erros?
let cor = "preto";
let marca = "Fiat";
let portas = 4;

console.log(cor, marca, portas);

//ou
var carro = {
  bbb: "preto",
  popo: "Fiat",
  pokk: 4,
};

// // Como corrigir o erro abaixo?
function somarDois(s) {
  let dois = 2;
  return s + dois;
}
console.log(somarDois(1));
console.log(somarDois(4));

function dividirDois(k) {
  console.log(k / 2);
}
dividirDois(6);

// // O que fazer para total retornar 500?
var numero = 50;

const total = 10 * numero;
console.log(total);
