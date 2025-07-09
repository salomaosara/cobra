function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    fruta.desenhar();
    if (fruta.teveColisao(cobra)){
        placar.pontuacao+=fruta.valor;
        cobra.crescer();
        comida.play();
        fruta = new Fruta (10)
    }
    if (cobra.vida > 0)
    requestAnimationFrame(jogar)
    }
    {
        trilha.pause();
        trilha.currentTime=0;
        gameover.play();
        placar.nomeJogo = "Fim de Jogo. Clique na tela para jogar...";
        placar.desenhar()
    }


const trilha = new Audio();
trilha.src= "musicajogo.mp3";
const comida = new Audio();
comida.src= "musicamastigação.mp3";
const gameover = new Audio();
gameover.src= "musicagameover.mp3";
let apple = new Apple(10);
placar.nomeJogo="Clique na tela para começar o jogo..."
placar.desenhar();
tela.desenhar();

let fruta = new Fruta(10);
jogar();
 
document.addEventListener("keydown",(evento) =>{
    if (evento.key=="8") cobra.direcao="cima";
    if (evento.key=="6") cobra.direcao="direita";
    if (evento.key=="2") cobra.direcao="baixo";
    if (evento.key=="4") cobra.direcao="esquerda";
}  )