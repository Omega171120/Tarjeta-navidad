function openEnvelope() {
  document.querySelector('.envelope').classList.add('open');

  const audio = document.getElementById('campanas');
  audio.volume = 1.0; 
  audio.play();
}