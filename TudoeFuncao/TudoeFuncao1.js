//O java já vem com propriedades o que te dá a opção de objetificar tudo. Para ver o que tem é só digitar o ponto que ele puxa uma lista.
// O javaScript automaticamente coloca a variável em um objeto para dar acesso as possibilidades.
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado.toString(2));
console.log(areaQuadrado(2));
//Assim como os objetos as funções também já tem propriedades pré-definidas.
//Não precisa ficar nervosa a ideia não é decorar e sim entender o que vc precisa ir lá buscar e usar.
//Nomeie 3 propriedades ou métodos string:
var nome = "André";
console.log(nome.length);
console.log(nome.fixed);
console.log(nome.slice);
//Nomeie 5 propriedades ou métodos do elemento dom:
//add.EventListener
//appendChild
//id
//innerHtml
//outerHTml
addEventListener("scroll", function () {
  console.log("Regina Maciel");
});
