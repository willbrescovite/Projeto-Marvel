     /*Objetivo 1 - quando passar o mouse em cima do personagem temos que:
                  - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a nimação nele.
                  - Retirar a classe selecionado que está selecionado.
     */

const Personagens = document.querySelectorAll('.personagem')

Personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
    
     const idSelecionado = personagem.attributes.id.value;
    
     if(idSelecionado === 'ultron') return;

     const personagemSelecionado = document.querySelector(".selecionado");
      personagemSelecionado.classList.remove("selecionado");
             
      personagem.classList.add("selecionado");
        
  
      /*
      BJETIVO 2 - Quando passar o mouse em cima do personagem, trocar a imagem e nome personagem grande:
               - Temos que alterar a imagem jogador 1.
               - Também alterar o nome do jogador 1.
      */

      const imagemJogador1 = document.getElementById('personagem-jogador-1');
      imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
         
      const nomeJogador1 = document.getElementById('nome-jogador-1');
      const nomeSelecionado = personagem.getAttribute('data-name');
       
      nomeJogador1.innerHTML = nomeSelecionado;
    });
});
