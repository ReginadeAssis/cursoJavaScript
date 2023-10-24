//Quais as opções parar criar uma variável que é um número?
var idade = 28;
var gols = 1000;
var pi = 3.14; //no caso de decimel usa como em inglês
var expo = 2e10; //é literalmente 2 elevado a 10 poderia 2**10.
//Qual a precisão máxima?
var precisao = 15;
//Quais os operadores aritiméticos básicos, exemplifique:
var soma = 1 + 1;
var subtracao = 1 - 1;
var multiplicacao = 1 * 8;
var divisao = 1 / 2;
var expoente = 2 ** 2;
var modulo = 14 % 5; //o que ele chama de módulo eu chamo de resto da divisão.
console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);
//Quando a divisão dá quebrada como pega o último número que faz essa quebra?
var moduloOuRestoDaDivisao = 14 % 5;
console.log(moduloOuRestoDaDivisao);
//o símbolo que ele chama de módulo eu chamo de resto da divisão.
modulo = 2556625 / 2;
console.log(modulo);
//O que acontece quando adicionamos um número a uma string com os diferentes operadores?
var tentaFazerAOperacaoCasoAStringSejaSonumeroEleFaz = "100" * "2";
console.log(tentaFazerAOperacaoCasoAStringSejaSonumeroEleFaz);
//no caso do operador + não tem papo ele concatena
//O que é o Nan-quando é obtido?
var quandoTemTextoOuMaisNaStringEleNaoSoma = "comprei" / 2;
console.log(quandoTemTextoOuMaisNaStringEleNaoSoma);
//A ordem importa? Qual seria ela?
//sim, é multiplicação, divisao, soma e subtração. Entretanto podemos mudar td c ( {[...]})
// O que são os operadores unários? Só precisa de um número.Como usar?
var incrementoQuePodeIrAntesOuDepois = 1;
testeIncremento1 = ++incrementoQuePodeIrAntesOuDepois;
testeIncremento2 = incrementoQuePodeIrAntesOuDepois++;
console.log(testeIncremento1, testeIncremento2);

var decrementoQuePodeVirAntes = 1;
testeDecremento1 = --decrementoQuePodeVirAntes;
console.log(testeDecremento1);

//O que acontece se eu tentar operar com constantes?
//Não acontece.

//A string só com um número dentro ele consegue operar e ainda retorna um número?
//Sim, exceto no caso de + que concatena tudo.

//Ele ignora espaço nas strings? Sim.

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var nAN1 = "abc" / 4;
var nAN2 = "cal" + 50;
console.log(nAN1, nAN2);
// Somar a string '200' com o número 50 e retornar 250
var indef = +"200" + 50;
console.log(indef);
//caso coloquemos o + ou - no conteúdo da variável ou até mesmo no nome transformamos uma string em um número positivo ou negativo.

// Incremente o número 5 e retorne o seu valor incrementado em 1:
var incrment = 1;
console.log(++incrment, incrment++);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = ++numero / 2 + "kg";
console.log(peso, pesoPorDois);
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao22 = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao22);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
//Para começar coloca tds elas no console.log dps !! na frente. Variável sem nada dentro dá undeffined que é falso
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil");
} else {
  console.log("China");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
//Porque o e procura e para no primeiro falso.
// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
//Como usa bolean? 0 p falso 1 para verdadeiro
//Em geral usamos if(coisa avaliada){condição caso //verdadeiro;} else{condição coso falso;}
//Com a estrutura abaixo faça com que ele mostre undefined e o valor de x na tela:
let x;
var possuiGraduacao = true;
if (possuiGraduacao) {
  console.log(x);
} else {
  console.log("É mentira");
}
//ou
var y = 10;
var possuiGraduacao = true;
if (possuiGraduacao) {
  console.log(y);
} else {
  console.log("É mentira");
}
//Qual a diferença entre usar o let e o var?
//Com o let ele cria a variável de qualquer forma
//Como funciona essa questão de else if?
//Você pode usar quantos else if quiser, mas o final é else.
//Crie uma condicional que expõe o nome se ele existir
var nome34 = "André";
if (nome34) {
  console.log(nome);
} else {
  console.log("não tem nome");
}
//Como fazer se eu quiser que dê negativo obrigatoriamente?
//Posso atribuir um dos valores: false, 0, NaN, null, undefinned, espaço textual com ' " ou ` todo o resto é true
//Como negar uma expressão? Adicionando ! no valor que a variável recebe. If(!variável)
//Como saber dps de manipulada qual era o valor original da expressão? Adicionando 2x !
var tentativa22 = "azul";
if (tentativa22) {
  console.log("É verdade");
} else {
  console.log("É falso");
}
if (!tentativa22) {
  console.log("É verdade");
} else {
  console.log("É falso");
}
//Defina:
//= atribui valor
//== vê se é semelhante
//=== vê se é control c control v
//Como ver se é diferente?
//Colocando !
var gato = "gato";
console.log(gato !== "gato");
