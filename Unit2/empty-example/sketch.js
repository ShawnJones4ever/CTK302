var myState = 0 ;
var timer = 0;
// image declarations
var zoom;
var test;
var bkg;
var chad1;
var chad2;
var dist;
var chad5;
var chad3;
var tchad;
//asorted
let x = 520;
let y = 480;
let xspeed = 10;
let yspeed = 4;
let r = 150;

function setup() {

  createCanvas(800, 800) ;
  zoom = loadImage ("assets/zootin.png")
  test = loadImage ("assets/test1.jpg")
  bkg= loadImage("assets/LivingroomA.jpg")
  chad1 =loadImage ("assets/chad1.png")
  chad2= loadImage("assets/chad2.png")
  dist= loadImage ("assets/destroy.jpg")
  chad5= loadImage("assets/chad5.png")
  chad3= loadImage("assets/problemchad.png")
  tchad= loadImage("assets/titlechad.jpg")
  //mic = new p5.AudioIn();
  //mic.start();
}

function draw() {

  switch(myState) {
    case 0 :
    background('red');
    image (tchad,0,0,800,800);
    text("Chad the Cat", 100, 100) ;
timer++ ;
if(timer >200){
  myState =1;
  timer = 0;
}



    break ;

    case 1:
      image(bkg, 0, 0, 800, 800);
      image(chad1,0,0,800,800);
    //background('green');
    text("Chad the cat is a soft black cat.",100,100);
    text("His favorite thing in the whole world is sleeping on the window seat in his house. ", 100, 130) ;

    //image(test, 0, 0, 800, 800);
    timer++ ;
    if(timer >200){
      myState =2;
      timer = 0;
    }
    break ;

    case 2:
    background('red');
    image(bkg,0,0,800,800);
    image (chad2,0,0,800,800);

    text("Chad hears a loud noise and gets spooked! What is with that look on his face? What is he going to do?", 100, 100) ;
    timer++ ;
    if(timer >200){
      myState =3;
      timer = 0;
    }
    break ;

    case 3:
    background ('purple');
    image (bkg,0,0,800,800);
    text ("Chad is running around the living room like a fucking maniac.",100,100);
//moving cat
  image (zoom,x,y,r*2, r*2);
 x += xspeed;
 y += yspeed;
 if (x > width - r || x < r) {
   xspeed = -xspeed;
 }
 if (y > height - r || y < r) {
   yspeed = -yspeed;
 }
 timer++ ;
 if(timer >400){
   myState =4;
   timer = 0;
 }
    break ;

    case 4:
    background ('pink');
      image(dist, 0, 0, 800, 800);
        image(chad5, 0, 0, 800, 800);
    text("Chad has singlehandedly destroyed the living room.", 100,100);
    timer++ ;
    if(timer >200){
      myState =5;
      timer = 0;
    }
    break ;

    case 5:
    background ('yellow');
      image(chad3, 0, 0, 800, 800);
    text ("Chad only causes problems on purpouse",100,100);
    timer++ ;
    if(timer >200){
      myState =0;
      timer = 0;
    }
    break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0 ;
  }
}
