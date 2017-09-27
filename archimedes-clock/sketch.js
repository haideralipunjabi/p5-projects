// Archimedes Clock
// Haider Ali Punjabi (@haideralipunjabi)
// haideralipunjabi@hackesta.org
let r;
let th = 0;
let hr,mn;
function setup()
{
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  r = windowHeight /5;
}

function draw()
{
  background(255);
  createElement('h1',"Archimedes Clock").position(20,20);
  createP("Instructions: The number through which the curve passes is the hour, the small hand points towards the minute as in a normal clock.").position(20,80);
  noFill();
  translate(windowWidth/2,windowHeight/2);
  checkTime();
  drawSpiral();
  drawMinute();
  drawLetters();
}


function drawSpiral(){
  push();
  rotate(-90);
  beginShape();
  curveVertex(0,0)
  for(let i=0; i<360;)
  {
    j = (i/30) +1;
    x = ((r/6)*j) * cos(i + th);
    y = ((r/6)*j) * sin(i + th);
    if(i < 270 ){
      curveVertex(x,y);
    }
    i += 30;
  }
  endShape(OPEN);  
pop();
}
function drawMinute()
{
  let minuteAngle = map(mn, 0, 60, 0, 360) -135; 
  push();
  rotate(minuteAngle);
  fill(0,255,0);
  strokeWeight(3);
  line(0,0,r/6,r/6);
  pop();
}
function drawLetters(){
  textAlign(CENTER);
  textSize(20);
  for(let i=1; i<=6; i++){
    if(i===hr)fill(0,0,255);
    else fill(0);
    text(i.toString(),0,(r/6)*i*-1)
    if(i+6===hr)fill(0,0,255);
    else fill(0);
    text((i+6).toString(),0,(r/6)*i)
  }
}

function checkTime(){
  hr = hour() %  12;
  mn = minute();
  th = (hr-1)*(-30);
  
}
