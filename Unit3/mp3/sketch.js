let cars = [];
let maxCars = 20;
let state = 0;
let timer = 0;
let carsEaten = 0 ;
let frogPos;
var pixel;
var bg;
var cookie;
var welcome;
var song;
var go;
var yw

function preload() {
  song = loadSound("assets/steven.mp3");

}


function setup() {
  createCanvas(800, 800);
  song.play();
  // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  // initialize frog position
  frogPos = createVector(width / 2, height - 80);
    rectMode(CENTER);
    ellipseMode(CENTER);
    imageMode(CENTER);
    pixel = loadImage("assets/pixelsteven.png");
    bg = loadImage("assets/background.png");
    cookie = loadImage("assets/cookiecat.png");
  welcome = loadImage("assets/wtg.jpg");
  go = loadImage("assets/gameover.jpg");
  yw = loadImage("assets/youwin.jpg");
}

function draw() {
  switch (state) {
    case 0: // welcome
      background(200);
       image(welcome,width/2, height/2);
      break;

    case 1: // game state
      game();

      timer++ ;
      if (timer > 10*60) {
        state = 3 ;
        timer = 0 ;
      }
      break;

    case 2: // winning state
    background(200);
    image(yw,width/2, height/2);
      break;

    case 3:
      background(200);
    image(go,width/2, height/2)
      break; // losing state
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // the win state
      resetTheGame() ;
      state = 0;
      break;

    case 3: // the lose state
      resetTheGame() ;
      state = 0;
      break;
  }
}

function game() {
  background(100);
  image(bg, width/2, height/2, width, height);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); // this takes out a car
      carsEaten++ ;
    }
  }

  if (cars.length == 0) {
    state = 2 ;
  }

  // print out how many cars are left
  fill('black');
  textSize(16) ;
  text("cookcats left: "+ cars.length + "  cookiecats you collected = "+ carsEaten, 20, 30 );

  // make frog
  //fill("green");
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(pixel,frogPos.x, frogPos.y,100,100);
  checkForKeys();
}


function resetTheGame() {
  timer = 0 ;
  cars = [] ;
//  carsEaten = 0 ; // if you want

   // Spawn many objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height - 120));
    this.vel = createVector(random(5), 0);
    this.cor = color(0, random(50, 100), random(190, 245), random(100));
    this.size = random(90);
    //   this.stroke = random(4) ;
  }

  // methods

  display() {
  image(cookie, this.pos.x, this.pos.y, 50, 50);
    //fill(this.cor);
    // rect(this.pos.x, this.pos.y, 75, 25);
    //textSize(this.size);
    //text("RAIN", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
