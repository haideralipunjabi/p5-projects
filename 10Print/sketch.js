let x = 0;
let y = 0;
let spacing = 50;
let strokeSize = 10;
let printers = [];
let printer;
let printerSelecter;
let colorize = false;
function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(0);
  printers.push(
    ["Morse Print", "morsePrint"],
    ["Binary Print", "binaryPrint"]
  );
  
  printerSelecter = createSelect(false).id("printerSelecter").position(windowWidth - 200,10);
  let index = 0;
  for(let i=0; i < printers.length; i++){
    if(printers[i][1] === getURLParams().printer) index = i;
    printerSelecter.option(printers[i][0]);
  }
  printerSelecter.elt.selectedIndex = index;
  printerSelecter.changed(changePrinter);
  colorize = ((getURLParams().colorize === "true") ? true : false);
}
function changePrinter() {
  window.location.href = '?printer=' + printers[printerSelecter.elt.selectedIndex][1] + '&colorize=' + colorize.toString();
}


function draw()
{
  if(Object.keys(getURLParams()).length > 0) eval(getURLParams().printer)();
  else {
    window.location.href = '?printer=' + printers[floor(random(printers.length))][1] + '&colorize=true';
      
  }
}


function morsePrint(){
  push();
    if(colorize) stroke(palette.random())
    else stroke(255);
    strokeWeight(strokeSize);
    if(random(1) < 0.5){
      point(x+spacing/2,y+spacing);
    }
    else{
      line(x + strokeSize,y + spacing,x + spacing - strokeSize,y + spacing);
    }
    x += spacing;
    if(x > windowWidth) {
      x = 0;
      y += spacing;
    }
  pop();
}

function binaryPrint(){
  push();
    if(colorize) stroke(palette.random())
    else stroke(255);
    strokeWeight(strokeSize);
    if(random(1) < 0.5){
      noFill();
    ellipse(x+spacing/2,y+spacing/2,spacing-strokeSize,spacing-strokeSize);  
    }
    else{
      
      line(x + spacing/2, y+strokeSize, x + spacing/2,y+spacing-strokeSize);
      
    }
    x += spacing;
    if(x > windowWidth) {
      x = 0;
      y += spacing;
    }
  pop();
}
