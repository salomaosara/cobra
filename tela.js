const tela = {
    largura: 800,
    altura: 400,
    cor: "pink",
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,60,this.largura,this.altura)
    }
}

