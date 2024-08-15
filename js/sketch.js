//Speculative map: trading in visions

let tileCount = 10;
let visions;
let map1;
let map2;
let map3;
let blending;
let col = 255;
let phrase = ['trading', 'in', 'visions'];
let i = 0;
let hugh = 0;
let font;
let alp = 0;
let tradVis = 1;

//CCapture
//var capture = false; // default is to not capture frames, can be changed with button in browser
// var capturer = new CCapture({
//   format:'webm', 
//   workersPath: 'js/',
//   framerate: 6
// });

function preload(){
  map1 = loadImage('data/Satellite.png');
  map2 = loadImage('data/PlanningPermissions3.png');
  map3 = loadImage('data/PlanningPermissions2.png')
  font = loadFont('data/Sanfrisco.ttf')
}
function setup() {
  createCanvas(map1.width, map1.height);
  frameRate(6);
  colorMode(HSB, 360, 100, 100, 100);
  visions = map2;
}

function draw() {
  // if (frameCount==1){
  //   capturer.start();
  // };
  //background(random(255));
  //tint(255, random(50,100));
  image(map1, 0, 0); 
  if (tradVis == 0){
    visionTrade();
    visionTrade();
  } 
  
  grid();
  visionTrade();
 //text('trading in visions', random(width), random(height)) 
  //tint(hugh, 100, 100, random(100)) 
  blend(visions, 0, 0, map2.width, map2.height, random(-2,2), random(-2,2), map2.width, map2.height,LIGHTEST); 
  i += 1;
  if (i >= 3){
    i = 0;
  }
  
  
  if(frameCount%10==0){
    //map2.filter(INVERT);
    tileCount = random(10, 20);
    col = 0;
    hugh = random(180);
   
  }

  // if(frameCount%20==0){
  //   if (alp == 100){
  //     alp = 0;
  //     tradVis = potentia;
  //   } else {
  //     alp = 100
  //     tradVis = 400;
  //   }
  // }

  // capturer.capture(document.getElementById('defaultCanvas0'));  
  // if (frameCount==3600){
  //   save_record();
  // }
  // print(frameCount);
}

function visionTrade(){
  background(random(360), 100, 100, 5);
  textSize(random(50,500))
  strokeWeight(10);
  textFont(font);
  //stroke(hugh, 100, 100);
  noStroke();
  fill(hugh+180, 100, 100);
  if (frameCount%20==0){
    if (tradVis==1){
      tradVis = 0;
    } else {
      tradVis = 1;
      }
    } 
  if (tradVis == 1){
      for (let j = 0; j<5; j++){
        text(phrase[i], random(100, 110), 400*j);
        visions = map2
      }
    } else {
      text(phrase[i], random(100, 110), random(100, height));
      visions = map3;
    }
  
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (width / tileCount) * gridY;
      noStroke();
      rectMode(CORNER);

      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
      
     //if (frameCount%5==0){
      var toggle = floor(random(2));
      if (toggle == 1){
        fill(hugh+180, 100, 10); 
        //fill(0);
          rect(posX, posY, width/tileCount, width/tileCount);
    } else {
      fill(255, 0) ;
      rect(posX, posY, width/tileCount, width/tileCount);
      }
     }
    //}
    }
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}

// function save_record() {
//   capturer.save();
// }