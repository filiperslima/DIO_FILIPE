const container = document.getElementById("container");
const start = document.getElementsByClassName('start')[0];

start.addEventListener('click', startFrame)

function startFrame() {
    start.style.display = "none";
    return createDivButton();

}

function createDivButton() {

    for (let i = 0; i <= 8; i++) {
        const divElement = document.createElement('div');
        const addButton = document.createElement('button');
        const simbol = document.createTextNode('+');


        addButton.appendChild(simbol);
        addButton.style.width = "20px";
        addButton.style.height = "20px";
        addButton.style.borderRadius = "5px"
        addButton.style.textAlign = "center"
        addButton.setAttribute('value', i)


        divElement.classList.add('app');
        if ( i >= 3 && i <= 5) {
            divElement.style.height = "20em"
        }
        else {
            divElement.style.height = "10em";
        }

        divElement.style.width = "100%";
        divElement.style.background = "rgba(255, 255, 255, .1)";
        divElement.style.border = "2px solid rgba(255, 255, 255, .25)";
        divElement.style.borderRadius = "6px";
        divElement.style.backDropFilter = "blur(10px)"

        divElement.appendChild(addButton);
        container.appendChild(divElement);


    };

}

function adicionarApp() {
    const teste = document.querySelectorAll('app')
    console.log(teste)
    
}






