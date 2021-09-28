let song1;


function preload() {
  song1 = loadSound("assets/Real.mp3")
}

function setup() {
  createCanvas(500, 500);
  song1.loop();
}

function draw() {}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  if (song1.isPlaying() {
      song1.pause();
    } else {
      song1.loop();
    }

  }
