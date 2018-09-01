let grid;
let cols;
let rows;
let resolution  = 40;
function make2DArray(cols,rows){
  array = new Array(cols);
  for(let i = 0; i < cols; i++){
    array[i] = new Array(rows);
  }

  return array;
}
function setup()
{
  setupDocumentation('gameoflife');
  background(0);
  cols = round(windowWidth / resolution);
  rows = round(windowHeight /resolution);
  grid = make2DArray(cols, rows);
  for(let i = 0; i < cols; i++){
    for(let j =0; j < rows; j++){
      state = floor(random(2));
      age = state;
      grid[i][j] = new Cell(i,j,resolution,state,age);
    }
  }
}

function draw()
{
  for(let i = 0; i < cols; i++){
    for(let j =0; j < rows; j++){
      grid[i][j].draw();
    }
  }

}

function mousePressed(){
  evolution();
}
function evolution(){
  newGrid = make2DArray(cols, rows);
  for(let i = 0; i < cols; i++){
    for(let j =0; j < rows; j++){
      array[i][j] = new Cell(i,j,resolution,0,grid[i][j].age);
    }
  }
  for(let i = 0; i < cols; i++){
    for(let j =0; j < rows; j++){
      neighbors = grid[i][j].livingNeighbors();
      living = grid[i][j].living();

      if(living){
        if(neighbors < 2 || neighbors > 3){
          newGrid[i][j].dead();
        }
        else{
          newGrid[i][j].live();
        }
      }
      else{
        if(neighbors == 3){
          newGrid[i][j].live();
        }
        else{
          newGrid[i][j].dead();
        }
      }
    }
  }
  grid = newGrid;

}
