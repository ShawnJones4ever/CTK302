let alpha = 0, beta = 0 , gamma = 0; // gyroscope variables
let x = 0.0, y = 0.0, z = 0.0 ; // accelerometer variables
let bunnyImage;
let xPosition = 0;
let yPosition = 0;



function setup() {

  createCanvas(windowWidth, windowHeight);

  bunnyImage = loadImage("assets/OIP.jpg");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('pink'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  image(bunnyImage, 0, 0, 500, 500);
  // rect(0, 0, 100, 100) ;
  pop();


  // Text commands that display debugging data
  //textAlign(LEFT);
  //textSize(20);
  //fill('black');
  //text("orientation data:", 25, 25);
  //textSize(15);
  //text("alpha: " + alpha, 25, 50);
  //text("beta: " + beta, 25, 70);
  //text("gamma: " + gamma, 25, 90);
  //textSize(20);
  //text("acceleration data:", 25, 125);
  //textSize(15);
  //text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  //text("y = " + y.toFixed(2), 25, 170);
  //text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  fill('blue');
  noStroke();
  textSize(100);
  textAlign(CENTER);
  text("R.o.x.a.n.n.e", width / 2, height / 2);

}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});