//Declare uma variável contendo uma string
var nome1 = "Regina";
console.log(nome1);
//Declare uma variável contendo um número dentro de uma string
var numeroString = "22";
console.log(numeroString);
//Declare uma variável com a sua idade
var idade = 25;
console.log(idade);
//Declare duas variáveis, uma com seu nome
//outra com seu sobrenome e some
var nome = "Regina";
var sobrenome = "Assis";
var nomeESobrenome = nome + " " + sobrenome;
console.log(nomeESobrenome);
//Coloque a seguinte frase em uma variável:It's time
var itIsTime = "It's time";
console.log(itIsTime);
//Verifique o tipo da variável que contém seu nome
//op1-cria uma variavel e atribui a ela o tipo de conteúdo de uma outra
console.log(typeof nome);
var identificacao = typeof nome;
//op2
console.log(identificacao);
//Liste os tipos de dados(7) e classifique em primitivo e não primitivo:
//String(p); Number(p); Boolean(p); Undeffined(p-cria objeto 
//sem valor); Null(p); Symbol(p) e Object(np)
//Crie uma variável 
var simbolo = Symbol ();
console.log(typeof simbolo);
//Qualquer dado somado a uma string vira uma string.
//A soma pode ser mesclada tbm var soma = 'tal coisa' + variável +'outra';
//Para anular as aspas duplas é só colocar a barra na frente.
//"Aprendendo \"javascript"\" aqui"
//Cuidado com $ template string poruqe ou usa ele ou o +
var gols = 1000;
var frase1 = 'Romario fez' + gols + 'gols';
var frase2 = `Romário fez ${gols} gols`;
console.log(frase1,frase2);
//Observe Regina como você pode colocar a função dentro de uma variável:
var nome = 'Regina';
var verificarTipo = typeof nome;
console.log(verificarTipo);
