//O que é uma função? um bloco de código executável e reutilizável.
//Como é a estrutura de uma função?
var parametro = parametro;
function demonstracao(parametro) {
  return console.log("função da função");
}

demonstracao(parametro);

//Qual a diferença entre parametros e argumentos?
//Quando a função é criada passamos parâmetros. Já para executar passamos argumentos.

//crie a função imc:
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
imc(80, 1.8);

//É obrigatório para uma função possuir argumentos?
//Não, isso depende só da função.
function corfavorita(cor) {
  if (cor === "azul") {
    return "você gosta do céu";
  } else if (cor === "verde") {
    return "você gosta de mato";
  } else {
    return "você não gosta de nada";
  }
}
corfavorita();

//Um argumento pode ser sozinho uma função?
//sim: as callback
addEventListener("click", function () {
  console.log("clicou");
});
