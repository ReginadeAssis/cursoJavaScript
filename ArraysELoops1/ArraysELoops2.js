//Dê um exemplo com o loop while:
//var i = 0;
//while (i < 10) {
// console.log(i);
// i++;
//}

var testeArray = ["teste0", "teste1", "teste2", "teste3"];
testeArray.forEach(function (item) {
  console.log(item);
});

console.log("teste");
//Como posso mostrar cada item do array no console?

//var item = 0;
//Para ele não apenas contar vc coloca o elemento na parte que ele vai exibir
// var videoGames2 = ["Switch", "PS4", "XBOX", "3DS"];
// for (var item = 0; item < 4; item++) {
//   console.log(videoGames2[item]);
// }

//Caso vc não saiba o tamanho do array substitui o tamanho no caso 4 pela propriedade do array
var videoGames2 = ["Switch", "PS4", "XBOX", "3DS"];
for (var item = 0; item < videoGames2.length; item++) {
  console.log(videoGames2[item]);
}

//Vc tbm pode adicionar uma condição e um break logo após o console.log sem problema:
var videoGames2 = ["Switch", "PS4", "XBOX", "3DS"];
for (var item = 0; item < videoGames2.length; item++) {
  console.log(videoGames2[item]);
  break;
}

var frutas = ["Banana", "Pera", "Maça", "Abacaxi", "Uva"];
frutas.forEach(function (item) {
  console.log(item);
});

//também podemos puxar mais de um parametro:

frutas.forEach(function (fruta, index) {
  console.log(fruta, index);
});

///Além de fazer ele repetir a cada puxada:

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});

//O .pop vai tirando assim ele criou uma forma de exibir que vai reduzindo
frutas.forEach(function (fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas);
});

//Sendo assim mais uma consideração é que ele pode fazer várias coisas no for each não precisa ser uma coisa de cada vez
//Crie um array com os anos que o brasil venceu a copa:

let copa = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop para mostrar no console o brasil ganhou e o ano da copa
copa.forEach(function (copa) {
  console.log(`O brasil ganhou a copa ${copa}`);
});

//Interaja com o loop das frutas e para no pera
let feira = ["Banana", "Pera", "Maça", "Abacaxi", "Uva"];
// for(var item = 0; item < 2; item++){
//   console.log(frutas);
// } -não sei pq não funciona-pq declarado mas nunca lido?
frutas.forEach(function (feira) {});
