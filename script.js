
let video = document.querySelector("video")
console.log(video)

const reproducir=()=>{
    video.play()
}

const pausar=()=>{
    video.pause()    
}



let duracion = document.querySelector("#tiempo-video")

const duracionVideo=()=>{
    duracion.textContent=(video.duration/60.000).toFixed(2)

}



let contenedorImagen = document.querySelector("#caja-juego-1")


function arrastrar(e){

    e.dataTransfer.setData("Text", e.target.id)

}



function soltar (e){

    const id= e.dataTransfer.getData("Text");
    let elemento = document.querySelector("#"+id);
    contenedorImagen.innerHTML = elemento.outerHTML
    
}


