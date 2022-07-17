let botaoAtualizar = document.getElementById('atualizar-saldo') ;
let botaoLimpar = document.getElementById('limpar-saldo') ;
let soma = document.getElementById('soma') ;
let campoSaldo = document.getElementById('campo-saldo') ;

campoSaldo.innerHTML = '0'


function somarAoSaldo(soma) {
    let valorEmNumber = Number(campoSaldo.innerHTML)
    valorEmNumber += soma;
    campoSaldo.innerHTML = valorEmNumber.toString()
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});