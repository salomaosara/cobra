const cobra = {
    tamanho:10,
    cor: "black",
    velocidade:10,
    direcao:"direita",
    x:400,
    y:260,
    desenhar(){
        ctx.fillStyle=this.cor;
        ctx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },
    mover(){
        if (this.direcao=="direita") this.x++;
        if (this.direcao=="esquerda") this.x--;
        if (this.direcao=="baixa") this.y++;
        if (this.direcao=="cima") this.y--;
        console.log(this.x);
    }
}
