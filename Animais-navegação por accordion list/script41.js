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

//0311
