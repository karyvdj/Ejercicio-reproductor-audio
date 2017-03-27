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
  miCancion.currentTime -= 1;
}

function adelanteAudio(){
  miCancion.currentTime += 1;
}
