///A relação é de um para um é um item para um conteúdo
//<ul class="animais-lista js-tabmenu"> lá no html colocou assim para informar que esse html está sendo manipulado no js ou <ul class="animais-lista data-jdsa="">
//é preciso colocar isso nas duas partes que quer ligar no caso a lista de imagens e o conteúdo <div class="animais-descricao js-tabcontent">
//Em seguida seleciona os elementos com os quais vc quer trabalhar
const tabmenu = document.querySelectorAll(".js-tabmenu li"); //quer o evento em cd li que é a imagem
const tabcontent = document.querySelectorAll(".js-tabcontent section");
//Criar uma função que add classe de acordo com o número passado
function activeTab(index) {
  tabcontent.forEach((section) => {
    section.classList.remove("ativo");
  }); //Fez essa parte pq sem ela ele não limpa a classe ativo dos anteriores só add em td sem limpar
  tabcontent[index].classList.add("ativo"); //chamou o que selecionou e colocou com a propriedade uma classe
}
//Agora é para add o evento de clique e a função passando o número do que foi clicado
tabmenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", function () {
    activeTab(index);
  });
  //itemMenu.addEventListener('click', activeTab(index)); não pode passar assim pq daria problema na função para resolver eu passo uma função e dentro dela o index
});
//passou dois argumentos pq o item é onde clicou e o index é o texto com mesmo número. Adicionou o loop com o for each e o evento dentro
//0309
