// Fibonacci Clock
// Haider Ali Punjabi (@haideralipunjabi)
// haideralipunjabi@hackesta.org
let wWidth, wHeight, ratio;
let squares = [];
let bgColor,mnColor,hrColor,dualcolor,colors;
let palleteSelector;
function setup()
{
  createCanvas(windowWidth,windowHeight);
  wWidth = windowWidth - 1000;
  ratio = wWidth / 8;
  wHeight = ratio * 5;
  frameRate(1)
  createP("Pallete: ").position(20,20);
  palleteSelector = createSelect(false);
  palleteSelector.position(20, 60);
  for(let i=0; i<Object.keys(pallete).length; i++){
    palleteSelector.option(Object.keys(pallete)[i]);
  }
  setPallete();
  palleteSelector.changed(changePallete);
  createElement("h1","Fibonacci Clock Simulation").position(500, 100)
  createP("Hour Color:").position(20,120);
  createP("Minute Color: ").position(20, 180);
  createP("Dual Color: ").position(20, 240);
  createA('http://geekoclock.com/',"GUIDE","_blank").position(20, 300);
}
function draw()
{
  checkTime();
  background(bgColor);
  stroke(0);
  push();
    fill(hrColor);
    rect(150, 135, 20,20);
    fill(mnColor);
    rect(150, 195, 20,20);
    fill(dualcolor);
    rect(150, 255, 20,20);
  pop();
  translate(500,(windowHeight - wHeight)/2)
  rect(0, 0, wWidth, wHeight);
  fill(colors[0]);
  rect(ratio*2,0, ratio, ratio); 
  fill(colors[1]);
  rect(ratio*2,ratio, ratio, ratio);  
  fill(colors[2]);
  rect(0,0, ratio*2, ratio*2);
  fill(colors[3]);
  rect(0, ratio*2, ratio*3, ratio*3);
  fill(colors[4]);  
  rect(ratio*3, 0, ratio*5, ratio*5);
}

function checkTime() {
  colors = [bgColor, bgColor, bgColor, bgColor, bgColor];

  hr = hour();
  mn = minute();
  hourSquares = expandNumber(hr % 12);
  minuteSquares = expandNumber(floor(mn / 5));
  colorize(hourSquares, hrColor,dualcolor);
  colorize(minuteSquares, mnColor, dualcolor);
}

function colorize(sizes, maincolor, dualcolor){
  for(let i = 0; i < sizes.length; i++){
    let size = sizes[i];
    let index = -1;
    switch (size) {
      case 1:
        if(colors[0] !== maincolor) index = 0;
        else index = 1;
        break;
      case 2:
        index = 2;
        break;
      case 3: 
        index = 3;
        break;
      case 5:
        index = 4;
        break;
    }
    if(colors[index] === bgColor) colors[index] = maincolor;
    else colors[index] = dualcolor; 
  }
}
function expandNumber(num, position){
  if(num === 0) num = 12;
  let fNumbers = [1,1,2,3,5];
  let order = [];
  while(sumArray(order) != num){
    if(sumArray(order) > num || fNumbers.length === 0){
      order = [];
      fNumbers = [1,1,2,3,5];
    }
    let number = random(fNumbers);
    order.push(number);
    fNumbers.splice(fNumbers.indexOf(number), 1);
  }
  return order;
  
}


function sumArray(arr){
let total=0;
for(let i in arr) { total += arr[i]; }
return total;
}

function setPallete(){
  param = getURLParams().pallete;
  if(param === undefined || param === ""){
    param = "rgb"
  }
  palleteSelector.selected(param);
  colorpallete = pallete[param];
  bgColor   = color(colorpallete[0][0],colorpallete[0][1],colorpallete[0][2]);
  hrColor   = color(colorpallete[1][0],colorpallete[1][1],colorpallete[1][2]);
  mnColor   = color(colorpallete[2][0],colorpallete[2][1],colorpallete[2][2]);
  dualcolor = color(colorpallete[3][0],colorpallete[3][1],colorpallete[3][2]);
  colors = [bgColor, bgColor, bgColor, bgColor, bgColor];
}
function changePallete(){
    window.location.href = '?pallete=' + palleteSelector.value();
}
