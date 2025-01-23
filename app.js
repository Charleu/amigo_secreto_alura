let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, digite um nome diferente.");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = ""; 
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; 

    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${amigo}`;
    resultado.appendChild(li);
}

function limparLista() {
    amigos = []; 
    atualizarListaAmigos(); 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; 
}