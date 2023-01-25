const botaoTrailer = document.querySelector(".botao-trailler");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video"); // pegar o elemento pelo id
const linkDoVideo = video.src;


function alternarModal(){
   // passo 4 - abrir a modal na tela
   modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => { // quando clicar no botaoTrailer faça uma acão
  
  alternarModal(); // chama a funcão

  video.setAttribute("src", linkDoVideo); // voltar o video

});


// passo 2 dar um jeito de identificar quando o usuario clicar no X

botaoFecharModal.addEventListener("click", () => {
  
  alternarModal();
  
  video.setAttribute("src", "");// add um novo atributo ou modificar o valor de um atributo existente num elemento espeficico
});



