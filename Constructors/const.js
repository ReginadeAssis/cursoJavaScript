const carro = {
  marca: "Marca",
  preco: 0,
};

//A ideia é aproveitar os itens dessa constante, mas se eu só for mudando o conteúdo honda.marca = honda na vdd eu mudo o conteudo da cons carro
// const carro2 = {
//   marca: 'Marca',
//   preco: 130,
// }

//Parar esolver isso cria uma função "normal" chamada construtura que faz ref a ela mesma chamndo o this. Para usar ela chama o new

function Teste() {
  this.marca = "Marca";
  this.preco = 0;
  this.andar = function () {
    console.log("andou");
  };
}
//O this é simplismente o objeto carro
const honda = new Teste(); //Assim honda é na vdd um objeto que vem do construtor carro
honda.marca = "Honda";
honda.preco = 1000;

const fiat = new Teste();
fiat.marca = "Fiat";
fiat.preco = 6000;

function Teste2(marca, preco) {
  this.marca = marca;
  this.preco = preco;
  this.andar = function () {
    console.log("andou");
  };
} //Pode fazer como atributo tbm

const fiat2 = new Teste2("Fiat", 4000);
