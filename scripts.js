let imagem = document.querySelector(".Starbucks");
let circulo = document.querySelector(".circulo");

function trocaImagem(endereco) {
  imagem.src = endereco;
}

function TrocaCor(cor) {
  circulo.style.background = cor;
}
