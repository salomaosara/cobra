function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    requestAnimationFrame(jogar)
}
jogar();