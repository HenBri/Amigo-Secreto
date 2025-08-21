// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos= [];
let nuevoAmigo="";

function agregarAmigo(){
    nuevoAmigo = document.getElementById("amigo").value.trim();
    
    if(nuevoAmigo === "" ){
        alert('Ingrese un nombre vaslido');
    }else{
        nombresAmigos.push(nuevoAmigo);
        console.log(nombresAmigos);
        mostrarAmigos();
        
    }

}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombresAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent=amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo(){
    if(nombresAmigos.length >1){
        let indiceAmigo =   Math.floor(Math.random()*nombresAmigos.length);

        let amigoSecreto = document.getElementById("resultado");
        amigoSecreto.innerHTML= nombresAmigos[indiceAmigo];

    }else{
        alert("Agregue mas amigos");
    }
}