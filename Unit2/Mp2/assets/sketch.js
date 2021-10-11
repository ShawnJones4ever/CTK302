var mic;
var vol;
let x = 0 ;
let state = 0;
let programStarted = false ;
let picture;

function setup() {
  picture = loadImage("assets/madface.jpg")
  createCanvas(400, 400);


  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  image(picture,100,100,15,15);
  //background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

if (programStarted) {
  state = 1 ;
} else {
state=0 ;
}
  // check how loud the input is
  if (vol > .02) { // if the volume is LOUD?
    // do something
state = 2;
}
if (vol>.04) {
  state=3;
}

if(vol>.08) {
  state=4;
}

if(vol>.010) {
  state=5
}
  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

switch (state) {
  case 0:
  background(100) ;
  textsize(18)
  text("Sing A Long",100.100);
  break;

case 1:
text("YOU SUCK",100,100);
break;

case 2:
text("GETTING BETTER",100,100);
break;

case 4:
text("Keep It Up",100,100)
break;

case 5:
text("ROCKSTAR",100,100)
break;

case 6:
text("MY EARS",100,100)

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
 programStarted= true;
}
