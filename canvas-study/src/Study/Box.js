class Box {
  constructor(index, x, y, size) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = 3;
    this.direction = 1;
    this.draw();
  }

  draw() {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "#fff";
    ctx.fillText(this.index, this.x + 10, this.y + 30);
  }
}
