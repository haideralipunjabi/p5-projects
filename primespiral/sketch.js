let table = {};
let directions;
function setup() {
  setupDocumentation('primespiral');
  background(0);
  for(let i=1; i <= 9; i++){
    table[i.toString()] = primeFactors(i);
  }
  directions = {
    "UP": createVector(0,-1),
    "DOWN": createVector(0,1),
    "LEFT": createVector(-1,0),
    "RIGHT": createVector(1,0)
  }
}
let skip =0;
function draw() {
  noLoop();
  translate(windowWidth / 2, windowHeight / 2);
  rectMode(CENTER)
  angleMode(DEGREES)
  textAlign(CENTER)
  stroke(255);
  noFill();
  currentPos = createVector(0,0);
  base = createVector(1,0);
  size = 10;
  for(entry in table){
    text(entry.toString(), currentPos.x,currentPos.y,currentPos.x+size,currentPos.y+size)
    angle = base.angleBetween(currentPos);
    console.log(angle,base.x,base.y,currentPos.x,currentPos.y);
    if(currentPos.x == 0 && currentPos.y == 0){
      currentPos.add(directions['RIGHT']);
    }
    else{
      if(angle >= 315 && angle < 45){
        currentPos.add(directions['UP'])
      }
      else if(angle >= 45 && angle < 135){
        currentPos.add(directions['LEFT'])
      }
      else if(angle >= 135 && angle < 225){
        currentPos.add(directions['RIGHT'])
      }
    }
    if(isSquare(entry)){
      for(dir in directions){
        console.log(dir);
      }
    }
  }
}

function isSquare(n){
  return (sqrt(n) == int(sqrt(n)))
}
function primeFactors(n) {
  let ret = []
  ret.push(1);
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    ret.push(2)
    n /= 2;
  }

  // n must be odd at this point.  So we can
  // skip one element (Note i = i +2)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      ret.push(i);
      n /= i;
    }
  }

  if (n > 2) ret.push(n);
  return ret;
}
