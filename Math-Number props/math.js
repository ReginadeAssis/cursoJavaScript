//O number assim como a string vai ter suas propriedades prtotype
const ano = 2018;
const preco = new Number(99);

Number.isNaN(NaN); //vê se é nan
Number.isNaN(5);
Number.isNaN("d5");
console.log(Number.isNaN("d5"));

let objeto = {
  nome: "Anna",
  cor: "Azul",
};
console.log(objeto);
console.log(objeto.nome);

//O integer é para dizer que não tem decimal que é número inteiro
Number.isNaN(NaN);
Number.isNaN(4 + 5);
Number.isInteger(20);
Number.isInteger(20.6);

//O parse float é igual Number.parseFloat retorna um número a partir de uma string  caso seja quebrado ele retorna td
// O parse int ele corta e expõe só a parte inteira
parseFloat("11a"); //NaN é not a number
parseInt(100.27);

//igual:
Number.parseFloat(100.27); //NaN é not a number
Number.parseInt(100.27); //aqui em geral é para vc colocar a casa decimal, mas se passar ele já vai automático
parseInt("99.50", 10);

//objeto que tem o numero que vc quer.toFixed ele arredonda;
const preco2 = 2.99;
console.log(preco2.toFixed());
//console.log(preco2.toFixed(numero de casa decimais que eu quero));
//Mas cuidado pq ele quando retorna o numero modificado ele vem string-coloca o + na frente e vai para numero.
console.log(preco2.toFixed() + 9059);
console.log(+preco2.toFixed() + 9059);

// com o numero direto não funciona 99.99.toFixed, mas com o () funciona (99.99).toFixed

//O toString passa o numero para string
const preco99 = 2.99;
preco99.toString(10); //O 10 aqui não é o numero é dizendo que a casa decimal é 10 o radix

//numero que vc quer.toLocateString(linguagem, opção); transforma lingua em moeda por exemplo
let azul = 59.99;
azul = azul.toLocaleString("en-Us", { style: "currency", currency: "USD" });
//(ligua que eu quero, estilo que eu quero(currency é moeda) e currency usd é da onde eu quero a moeda)
console.log(azul);

//O math sozinho já é um, objeto mesmo e com ele a gente faz diferentes operações
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);

Math.abs(-5.5); // 5.5 retorna o módulo do número Math.abs(3-7) pode fazer operações ali dentro mesmo
Math.ceil(4.8334); // 5 arredonda para valor inteiro para mais 4.3 vai para 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4 arredonda para baixo mesmo "errado"
Math.floor(4.3); // 4
Math.round(4.8334); // 5 arredonda de acordo com as regras matemáticas 4.2 vai para 4
Math.round(4.3); // 4

Math.max(5, 3, 10, 42, 2); // 42 cata na lista o max
Math.min(5, 3, 10, 42, 2); // 2 cata na lista o min

Math.random(); // 0.XXX cata numero aleatorio 0-1
Math.floor(Math.random() * 100); // numero aleatorio entre 0 e 100
Math.floor(Math.random() * 500); // numero aleatorio entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
//Math.floor(Math.random() * (max - min + 1)) + min; o max e o min é quando vc quer um número entre o intervalo desejado
const teste55 = Math.floor(Math.random() * (10 - 20 + 1)) + 10;
console.log(teste55);

const aleatorio1 = Math.floor(Math.random() * 500); //arredonda o numero aleatorio
console.log(aleatorio1);

// Retorne um número aleatório
// entre 1050 e 2000
const teste555 = Math.floor(Math.random() * (1050 - 2000 + 1)) + 10050;
console.log(teste555);
//Math.floor ele queria arredondar o math random

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numeros23 = [4, 5, 20, 8, 9];
console.log(Math.max(numeros23));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPreco = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  //O + transforma em numero pq essas propriedades retorna strings deps põe letra maiuscula dps tira o r$ e põe nada dps tira tds os espaços e por fim tira a , e põe o .
  preco = +preco.toFixed(2); //prende em duas casas decimais
  return preco;
}

let soma = 0;
listaPreco.forEach((preco) => {
  soma = soma + limparPreco(preco);
});
console.log(soma);
