const comida = "Pizza";
//td string possui as propriedades e métodos do prototype string acima cria string abaixo tbm cria string a diferença é que ela já sai como objeto
const liquido1 = new String("Água");
const ano = new String(2018);
//Entretanto em ambos se eu coloca . tem as mesmas propriedades agua.toLowerCase

// que prestar atenção basicamente no que tem disponível caso vc crie string é string
console.log(comida.length);
//também pode usar essa string como array
comida[0];
//frase[0];

//O charAt(n) faz com que a gente acesse por um método as mesma propriedades do array
//é bem literal caracter no index(0-zero)
console.log(comida.charAt(1));

//O concat segue a mesma lógica só que para concatenar
const liquido = comida.concat("teste 1", "teste2", "teste3");

//O includes ele procura na string e mostra na ordem(procura, posição)
const fruta = "Banana";
const listaFrutas = "Melancia, banana, laranja";
listaFrutas.includes(fruta); // true ele procura na lista frutas a fruta que é na vdd a banana
fruta.includes(listaFrutas); // false ele tenta procurar mas dentro da fruta não tem uma lista de frutas
//Vc tbm pode colocar a , e ele procura a partir da posição que você determinou listaFrutas.
// true includes(fruta, 1);

//Nesse caso estou buscando saber se começa/termina com esse conteúdo
fruta.endsWith("nana");
true;
fruta.startsWith("Ba");
true;

//Não esqueça que para ele mostrar vc tem que usar o console.log
//E nenhum desse métodos altera a string

//Para cortar uma string de um pedaço ao outro dá para usar o slice
const transacao1 = "Depósito do Cliente";
const transacao2 = "Depósito do Fornecedor";
const transacao3 = "Taxa das camisas";

transacao1.slice(0, 3); //Dep- começa do zero e retorna os 3 próximos
transacao2.slice(0, 3); //Dep
transacao3.slice(0, 3); //Tax

transacao1.slice(12); //cliente
transacao2.slice(-4); //ente
transacao3.slice(3, 6); //dsi

//Em teoria também tem o substring como versão resumida
const linguagem = "JavaScript";
linguagem.substring(3, 5); //aS
linguagem.substring(0, 4); //Java
linguagem.substring(4); //Script
linguagem.substring(-3); //JavaScript

//É possível que vc busque com o .indexOff e o .lastIndexOff, mas tem que tomar cuidado pq ele só exibe o primeiro resultado que ele encontra

const instrumento = "Guitarra";
instrumento.indexOf("r"); //5
//6 instrumento.lastIndexOf("r");
instrumento.indexOf("ta"); //3

//Pensando em aumentar depois de já ter criado .padStart(n, padrão de preenchimento) e .padEnd(n, ?)
//Essa propriedade justamente aumenta para o valor n se vc não declarar não tem problema porque ele vai adicionando espaços para completar.
const listaPrecos = ["R$99", "R$9119", "R$911119", "R$99111"];
listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // …R$99
listaPrecos[0].padEnd(10, "."); //R$99……

//Isso em geral é usado para alinhamento

const listaPrecos2 = ["R$99", "R$9119", "R$911119", "R$99111"];
listaPrecos2.forEach((item) => {
  console.log(item.padStart(10, "-"));
});

//Existe ainda a possibilidade de repetição string.repeat(número de repetições)
const frase2 = "Ta";
//frase.repeat(5); // tatatatata

//Agora substituindo itens:
let listaItens3 = "Camisas bones calças bermudas vestidos saias";

listaItens3 = listaItens3.replace("Camisas", "Shirts");
//-pega a lista de itens e altera, tira a camisa e põe shirts
console.log(listaItens3);

//Para add um espaço em tds é necessário usar uma regular expression antes e ele põe em tds:
//listaItens = listaItens.replace(/[ ]+/g, ",");

//Dá para quebrar sem substituir:
const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" ");

//É comum usar textos html:

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";

const htmlArray = htmlText.split("div"); //usa isso para quebrar em td div que encontrar. //Lembrando que o que está dentro de split é removido

const htmlNovo = htmlArray.join("section");

//string.join("o que está aqui dentro junta tds as palavras no fim");
//Aqui ele usa essa combinação para tirar a categoria div e passa para section

//llower e uooer case não tem misterio e serve para ajustar o que o usuario digitou

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

//Por fim o trim  que puro remove td, start remove o da frente e end remove o do fim:

const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes3 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

//Mantenha a calma, é um array com vários objetos dentro. Para pegar o que tem dentro de cada objeto eu peço para o array o objeto coloco o . para acessar suas propriedades e pronto.
//transacoes3[0].valor;  //’39’

//Cria a variável para somar os valores das taxas
//let taxaTotal = 0;

//transacoes.forEach( (item) =>{
//if (item.descricao.includes('Taxa')
//pega tds os que tem taxa dos objetos chamados de item t/f
//taxaTotal = taxaTotal + item.valor
//});

//console.log(taxaTotal); //ele pega td com letra número uma bagunça …arrumado:

//Cria a variável para somar os valores das taxas
//let taxaTotal = 0;

//transacoes.forEach( (item) =>{
//const numeroLimpo = +item.valor.replace(‘R$ ’ , ‘’); //Pega o rs e substitui por nada o + na //frente da string item é para transformar ele em número
//if (item.descricao.includes(‘Taxa’)
//pega tds os que tem taxa dos objetos chamados de item t/f
//taxaTotal = taxaTotal + numeroLimpo;
//});

//Agora para somar recebimento total dá para usar o else:

//Cria a variável para somar os valores das taxas
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes3.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", ""); //Pega o rs e substitui por nada o + na frente da string item é para transformar ele em número
  if (item.descricao.includes("Taxa")) {
    //pega tds os que tem taxa dos objetos chamados de item t/f
    taxaTotal = taxaTotal + numeroLimpo;
  } else if (item.descricao.includes("Recebimento")) {
    recebimentoTotal = recebimentoTotal + numeroLimpo;
  }
});

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
//Usa a propriedade split para quebrar no ; e criar o array
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

//Primeiro pega a string e divide ela em arrays
html = html.split("span").join("a");
//o split ele quebra e dps já pode jogar direto o join a que ela junta
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[frase.length - 1]);
//ou console.log(frase.slice(-1)); pega o ultimo o -2 o antipenultimo...

// Retorne o total de taxas
const transacoes22 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxaTotal66 = 0; // cria uma variavel para somar tds as taxas dentro dela.
transacoes22.forEach((item) => {
  //pega  faz um for each já que são vários limpa colocando com letra minuscula e dps usando o trim
  item = item.toLowerCase().trim().slice(0, 4);
  //pega as 4 primeiras o slice
  if (item === "taxa") {
    item = item + taxaTotal66;
  }
});
console.log(taxaTotal66);
