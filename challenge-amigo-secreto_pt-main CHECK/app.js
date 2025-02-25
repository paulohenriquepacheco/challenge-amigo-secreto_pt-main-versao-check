//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo() {
        let participante = document.getElementById("amigo").value;
        console.log (participante);

     if (amigos.includes(participante)) {
        alert("Essa Pessoa já esta participando")
     } else {
         amigos.push(participante);
     }
    console.log (amigos);
    document.getElementById("amigo").value = "";
}

