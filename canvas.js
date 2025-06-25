const elemento = document.querySelector("canvas");
const ctx = elemento.getContext("2d");

function setup(){
    elemento.width = ctx.width = screen.width;
    elemento.height = ctx.height = screen.height;
}
setup();
