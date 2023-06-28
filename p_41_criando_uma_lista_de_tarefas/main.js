document.querySelector('#empurrar').onclick = function(){
    if(document.querySelector('#novaTarefa input').value.length == 0){
        alert("Insira o nome da tarefa!")
    }

    else{
        document.querySelector('#tarefas').innerHTML += `
            <div class="tarefa">
                <span id="nomeTarefa">
                    ${document.querySelector('#novaTarefa input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var tarefa_atual = document.querySelectorAll(".delete");
        for(var i=0; i<tarefa_atual.length; i++){
            tarefa_atual[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}