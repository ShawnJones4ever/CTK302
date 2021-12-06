var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var tempture = 0;
var humidity = 0;
var chicagoboy;

function setup() {
  createCanvas(400, 400);

  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

  chicagoboy = loadImage("assets/chicago.jpg");

  // HERE is the call to get the weather.

  var myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Chicago,IL,US&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=6469b72c6bb8f2532b1410f50a986ee5"; // USE YOUR ID HERE, only take out the x's!!! DO NOT TAKE OUT THE APPID= PART

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  tempture = weather.main.temp;
  humidity = weather.main.humidity;

}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(500);
      image(chicagoboy, 0, 0, 800, 800);
      fill("gold");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("tempture is " + tempture, 20, 60);
      text("humidity is " + humidity, 20, 80);


      // cloud
      fill("pink");
      noStroke();
      ellipse(x, 300, 400, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
