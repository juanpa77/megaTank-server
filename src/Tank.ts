
type Props = {
  x: number,
  y: number,
  speed: number
}
export class Tank {
  x: number;
  y: number;
  dirX: number = 0
  dirY: number = 0
  speed: number;
  constructor({ x, y, speed }: Props) {
    this.x = x
    this.y = y
    this.speed = speed
    // this.width = 16
    // this.height = 16
  }

  moveTank() {
    // TODO implement delta

    // this.handleDirection()

    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;

    // this.collisions.collide(this.direction)

    // const maxX = this.map.cols * this.map.tileSize;
    // const maxY = this.map.rows * this.map.tileSize;

    // this.x = Math.max(0, Math.min(this.x, maxX));
    // this.y = Math.max(0, Math.min(this.y, maxY));
    // this.eventLoop.updatePlayer({ id: this.id, x: this.x, y: this.y, direction: this.direction })
  }
}
