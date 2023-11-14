//Como usar as propriedades de um objeto?
//usando um ponto, exemplo:
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor;
//Como mudar o valor de uma propriedade longe do objeto?
menu.backgroundColor = "#222";
//Para add uma propriedade ao objeto
menu.color = "blue";
//Ou sejja objeto.proprieddade = valor -> Caso a propriedade exista troca o valor, caso contrário cria uma nova.

//Se serve para proepriedade serve para função:
//objeto.propriedade(nova ou velha) = function() {}
menu.esconder = function (i) {
  if (i > 2) {
    console.log("escondido");
  }
};
var i = 2;
//console.log(menu.esconder(3)); Pq ele dá undeffined? Já que não está dentro do objeto.
//Crie um objeto com seus dados pessoais:
var Reginat = {
  nome: Regina,
  outroNome: Maciel,
  idade: 25,
  altura: 1.57,
  peso: 62,
};
//Crie um método no objeto anterior que mostre seu nome completo:
//Console.log(typeof nome);//Lembrei disso ...pq ele não faz nem dá undeffined?
//Reginat.sobreNome = function(){Console.log(`${nome} ${outroNome}`;}

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
//Tbm não sei qual o problema aqui...
//Crie um objeto que seja um labrador preto de 10 anos que late ao ver um homem
var labrador = {
  idade: 10,
  cor: "Preto",
  latir(pessoa) {
    if (pessoa == homem) {
      console.log("AuAU");
    } else {
      console.log("nada");
    }
  },
};

console.log(latir(homem));
//Agr lascou
