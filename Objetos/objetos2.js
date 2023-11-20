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
//Ou seja objeto.proprieddade = valor -> Caso a propriedade exista troca o valor, caso contrário cria uma nova.

//Se serve para proepriedade serve para função:
//objeto.propriedade(nova ou velha) = function() {}
menu.esconder = function (x) {
  if (x == "2") {
    return "escondido";
  } else {
    return "nada";
  }
};
console.log(menu.esconder("3"));

//console.log(menu.esconder(3)); Pq ele dá undeffined? Já que não está dentro do objeto.
//Crie um objeto com seus dados pessoais:
var Reginat = {
  nome: "Regina",
  outroNome: "Maciel",
  idade: 25,
  altura: 1.57,
  peso: 62,
};
//Crie um método no objeto anterior que mostre seu nome completo:
//console.log(typeof nome);//Não lembrei disso
Reginat.sobreNome = function () {
  return `${this.nome} ${this.outroNome}`;
};
//console.log escrever dnovo
//Reginat.sobreNome = function () {
//console.log( `${this.nome} ${this.outroNome}`);
//};
Reginat.sobreNome();
console.log(Reginat.sobreNome());
//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

//Crie um objeto que seja um labrador preto de 10 anos que late ao ver um homem
var labrador = {
  idade: 10,
  cor: "Preto",
  latir(pessoa) {
    if (pessoa == "homem") {
      console.log("AuAU");
    } else {
      console.log("nada");
    }
  },
};

console.log(labrador.latir("Regina"));
