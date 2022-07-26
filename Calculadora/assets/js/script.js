// /**
//  * Tenho um display.
//  * Quando clico nos números, eles são adicionados no display automaticamente.
//  * quando clico no operado, pego o número do display e acumulo, em seguida limpo o display e solicito novos números e adiciono ao acumulador. 
//  * Cliando no igual, trago o resultado.
//  */


const DISPLAY = document.getElementById('display');
// const NUMBER = document.getElementsByClassName('number')
// let displayNumbers = Number(DISPLAY.innerText);
let acumulador = 0;
function addNumber(x) {
    Number(DISPLAY.innerText += x);
    acumulador = Number(DISPLAY.innerHTML);

}
acumulador=DISPLAY.innerText
function addition() {
    DISPLAY.innerText = 0;
    console.log(acumulador)
}


// DISPLAY.addEventListener
//     /**
//  * Pego o número do display, acumulo e zero display
//  * solicito um novo display
//  * somo ao acumulador.
//  * retorno o display como sendo esse acumulador.
 */