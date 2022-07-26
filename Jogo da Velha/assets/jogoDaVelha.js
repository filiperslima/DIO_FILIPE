var valorBotao = []
let i = 0;
do {
    valorBotao.push(document.getElementsByTagName('button')[i]);
    
    i++
    }
    while (i<=8);


var valorAtual = 0;

function escolhaXB() {
    valorBotao[0].innerHTML = valorAtual;

}

// valorBotao [0,1,2,3,4,5,6,7,8]