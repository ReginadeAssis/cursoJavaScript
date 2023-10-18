//Quais as opções parar criar uma variável que é um número?
var idade = 28;
var gols = 1000;
var pi = 3.14; //no caso de decimel usa como em inglês
var expo = 2e10; //é literalmente 2 elevado a 10 poderia 2**10.
//Qual a precisão máxima? 
var precisao = 15;
//Quais os operadores aritiméticos básicos, exemplifique:
var soma = 1+1 ;
var subtracao = 1-1;
var multiplicacao = 1*8 ;
var divisao = 1/2;
var expoente = 2**2;
var modulo = 14 % 5 ; //o que ele chama de módulo eu chamo de resto da divisão.
console.log(soma,subtracao,multiplicacao,divisao,expoente,modulo);
//Quando a divisão dá quebrada como pega o último número que faz essa quebra?
var moduloOuRestoDaDivisao = 14 % 5;
console.log(moduloOuRestoDaDivisao);
//o símbolo que ele chama de módulo eu chamo de resto da divisão.
modulo = 2556625 / 2; 
console.log(modulo);
//O que acontece quando adicionamos um número a uma string com os diferentes operadores?
var tentaFazerAOperacaoCasoAStringSejaSonumeroEleFaz = '100' * '2';
console.log(tentaFazerAOperacaoCasoAStringSejaSonumeroEleFaz);
//no caso do operador + não tem papo ele concatena
//O que é o Nan-quando é obtido?
var quandoTemTextoOuMaisNaStringEleNaoSoma = 'comprei' / 2;
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
var nAN1 = 'abc'/4;
var nAN2 = 'cal' + 50;
console.log(nAN1, nAN2);
// Somar a string '200' com o número 50 e retornar 250
var indef = +'200' + 50
console.log(indef);
//caso coloquemos o + ou - no conteúdo da variável ou até mesmo no nome transformamos uma string em um número positivo ou negativo.

// Incremente o número 5 e retorne o seu valor incrementado em 1:
var incrment = 1;
console.log(++incrment, incrment++);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = ++numero / 2 + 'kg'; 
console.log(peso,pesoPorDois);
