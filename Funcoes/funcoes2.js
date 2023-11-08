//Uma função pode misturar qualquer tipo de dado ainda que não seja uma boa prática

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("a"));

//Quando vc coloca return ele para no primeiro verdadeiro
//Qual a diferença de colocar as variáveis dentro e fora da função
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

//console.log(totalPaises);erro-total não definido
console.log(precisoVisitar(20));
precisoVisitar(20);
//O que é escopo lexico? Como é uma função dentro de uma função?
// As variáveis e seus contextos de acesso, caso ela esteja em um contexto externo uma função pode 'puxar' para dentro
var profissao = "Designer";
function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = "29";
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados(); //outrosDados exibe a função/ com () ele executa a função.
}
console.log(dados());

//O que é hosting ? A propriedade do js de antes de executar qualquer função mover ela para a memória.

function imc(peso, altura) {
  return peso / altura ** 2;
}
console.log(imc(80, 1.8));

//Crie uma função para verificar se o valor é true
function verdade(verdade) {
  if (verdade !== 1) {
    return true;
  } else {
    return false;
  }
}
console.log(verdade(22));

//Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro(l) {
  return l * 4;
}

console.log(perimetro(1));

//Crie uma fuçao que une seu nome e sobrenome
function total(nome, sobrenome) {
  return `${nome} ${sobrenome} é meu nome`;
}
console.log(total("Regina", "Maciel"));

//Crie uma função que verifica se um número é par
function par(imp) {
  if (imp % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
console.log(par(2));
console.log(par(7));

//Crie uma função typeof
function tipo(dado) {
  return typeof dado;
}
console.log(tipo(1));

//Crie uma função que mostre seu nome quando scroll
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

addEventListener("scroll", function () {
  console.log("Regina Maciel");
});
//Tem que ter algo na pg do site para descer e ativar
