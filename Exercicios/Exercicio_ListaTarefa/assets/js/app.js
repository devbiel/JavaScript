const inputAdicionar = document.querySelector('.input-adicionar');
const listaTarefa = document.querySelector('.ul-lista');


inputAdicionar.addEventListener('keypress', function (e) {
    if (!inputAdicionar.value) return;
    if (e.keyCode === 13) {
        criaTarefa(inputAdicionar.value);
    }
})

document.addEventListener('click', function (e) {
    if (!inputAdicionar.value) return;
    criaTarefa(e);
})

document.addEventListener('click', function (del) {
    apagaTarefa(del);
})

function criaTarefa(textoInput) {
    let lista = document.createElement('li');
    lista.innerHTML = `${textoInput}<button class="botao-apagar">Apagar</button>`;
    listaTarefa.appendChild(lista);
    inputAdicionar.value = '';
    salvarTarefa();
}

function apagaTarefa(del) {
    const ele = del.target;

    if (ele.classList.contains("botao-apagar")) {
        const tarefaParaRemover = ele.parentElement;
        listaTarefa.removeChild(tarefaParaRemover);
        salvarTarefa();
    }

}

function salvarTarefa() {
    const liTarefas = listaTarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function recuperarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
recuperarTarefasSalvas();
