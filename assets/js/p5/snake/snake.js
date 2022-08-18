class Snake {
  
  constructor() {
    this.body = [];
    this.body[0] = createVector(0, 0);
    this.dirx = 0;
    this.diry = 0;
    this.color = (100, 100, 100)
  }
  
  setDir(x,y) {
    this.dirx = x;
    this.diry = y;
  }
  
  eat(pos) {
    let x = this.body[0].x
    let y = this.body[0].y
    if (pos.x == x & pos.y == y) {
      this.grow();
      // print("FOOD EATEN");
      return true;
    } else {
      return false;
    }
  }
  
  grow() {
    let x = this.body[0].x
    let y = this.body[0].y
    this.body.unshift(createVector(x,y));
    print(this.body.length);
  }
  
  update() {
    this.body.unshift(createVector(this.body[0].x,this.body[0].y));
    this.body[0].x += this.dirx*scl;
    this.body[0].y += this.diry*scl;
    this.body.pop();
    this.body[0].x = constrain(this.body[0].x, 0, width-scl);
    this.body[0].y = constrain(this.body[0].y, 0, height-scl);
    //for (var i = this.body.lenght-1; i > 0; i--) {
    //  this.body.unshift(this.body[0]);
    //
    //  this.body[i].x = this.body[i+1].x;
    //  this.body[i].y = this.body[i+1].y;
    //}
  }
  
  show() {
    // rect(this.body[0].x, this.body[0].y, scl, scl)
    for (let i = 0; i < this.body.length; i++) {
      fill(this.color);
      rect(this.body[i].x, this.body[i].y, scl, scl);
    }
  }  
}