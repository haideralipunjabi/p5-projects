let x1, x2,x3,y1,y2,y3, scale;
function setup()
{
  setupDocumentation('sierpinski_triangle');
  background(0);
  scale = windowHeight/3;

}


function draw()
{
  noFill();
  x1 = windowWidth / 2;
  y1 = (windowHeight / 2) - scale;
  x2 = (windowWidth/2) - scale;
  y2 = (windowHeight/2) + scale;
  x3 = (windowWidth/2) + scale;
  y3 = (windowHeight/2) + scale ;
  stroke(255);
  drawTriangle(x1,y1,x2,y2,x3,y3)
  noLoop();

}

function drawTriangle(x1,y1,x2,y2,x3,y3){
  console.log(x1,y1,x2,y2,x3,y3);
  triangle(x1,y1,x2,y2,x3,y3);
  if(dist(x1,y1,x2,y2) > 5){
    drawTriangle(x1,y1,(x1+x3)/2, (y1+y3)/2, (x1+x2)/2, (y1+y2)/2);
    drawTriangle((x2+x3)/2, (y2+y3)/2,x2,y2, (x1+x2)/2, (y1+y2)/2);
    drawTriangle((x2+x3)/2, (y2+y3)/2,(x1+x3)/2, (y1+y3)/2,x3,y3);

  }
}
