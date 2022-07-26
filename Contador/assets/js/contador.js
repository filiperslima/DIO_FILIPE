var numeroAtual = 0;

var numeroAtualElemento = document.getElementsByClassName('numeroAtual');

function increment() {
    numeroAtual++;
    numeroAtualElemento.innerHTML = numeroAtual;
}
function decrement() {
    numeroAtual--;
    numeroAtualElemento.innerHTML = numeroAtual;
}
