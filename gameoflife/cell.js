function Cell(i, j, s,state,age) {
  this.i = i;
  this.j = j;
  this.x = i * s;
  this.y = j * s;
  this.s = s;
  this.state = state;
  this.age = age;

}

Cell.prototype.draw = function() {
  noStroke();
  if (this.state == 0) {
    fill(0);
  } else {
    fill(255);
  }
  rect(this.x, this.y, this.s, this.s);

  fill(255,0,0)
  textSize(15);
  if(this.age != 0){
    text(this.age.toString(), this.x + (this.s/2),this.y + (this.s/2))
  }
}


Cell.prototype.live = function() {
  this.age += 1;
  this.state = 1;
}
Cell.prototype.dead = function() {
  this.age = 0;
  this.state = 0;
}
Cell.prototype.living = function() {
  return (this.state == 1);
}


Cell.prototype.livingNeighbors = function() {
  sum = 0;
  for (offI = -1; offI < 2; offI++) {
    for (offJ = -1; offJ < 2; offJ++) {
      if (this.i + offI > 0 && this.i + offI < cols && this.j + offJ > 0 && this.j + offJ < rows) {
        sum += grid[this.i + offI][this.j + offJ].state;

      }
    }
  }
  sum -= this.state;
  return sum;
}
