function mudarModo () {
    mudarClasses();
    mudarTexto();

}
function mudarClasses() {
    console.log("apertou")
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)

}
function mudarTexto() {
    if (button.classList.contains('dark-mode')) { //Se contém... (contains= contém tal coisa.)
        h1.innerHTML = 'Dark Mode ON';
        button.innerHTML = 'Light Mode';
        return;
    }
    else {
        h1.innerHTML = 'Light Mode ON'
        button.innerHTML = 'Dark Mode'
    }

}

const darkModeClass = 'dark-mode' //Só pra evitar digitar tanto.
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const button = document.getElementById('mode-selector')
const h1 = document.getElementsByTagName('h1')[0]


button.addEventListener("click", mudarModo)


