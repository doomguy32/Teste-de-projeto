//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

//variáveis do oponente
let xraqueteOponente = 585;
let yraqueteOponente = 150;
let VelocidadeYOponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(0);
    mostrabolinha();
    movimentabolinha();
    verificarcolisaoborda();
    mostrarraquete(xraquete, yraquete);
    mostrarraquete(xraqueteOponente, yraqueteOponente)
    movimentaminharaquete();
   // verificarcolisaoraquete();
    movimentaraqueteOponente();
}

function mostrarraquete(x,y) {
  rect (x, y, raquetecomprimento, raquetealtura);
}
  
function mostrabolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentabolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function movimentaminharaquete() {
  if(keyIsDown(UP_ARROW)) {
    yraquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
  }
}

function verificarcolisaoraquete(x,y) {
    Colidiu = collideRectCircle(x, y, raquetecomprimento, raquetealtura, xBolinha, yBolinha, raio)
    if (Colidiu){
        velocidadeXBolinha *= -1;
    }
}

function verificarcolisaoborda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }

}

function Colisaominharaqutebiblioteca() {
    Colidiu = collideRectCircle(xraquete, yraquete, raquetecomprimento, raquetealtura, xBolinha, yBolinha, raio);
  if (Colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaraqueteOponente() {
  VelocidadeYOponente = yBolinha - yraqueteOponente - raquetecomprimento / 2 -30;
  yraqueteOponente += VelocidadeYOponente
  
}