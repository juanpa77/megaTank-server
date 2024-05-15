// import { Keyboard } from "./keyboard"
// import { Shot } from "./shot"
import { Map } from './map'
// import { Collisions } from './collisions'
// import EventLoop from './events'
// import { Enemy } from './enemy'
import { Tank } from "./Tank"

export type Direction = 'up' | 'down' | 'left' | 'right'
type Props = {
  id: string
  tank: Tank
  map: Map
  // eventLoop: EventLoop
  // enemies: Enemy[]
}
export class Player {
  // keyboard: Keyboard
  limiteX!: number
  limiteY!: number
  // shots: Shot[] = []
  direction: Direction = 'right'
  // collisions: Collisions
  map: Map
  collisionDetected: boolean
  dirX: number = 0
  dirY: number = 0
  id: string
  // eventLoop: EventLoop
  tank: Tank

  constructor({ id, tank, map }: Props) {
    this.id = id
    this.map = map
    // this.collisions = new Collisions(this, this.map, enemies)
    this.collisionDetected = false
    // this.eventLoop = eventLoop
    this.tank = tank
    // this.keyboard = new Keyboard(this.shoot.bind(this))
  }
  shoot() {
    // const newShot = new Shot();
    // this.shots.push(newShot);
    // console.log(this.collisions.enemies)
    // this.eventLoop.sendShot(this.id)
  }
  removeInactiveShots() {
    // this.shots = this.shots.filter(shot => shot.isActive());
  }

  handleDirection() {
    this.dirX = 0
    this.dirY = 0
    // if (this.keyboard?.arrowLeftPressed) {
    //   this.direction = 'left'
    //   this.dirX = -1
    //   return
    // }
    // if (this.keyboard?.arrowRightPressed) {
    //   this.direction = 'right'
    //   this.dirX = 1
    //   return
    // }
    // if (this.keyboard?.arrowUpPressed) {
    //   this.direction = 'up'
    //   this.dirY = -1
    //   return
    // }
    // if (this.keyboard?.arrowDownPressed) {
    //   this.direction = 'down'
    //   this.dirY = 1
    //   return
    // }
  }

  sendPosition() {
    return {
      x: this.tank.x,
      y: this.tank.y
    }
  }

}
