//O que são os objetos? São os conjuntos de variáveis e funções
//quem são as propriedades, quem são os métodos? As propriedades são os nomes, os métodos as funções
//Esse var pessoa é um objeto quando vem assim cheio de propriedades(variáveis) e métodos.
var pessoa = {
  //essa variável vira um objeto
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};
console.log(pessoa.nome); //estou chamando dentro do objeto pessoa a propriedade nome
console.log(pessoa.possuiFaculdade); //estou chamando dentro do objeto pessoa a propriedade possuiFaculdade

var quadrado = {
  //transforma a variável em objeto
  //entra a primeira função
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; //esse this chama o lados do pai para cá
  }, //o último também recebe a ,
};
console.log(quadrado.lados); //chama no objeto quadrado a propriedade lados
console.log(quadrado.area(2)); //chama no objeto quadrado o método area
console.log(quadrado.perimetro(2)); //chama no objeto quadrado o método perimetro

// o que é um método? é uma função dentro de um objeto que nada mais é do que variáveis com variáveis dentro.
//Qual seria a outra notação possível para a funçaõ dentro do objeto?
//var x = { area:function(){},}cria como função anônima
//ou direto comm o nome da função area(){},
//Então dentro do objeto o nome da função já se presta para construir a função
var quadrado = {
  //virou objeto
  area: function (oq) {
    return "1";
  },
  //ou
  area(oq) {
    return "1";
  },
};
console.log(quadrado.area(2));

//console(objeto) . log(metodo) é o log(tal coisa)
console.log(console);
//Escrevendo assim e clicando na seta podemos ver outras propriedades que são nomes e métodos que são funções.
console.table(quadrado);
//organiza visualmente a conteúdo dos objetos que são variáveis com mais variáveis dentro
