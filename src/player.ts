import k from "./constants";
class Player {
  x: number;
  y: number;
  speed: number;
  type?: string;
  ck: any;
  constructor(x: number, y: number, type?: string) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.speed = 300;
    // context of kaboom data
    this.ck = k.add([k.pos(x, y), k.sprite("player"),k.scale(0.4)],);
  }
  move(direction: string) {
    switch (direction) {
      case "left":
        this.ck.move(-this.speed, 0);
        break;
      case "right":
        this.ck.move(this.speed, 0);
        break;
      case "up":
        this.ck.move(0, -this.speed);
        break;
      case "down":
        this.ck.move(0, this.speed);
        break;
      default:
        break;
    }
  }
}
export default Player;
