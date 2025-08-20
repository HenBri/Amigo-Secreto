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
        
    }

}