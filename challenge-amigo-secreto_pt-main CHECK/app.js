//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo() {
        let participante = document.getElementById("amigo").value;
        if (participante == "") {
            alert("Insira o nome de um Amigo")
            return;
        }
        console.log (participante);

     if (amigos.includes(participante)) {
        alert("Essa Pessoa já esta participando")
     } else {
         amigos.push(participante);
     }
    console.log (amigos);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
   let listaParticipantes = document.getElementById('listaAmigos');
   listaParticipantes.innerHTML ="";

   for ( indice = 0; indice < amigos.length; indice++) {
    let item = document.createElement("li");
    item.textContent = amigos[indice];
    listaParticipantes.appendChild (item);
   }
}

function sortearAmigo () {
    if (amigos.length === 0) {
        alert ("Lista Vazia!! Adicione seus Amigos.");
        return;
    }
let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
let resultado = document.getElementById ('resultado');
resultado.innerHTML = `O Amigo sorteado foi: ${sorteado}`;

let limparLista = document.getElementById ("listaAmigos");
limparLista.innerHTML = "";

}