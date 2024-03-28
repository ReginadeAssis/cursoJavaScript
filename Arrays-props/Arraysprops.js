// //array armazena uma coleção diversa de elementos pode conter td até mesmo um outro array
// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// dados[0]; //retorna o new string como se vc tivesse digitado isso
// dados[2]("Ford"); //passou um valor p o elemento que chamou pq na vdd é uma função o elemento que vem do array
// dados[1][2].cor; // azul usa dois [] pq é array dentro de outro array caso tivesse mais usa mais sem problema. Como esse elemento do array é um objeto vc pode acessar as propriedades dele direto como no exemplo acima.

// //pode criar tradicional ou usando o construtor new array as duas linhas abaixo demonstram isso e tem um resultado igual.
// const instrumentos22 = ["guitarra", "baixo", "violão"];
// const naves = new Array("Corola", "Mustang", "Honda");
// //e vc continua podendo substituir e atribuir diretamente no array
// naves[2] = "Parati"; //sai honda e entra parati
// //Entre os metodos diretos do array estão o array from ele transforma um objeto que se parece com uma array em uma array real

// let li = document.querySelectorAll("li"); // NodeList parece array mas n é.
// li = Array.from(li); // Array

// const carros33 = {
//   0: "Fiat",
//   1: "Honda",
//   2: "Ford",
//   length: 4, //tem que add isso para que ele consiga transformar em array caso contrário não funciona
// }; //no lugar de nomes ele passou numeros como "index"

// const carrosArray = Array.from(carros33);
// //O Array.isArray(li) fala se o que está dentro do () é array

// //Também tem outras formas de criar array:
// Array.of(10); // [10]
// Array.of(1, 2, 3, 4); // [1,2,3,4]
// new Array(5); // [,,,,] cria vazio com 5 espaços
// Array(5); // [,,,,]
// Array(1, 2, 3, 4); // [1,2,3,4] com mais de um elemento no parentese ele entende que os elementos são o array.

// //Também temos:

// const instrumentos99 = ["Guitarra", "Baixo", "Violão"];
// instrumentos99.sort();
// instrumentos99; // ['Baixo', 'Guitarra', Violão] coloca em ordem alfabetica

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8] coloca em ordem crescente de acordo com o primeiro caracter ou seja não considera o numero td

// const carros = ["Ford", "Fiat", "VW"];
// carros.unshift("Honda", "Kia"); // 5
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']; adiciona elementos no inicio da array
// //const novaArray = carros.push('Parati', 'Gol'); essa novaArray na vdd retorna os 7 itens que tem na array carros contando com gol e parati.

// carros.push("Ferrari"); // 6
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']; adiciona elementos no fim da array

// const carros98 = ["Ford", "Fiat", "VW", "Honda"];
// const primeiroCarro = carros.shift(); // 'Ford' tira o primeiro e retorna
// carros98; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros.pop(); // 'Honda'
// carros; // ['Fiat', 'VW']; tira o ultimo e retorna

// const carros66 = ["Ford", "Fiat", "VW", "Honda"];
// carros66.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
// //inverte de vez td

// //[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
// const aviao = ['Ford', 'Fiat', 'VW', 'Honda'];
// //abaixo a partir do 1 ele remove kia e mustang o segundo valor é quantos itens vc quer remover
// aviao.splice(1, 0, 'Kia', 'Mustang'); // []
// aviao; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// aviao.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW'] pq o retorno do splice é o item removido.
// //a partir do terceiro ele add ferrari e remove 2
// aviao; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
// //.aqui na frente pode vir a array td direto ou vc pode colocar dentro de um objeto copyWithin começa com o alvo a partir do 2 ele copia a array do item 0 até o item 3
// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // ['Item1', 'Item2', 'Item1', 'Item2']

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // ['Item1', 'Item2', 'Item3', 'Item1']

// //O fill preenche de onde vc colocou ate o fim da array ou vc pode determinar um fim
// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']

// //O legal do de acesso é que ele não muda a array
// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2);
// // ['Barco', 'Aviao', 'Carro', 'Moto']; retorna as duas juntas mas a original continua igual

// const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
// //Aqui passou uma array vazia e pediu para ele unir as duas e ainda incluir o van.

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
// //O includes procura na array e diz se tem ou não
// linguagens.includes('css'); // true
// linguagens.includes('ruby'); // false
// //procura e diz o index do primeiro que encontra o resto ignora
// linguagens.indexOf('python'); // 4
// linguagens.indexOf('js'); // 2
// //procura e diz o index do último-faz do avesso a procura
// linguagens.lastIndexOf('js'); // 5

// //O join pega td a array e transforma em uma string unica o que vc põe dentro do espaço é o que ele usa para juntar por padrão entra a ,
// const linguagens55 = ['html', 'css', 'js', 'php', 'phyton'];
// linguagens55.join(); // 'html,css,js,php,python'
// linguagens55.join(' '); // 'html css js php python'
// linguagens55.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>'] corta ela sempre que aparecer h2 e retorna array
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1> volta e junta agr como h1

// //o slice retorna a partir da ref que vc usa ali no caso a partir do terceiro primeiro já no segundo caso vc deu inicio e fim e ele para no elemento do index de fim
// // const linguagens = ['html', 'css', 'js', 'php', 'python'];
// // linguagens.slice(3); // ['php', 'python']
// // linguagens.slice(1, 4); // ['css', 'js', 'php']

// // const cloneLinguagens = linguagens.slice();
// //assim vc clona pq diz que o resultado desse método é uma nova array. Caso vc digite clonearray= linguagens vc só está fazendo uma ref para linguagens.
// //é  comum usar o slice para clonar arrays pq quando vc deixa vazio ela retorna a string inteira
// //console.log(linguagens); é diferente de console.log(linguagens.slice()) mesmo que o resultado aparente ser igual.
