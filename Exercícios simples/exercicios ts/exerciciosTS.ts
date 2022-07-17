let employee: {codigo: number, nome: string} = {
    codigo: 10,
    nome: "Eduardo"
}

interface Pessoa {
    nome: string,
    idade: number
    profissao: number
}

enum Profissoes {
    "Atriz",
    "Padeiro"
}

let pessoa1: Pessoa = {
nome: "maria",
idade: 29,
profissao: Profissoes.Atriz }

let pessoa2: Pessoa = {
nome: "roberto",
idade: 19,
profissao: Profissoes.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
}




let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0'


function somarAoSaldo(soma: number) {
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