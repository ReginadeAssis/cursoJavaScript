// Vai selecionar cada elemento da lista de perguntas abaixo do faq, add uma classe que inclua o texto abaixo.
//é bom isolar o conteúdo do js dentro de uma função e dps ativar para poder criar outras funções com mesma variáveis sem dar conflito
//Add no faq a classe js-accordion
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt"); //selecionou o titulo de cada item da lista dps add um evento a cada item da lista não esquece é o all!!
  //var array = Array.from(accordionList);
  if (accordionList.length) {
    accordionList[0].classList.add("ativo"); //adiciona o primeiro item automaticamente a classe que o ativa
    accordionList[0].nextElementSibling.classList.add("ativo"); //adiciona ao proximo elemento a classe ativo
    function activeAccordion(event) {
      //função que será o evento acionado esse current target mostra o dd do dt onde está clicando
      //console.log(event.currentTarget); //pode substituir o currentTarget por this pq é o item q vc está clicando que ele retorna. isso exibe o dt para testar
      this.classList.add("ativo"); // adiciona a mesma classe no dt. Caso queira que volte a sumir troca .add por toggle
      this.nextElementSibling.classList.add("ativo"); //lembrando que this é AccordionList ele add uma classe para fazer o dd aparecer joga isso como estilo no css linha 245. Caso queira que volte a sumir troca .add por toggle
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion(); //isolou nessa funçção para não dar problema no código

//Em resumo com o java vc seleciona e coloca um evento para adicionar uma classe ao clique em kd elemento da variável que vc criou. As coisas que essa classe vai fazer vão p css. Por fim tem que ver se accordion List existe para ser ativado
//if(accordionList.length) se existir tem tamanho que é o q o .lenght traz

///A relação é de um para um é um item para um conteúdo
//<ul class="animais-lista js-tabmenu"> lá no html colocou assim para informar que esse html está sendo manipulado no js ou <ul class="animais-lista data-jdsa="">
//é preciso colocar isso nas duas partes que quer ligar no caso a lista de imagens e o conteúdo <div class="animais-descricao js-tabcontent">
//Em seguida seleciona os elementos com os quais vc quer trabalhar
function um() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li"); //quer o evento em cd li que é a imagem
  const tabcontent = document.querySelectorAll(".js-tabcontent section");
  //pode dar problema se a pessoa estiver em outra parte da página onde esses elementos não existem ai ele cria uma verificação-se existir ativa o código de baixo caso não, não faz nada. Só funciona se tiver o tabmenu e o content:
  if (tabmenu.length && tabcontent.length) {
    //Criar uma função que add classe de acordo com o número passado:
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
  }
}
//passou dois argumentos pq o item é onde clicou e o index é o texto com mesmo número. Adicionou o loop com o for each e o evento dentro

// tabcontent[0].classList.add(ativo); explorou a propriedade da classe tab content para adda a classe ativo caso o html estivesse indisponivel

um(); //isolou nessa funçção para não dar problema no código

//entrou no developer.mozilla para colocar o scrool suave como link interno
//Para começar selecionou os links que queria add o efeito atribuindo a classe js-menu que dps no estilo vai receber o conteúdo. A adição da classe nos elementos fica por conta do addevent de um foreach e do uso da propriedade addclass
function initScroolSuave() {
  const linksInternos = document.querySelectorAll('.js-links a[href^="#"] '); //o que começar com ess # é link interno
  function scrollToSection(event) {
    event.preventDefault(); //só para anular o padrão
    const href = event.currentTarget.getAttribute("href"); //criou constante p pegar o link
    const section = document.querySelector(href);
    const topo = section.offsetTop; //coloca esse offset aqui para ele não descer sem parada
    windows.scrollTo(0, topo); //os 3 eixos de movimentação hori, verti. Pode passar uma variável como ref para movimentação
    windows.scrollTo({
      top: topo,
      behavior: "smoth", //isso não tem em td navegador e é o que faz descer devagar
    });
    //ele dá mais opções de vc colocar objetos como opção tem a função scroolintoview
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScroolSuave();

function doScroll() {
  // Animação de sumir:
  //Para animar cada parte é preciso selicionar a parte
  const sections = document.querySelectorAll(".js-scroll"); //abaixo vê se sections existe e executa td
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    //Acima seleciona a metade da tela para tirar do valor de ref do topo p não sumir com o conteúdo
    //cria uma função que será ativada no momento que a pessoa ativar o scroll
    function animaScroll() {
      //Para animar tem q saber a distancia de cada elemento em relaçao ao topo
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        //esse metodo getbounding pega a distancia e com o .top especifica de onde-quando está menor que zero passou do topo
        if (sectionTop < 0) {
          //adiciona uma classe que vai fazer as alterações quando eu passsar peços titulos pq quando passa fica menor q zero a ref do elemento para o topo
          section.classList.add("ativo2"); //css linha 331
        } else {
          section.classList.remove("ativo2"); //limpa a animação removendo a classe
        }
      });
    }
    //Agora para adicionar o evento de scroll a gente add o objeto window pq o scroll que vc dá no site é nele td
    window.addEventListener("scroll", animaScroll);
    animaScroll();
  }
}
doScroll(); //agrupa td a função para evitar problema

