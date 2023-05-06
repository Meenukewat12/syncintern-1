const audio = new Audio();
let isPlaying = false;

function play() {
  audio.play();
  isPlaying = true;
  document.getElementById('playBtn').style.display = 'none';
  document.getElementById('pauseBtn').style.display = 'block';
}

function pause() {
  audio.pause();
  isPlaying = false;
  document.getElementById('playBtn').style.display = 'block';
  document.getElementById('pauseBtn').style.display = 'none';
}

function setVolume(volume) {
  audio.volume = volume;
}

function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

function loadSong(songUrl) {
  audio.src = songUrl;
  audio.load();
  audio.addEventListener('timeupdate', updateProgressBar);
}

document.getElementById('playBtn').addEventListener('click', play);
document.getElementById('pauseBtn').addEventListener('click', pause);
document.getElementById('volumeSlider').addEventListener('input', (event) => {
  setVolume(event.target.value);
});

const playlist = document.querySelector('.playlist');
playlist.addEventListener('click', (event) =>()