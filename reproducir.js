var miCancion= document.getElementById('cancioncita');

function playAudio() {
  miCancion.play();
}

function pauseAudio() {
  miCancion.pause();
}

function stopAudio(){
  miCancion.load()
}

function menosVolumen() {
  miCancion.volume -= 0.1;
}

function masVolumen() {
  miCancion.volume += 0.1;
}

function atrasAudio(){
  miCancion.currentTime -= 2;
}

function adelanteAudio(){
  miCancion.currentTime += 2;
}

miCancion.ontimeupdate = function(){
    var duracion = document.getElementById('duracion');
    duracion.value = miCancion.currentTime;
}
