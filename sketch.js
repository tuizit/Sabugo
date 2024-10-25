function setup() {
  createCanvas(400, 400);
  
  
  let palavras = ["Caminhante", "Caminho", "Caminha"]; // lista de palavras
  
  palavra = random(palavras); // palavra escolhida aletoriamente
}

function inicializaCores() { // função para inicialiazar
  
  background("white"); // fundo branco
  fill("black"); // letra preta
  textSize(64);// tamanho do texto
  textAlign(CENTER, CENTER); // texto centralizado
}

function draw() {
  
  inicializaCores(); // ativar a função que inicializa

  let maximo = width; // maximo igual a largura
  let minimo = 0; // minimo igual a 0
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
}
