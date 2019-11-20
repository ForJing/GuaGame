class Paddle {
  constructor(canvas, img, x = 0, y = 0, speed = 5) {
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.img = img;
    this.width = img.width;
    this.height = img.height;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    this.context.drawImage(
      this.img,
      this.x - this.width / 2,
      this.y - this.height / 2
    );
  }

  update() {}
}

export default Paddle;
