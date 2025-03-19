let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const listaNomes = document.getElementById("listaAmigos");
    const nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista(listaNomes);
    inputNome.value = "";
}

function atualizarLista(listaNomes) {
    listaNomes.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultado.appendChild(li);
}
