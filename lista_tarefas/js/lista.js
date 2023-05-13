let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = getElementById('areaLista')

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem = `<div class="item">
        <div class="item-icone">
            <i class="fa-regular fa-circle"></i>
        </div>
        <div class="item-nome">
            Teste de Tarefa
        </div>
        <div class="item-botao">
            <button class="delete"><i class="fa-solid fa-trash"></i> Deletar</button>
        </div>
    </div>`;
        main.innerHTML += novoItem;
    }
}