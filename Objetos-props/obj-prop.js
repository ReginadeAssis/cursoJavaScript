//dá p criar o objeto de duas formas tbm pelo constutor ou livre
const carro = {
  marca: "ford",
  ano: 2018,
};

const pessoa = new Object({
  nome: "André",
  idade: 28,
});

//já o object creat é mais usado pq facilita a duplicação
const carro3 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this; //tem que ser this para ele chamar o objeto td e não só o que retorna
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + "buzinou";
  },
};

const carro2 = Object.create(carro3);
carro2.init("honda").acelerar(); //objeto que eu crieichamando uma função do objeto mãe que é o carro 3
console.log(carro2.init("honda").acelerar());

//criou outra constante usando esse método object. create e aproveitando as props dp objeto carro 3
const ferrari = Object.create(carro3);
console.log(ferrari.init("ferrari").acelerar());

//Em se tratando do objeto.assign (alvo,objt1, obj2) e o metodo modifica o objeto alvo adicinando os metodos do sobjetos posteriores nesse alvo
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};
const moto = {
  rodas: 2,
  capacete: true,
};
const automovel = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel); //adicionou na moto a funcao automovel
Object.assign(automovel, funcaoAutomovel); //add no automovel essa função
console.log(automovel); //já dá p ver q add

//Object.getOwnPropertyDescriptors(Array); -quando vc digita isso no console ele mostra tds os metodos disponiveis para uso no objeto com a descrição enumeravel? get/set?
//Object.getOwnPropertyDescriptors(Array.prototype)-aqui inclui os do prototipo não só mais os do array;
//Object.getOwnPropertyDescriptors(window, 'innerHeight')-aqui mostra só o que vc pediu;
//o wtitable é se vc pode escrever "por cima".
//como exemplo pode digitar no console um objeto que vc já tenha Object.getOwnPropertyDescriptors(moto);

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis. retorna uma array com as chaves

const carro555 = {
  marca: "Ford",
  ano: 2018,
};
Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018] pega só o valor da chave
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]] aqui ele pega chave e valor

//A maior parte dos prototipos de array não são enumeraveis pq ele serva mais como uma forma de envolver e colocar metodos e propriedades nos arrays.

//Esse Object.getPrototypeOf()-vê a "alma" do objeto e object.is()- ve se a origem dos objetos é igual
const frutas = ["Banana", "Pêra"];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(""); // String

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];

Object.is(frutas1, frutas2); // false

//vc pode add no array direto novaFruta[0] ='uva'; ou add uma nova prop ao objeto carro.portas = 4 ele coloca no objeto carro com 4 portas. tbm poderia deletar delete carro.marca;
//Tbm tem formas de vc proteger seu objeto o freeze não deixa mudar, o seal não deixa deletar o prevent só previne
const carro333 = {
  marca: "Ford",
  ano: 2018,
};
Object.freeze(carro);

Object.freeze(carro333);
Object.seal(carro333);
Object.preventExtensions(carro333);

Object.isFrozen(carro333); // true
Object.isSealed(carro333); // true
Object.isExtensible(carro333); // false

carro333.marca = "Honda";
console.log(carro333); //ele muda a marca p honda se lá emcima vc não tirar o objeto

//outra coisa que dá p fazer é consultar direto no console console.log(Object.isExtensible(carro));
