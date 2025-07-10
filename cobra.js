const cobra = {
    tamanho:10,
    comprimento:10,
    taxaCrescimento:100,
    cor: "brown",
    velocidade:2,
    direcao:"direita",
    x:[400],
    y:[260],
    vida: 3,
    desenhar(){
        ctx.fillStyle=this.cor;
        for (let i = 0; i < this.x.length; ++i)
                ctx.fillRect(this.x[i],this.y[i],this.tamanho,this.tamanho);
    },
    mover(){
        if (this.direcao=="direita"){
                this.x.unshift(this.x[0]+this.velocidade*1)
                this.y.unshift(this.y[0])
                this.x.pop()
                this.y.pop()
        }
        if (this.direcao=="esquerda"){
                this.x.unshift(this.x[0]-this.velocidade*1)
                this.y.unshift(this.y[0])
                this.x.pop()
                this.y.pop()
        }
        if (this.direcao=="baixo"){
                this.x.unshift(this.x[0])
                this.y.unshift(this.y[0]+this.velocidade*1)
                this.x.pop()
                this.y.pop()
        }   
        if (this.direcao=="cima"){
                this.x.unshift(this.x[0])
                this.y.unshift(this.y[0]-this.velocidade*1)
                this.x.pop()
                this.y.pop()
        }
        if ((this.y[0] < 60) || (this.y[0] > 450)) this.morrer();
        if ((this.x[0] < 0) || (this.x[0] > 790)) this.morrer(); 
        if (this.seComeu()) this.morrer(); 
   
    },
    morrer() {
        this.vida--;
        this.x=[400];
        this.y=[260];
        if(this.vida ==2) this.cor="orange"
        if(this.vida ==1) this.cor="red"
    },
    crescer()
    {
        for (let i = 0; i < this.taxaCrescimento; ++i){
            this.x.unshift(this.x[0]);
            this.y.unshift(this.y[0]);
        }
        this.comprimento+=this.taxaCrescimento;
    },
    seComeu(){     
        if (this.x.length > 1)
                if ((this.x[this.tamanho] != this.x[this.tamanho+1]) || (this.y[this.tamanho] != this.y[this.tamanho+1]))
                        for (let i = 3*this.tamanho; i < this.x.length ; ++i){
                                const distX = this.x[i] - this.x[0];
                                const distY = this.y[i] - this.y[0];
                                if ((Math.abs(distX) < (this.tamanho-5)) 
                                    && (Math.abs(distY) < (this.tamanho-5)))
                                       return true;      
                                 
                }                      
        return false;                    
    }
}