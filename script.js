let video = document.querySelector('video');
console.log(video);

const reproducir = () => {
  video.play();
};

const pausar = () => {
  video.pause();
};

let duracion = document.querySelector('#tiempo-video');

const duracionVideo = () => {
  duracion.textContent = (video.duration / 60.0).toFixed(2);
};

let contenedorImagen = document.querySelector('#caja-juego-1');

function arrastrar(e) {
  console.log(e);
  e.dataTransfer.setData('Text', e.target.id);
}

let dragged = null;
let droppedImg = null;
let droppedCaja = null;

let img1 = createImgListener('imagen1');
let img2 = createImgListener('imagen2');
let img3 = createImgListener('imagen3');

let caja1 = createBoxListener('caja-juego-1');
let caja2 = createBoxListener('caja-juego-2');
let caja3 = createBoxListener('caja-juego-3');

function createImgListener(id) {
  const source = document.getElementById(id);
  return source.addEventListener('dragstart', (event) => {
    // store a ref. on the dragged elem
    console.log('dragstart', event.target);
    dragged = event.target;
  });
}

function createBoxListener(id) {
  const target = document.getElementById(id);
  return target.addEventListener('dragover', (event) => {
    // prevent default to allow drop
    console.log('drop', event.target.id);
    console.log(dragged);
    if (droppedCaja !== event.target.id || droppedImg !== dragged) {
      let element = document.getElementById(event.target.id);
      element.appendChild(dragged);
      let p = element.getElementsByTagName('p');
      if (p[0]) p[0].remove();
      droppedCaja = event.target.id;
      droppedImg = dragged;
    }
    event.preventDefault();
  });
}

function reiniciar() {
  location.reload();
}
