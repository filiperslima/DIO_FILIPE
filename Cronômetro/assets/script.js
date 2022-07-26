/**
 * Funções de tempo/intervalo
 *  setInterval(função, tempo) - Com esta função nativa, faço com que a função seja executada repetidamente a cada tempo definido
 *  setTimeout (função, tempo) - Com esta função nativa, faço com que a função seja executada após o tempo definido.
 *  clearInterval(setInterval) - Com esta função nativa, faço com que a função setInterval, armazenada numa variável, seja parada.
 *  clearTimeout (setTimeout)  - Com esta função nativa, faço com que a função setTimeout, armazenada numa variável, seja parada.
 */
const Contador = document.getElementById('contador')
const Iniciar = document.getElementById('iniciar')
let cent = 0
let seg = 0
let intervalo = 0

Iniciar.addEventListener("click", IniciarContador, {once:true}) // addEventListener adiciona um evento.

function IniciarContador(){
    intervalo = setInterval(contar, 10);
};
const contar = function() {
    cent++
    if (cent==99) {
        seg ++
        cent = 0
    }
    return Contador.innerText = seg+':'+cent
}

function PausarRetornar(){
    clearInterval(intervalo) 
    Iniciar.addEventListener("click", IniciarContador, {once:true})
};

function Resetar(){
    seg = 0
    cent = 0
    Contador.innerText = seg+':'+cent
};
