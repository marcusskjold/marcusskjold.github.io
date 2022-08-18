class Food {
  pickLocation() {
    this.x = int(random(sizex))*scl;
    this.y = int(random(sizex))*scl;
  }
  show() {
    fill(255, 0, 100);
    rect(this.x, this.y, scl, scl);
  }
}
