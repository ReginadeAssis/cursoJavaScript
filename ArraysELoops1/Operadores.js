console.log("teste");
var frutas = ["Banana", "Pera", "Laranja", "Abacaxi"];
frutas.forEach(function (item) {
  console.log(item);
});
//Esse item pode ser qualquer outro nome que funciona

//Caso queira o nome e a posição temos que passar o index como parãmetro da função e pedir para exibir tbm
frutas.forEach(function (item, index) {
  console.log(item, index);
});

//É possível criar um for sem o começo e sem ua ação após a condição: mas tem que manter o separador
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
}

//Crie um array com os anos em que o BR ganhou a copa:
var brasilGanhouACopa = ["1959", "1962", "1970", "1994", "2002"];

//Faça uma interação com o array utilizando um loop para mostar uma frase:
brasilGanhouACopa.forEach(function (item) {
  console.log(`O Brasil ganhou a copa em ${item}`);
});
