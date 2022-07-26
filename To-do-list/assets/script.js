const formularioTarefas = document.getElementById('tarefas'); // Aqui eu pego o ID tarefas do FORM HTML e atribuo a uma constante.
const listaTarefas = document.getElementById('lista'); //Aqui eu atribuo o ID lista da DIV HTML a uma constante


formularioTarefas.onsubmit = function(a){ //o onsubmit serve para que, toda vez que o formulário for enviado (o botão eniar pressionado), seja executada determinada função.
    a.preventDefault(); //a função irá parar qualquer evento padrão que venha a ocorrer. Nesse caso, se faço o submit, a página é atualizada por padrão. Evito fazendo o preventDefault.
    const campoTarefas = document.getElementById('campoTarefas'); //Aqui eu pego o campo de tarefa e armazeno numa constante
    adicionarTarefa(campoTarefas.value); // O valor dessa constante é utilizada depois, como parâmetro de uma função que será criada em seguida. O '.value' me permite acessar o que foi escrito/valor do input.
    formularioTarefas.reset(); // Aqui eu reseto input, pois já adicionei o valor na lista.
};

function adicionarTarefa(tarefa) {
    const containterTarefas = document.createElement('div'); //createElement serve para criar um novo elemento no HTML. Nestas 4 linhas, estou gerando a div, o input, a label e atribuindo um texto/innerHTML a label. 
    const novaTarefa = document.createElement('input');
    const labelTarefa = document.createElement('label');
    const descriçãoTarefaNode= document.createTextNode(tarefa) // Aqui será gerado o texto pelo NODE. O texto vem da tarefa que menciono.

    novaTarefa.setAttribute('type', 'checkbox'); //Nessas 3 linhas, atribuo o typo de input, seu name e id. Lado esquero o atributo e direito o valor do atributo
    novaTarefa.setAttribute('name', tarefa);
    novaTarefa.setAttribute('id', tarefa);

    labelTarefa.setAttribute('for', tarefa); //Aqui atribuo o atributo FOR da label, por questões de beleza mesmo. PQ quando associo a label com o nome/id do input, ao clicar na label, vai direto para o input. Nesse caso, aciono o checkbox.
    labelTarefa.appendChild(descriçãoTarefaNode); //Aqui eu estou criando um nó. Ou seja, to dizendo que dentro do Label, há um filho chamado descriçãoTarefaNode, ou seja, o texto.

    containterTarefas.classList.add('tarefa'); //Aqui eu adiciono a classe 'tarefa' a DIV e digo que entre ela há duas filhas, a novaTarefa e a labelTarefa.
    containterTarefas.appendChild(novaTarefa);
    containterTarefas.appendChild(labelTarefa);

    listaTarefas.appendChild(containterTarefas); //Aqui eu estou dizendo que o elemento listaTarefa é pai da div containterTarefas.
}   
