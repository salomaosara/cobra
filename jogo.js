function inicioJogo(){
    placar.nomeJogo="Jogo da Cobra"
    placar.pontuacao=0;
    cobra.vida=3;
    cobra.cor="brown";
    cobra.velocidade=2;
    trilha.play();
    jogar();
}

function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    fruta.desenhar();
    if (fruta.teveColisao(cobra)){
        placar.pontuacao+=fruta.valor;
        cobra.crescer();
        cobra.velocidade++;
        comida.play();
        fruta = new Fruta(10);      
    }
    if(placar.pontuacao > 50) {
        placar.nomeJogo = "Você venceu !";
       /* let imgWin = new Image();
        imgWin.src = "you win.gif";
       ctx.drawImage(imgWin, 200, 100, 200, 200);
       */
    }

    if (cobra.vida > 0){
        requestAnimationFrame(jogar);
    }
    else
    {
        trilha.pause();
        trilha.currentTime=0;
        gameover.play();
        placar.nomeJogo = "Fim de Jogo. Clique na tela para jogar...";
        placar.desenhar()  
    }
   

}

let trilha = new Audio();
trilha.src = "musicajogo.mp3";
let comida = new Audio();
comida.src = "musicamastigação.mp3";
let gameover = new Audio();
gameover.src = "musicagameover.mp3";

let fruta = new Fruta(10);
placar.nomeJogo="Clique na tela para começar o jogo..."
placar.desenhar();
tela.desenhar();

document.addEventListener("click",inicioJogo);
document.addEventListener("keydown",(evento) =>{  
    if ((evento.key== "w") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="cima";      
    if ((evento.key== "d") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="direita";
    if ((evento.key== "s") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="baixo";
    if ((evento.key== "a") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="esquerda";
})