//Dê um exemplo com o loop while:
//var i = 0;
//while (i < 10) {
// console.log(i);
// i++;
//}

var testeArray = ['teste0','teste1','teste2','teste3' ];
testeArray.forEach (function (item) {console.log(item);});

console.log("teste");
//Como posso mostrar cada item do array no console?

//Para ele não apenas contar vc coloca o elemento na parte que ele vai exibir
var videoGames2 = ["Switch", "PS4", "XBOX", "3DS"];
for (var videoGames2 = 0; item < 4; item++) {
  console.log(videoGames2[item]);
}

//Caso vc não saiba o tamanho do array substitui o tamanho no caso 4 pela propriedade do array
var videoGames2 = ["Switch", "PS4", "XBOX", "3DS"];
for (var videoGames2 = 0; item < videoGames2.length; item++) {
  console.log(videogames2[item]);
}

//Vc tbm pode adicionar uma condição e um break logoapós o console.log sem problema:


