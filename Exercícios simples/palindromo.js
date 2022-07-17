function palidromo(string) {
    if(!string) return "string inexistente";
    return string.split("").reverse().join("") === string; //separo-a, revertendo-a e unindo-a, depois checando-a
}

console.log(palidromo("oi"))

const meuObjeto = {
    chave: 1,
    oi : 3
}
   
function findMax() {
    let max = -Infinity;
    for (let i = 0; i<arguments.length; i++) {
        if (arguments[i] > max) { max  = arguments[i]}
        console.log(arguments)
        console.log(arguments[i])
    }
    return max
}
console.log(findMax(1,2,3,6,100,1))
a = "meu nome"
b = "é filipe"

console.log( `${a} ${b}`)