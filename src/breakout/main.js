import { loadImages } from "~lib/utils";
import Paddle from "./paddle";

const imgs = {
  ball: require("./imgs/ball.png"),
  paddle: require("./imgs/paddle.png"),
  brick: require("./imgs/brick.png")
};

async function main() {
  const imgMap = await loadImages(imgs);
  const { ball, brick, paddle: paddleImage } = imgMap;

  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = document.querySelector(".breakout");
  const context = canvas.getContext("2d");

  const paddle = new Paddle(canvas, paddleImage, 100, 150);
  paddle.draw();

  function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    paddle.x += paddle.speed;
    paddle.draw();
    requestAnimationFrame(loop);
  }

  loop();
}

export default main;
