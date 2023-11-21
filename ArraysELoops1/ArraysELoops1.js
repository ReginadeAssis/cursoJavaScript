console.log("Oi!");
//O que é um array? É um grupo de valores geralmente relacionado e serve para agrupar essas informações relacionadas em um único objeto.
//Como criar um? Dê exeplos:
var videoGames = [1, 2, 3];
//var nme da variável = [o que quer, outro, outro]; para fechar. Pode ser quaquer tipo de conteúdo.
//Como faço para exibir o conteúdo?
//nome do array [posição-lembrando que começa  do zero].
console.log(videoGames[1]);
console.log(videoGames[0]);
//O arrays também possuem seus métodos e propriedades assim como os objetos e as funções para facilitar o uso:
console.log(videoGames.pop()); //Aqui ele removeu o 3 e mostrou o que removeu
//Também podemos colocar como conteúdo de uma variável um array:
var ultimoItem = videoGames.pop();
console.log(ultimoItem); // ? pq ele dá undeffined se está definido acima
//O que são loops e como usar?
//São meios de repetir uma testagem até que a condição seja satisfeita.
//É preciso ter muito cuidado para não criar loops infinitos então já começa pensando sobre isso
//for (var nome da variável(onde começa); condição verdadeira; o que ele faz se for verdadeira){
//{console.log(nome da variável);}
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
