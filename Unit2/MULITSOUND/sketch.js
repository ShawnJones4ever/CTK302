let state = 0;
let song 1,song 2,song 3;

function preload() {
  song1= loadSound('assets/locked.mp3');
  song2= loadSound('assets/unlocked.mp3');
  song3= loadSound('assets/you.mp3');
}

function setup() {
  createCanvas(400, 400);

song1.loop() ;
song1.pause() ;
song2.loop() ;
song2.pause() ;
song3.loop() ;
song3.pause() ;

}

function draw() {

  background(100);
  switch (state) {

    case 0:
      text("1", 100, 100);
      song1.play() ;
      state = 1 ;
      break;

    case 1:
      text("listen to song 1", 100, 100);
      break;

    case 2:
      song2.play()
      state = 3 ;
      break;

      case 3:
        text("listen to song 2", 100, 100);
        break;

      case 4:
        song2.play()
        state = 3 ;
        break;


        case 5:
          text("listen to song 3", 100, 100);
          break;

        case 6:
          song2.play()
          state = 3 ;
          break;



  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
}
