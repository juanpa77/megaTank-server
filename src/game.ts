import { Direction, Player } from "./player";
import { Map } from "./map";
// import EventLoop from "./events";
import { Tank } from "./Tank";
import { VELOCITY } from "./const";
import { Server } from "socket.io";

export class Game {
  // private _previousElapsed = 0;
  map: Map
  socket: Server
  // eventLoop: EventLoop;
  players!: Player[];

  constructor(map: Map, socket: Server) {
    this.map = map
    this.socket = socket
    // this.eventLoop = new EventLoop(this.socket, this)
  }

  getPlayer(id: string) {
    return this.players.find(player => player.id === id)
  }
  deletePlayer(id: string | undefined) {
    this.players = this.players.filter(player => player.id !== id)
  }


  update() {
    // this.player && this.player.moveTank(delta)
  }

  createPlayer(x: number, y: number, id: string) {
    const tank = new Tank({
      x,
      y,
      speed: VELOCITY
    })
    const player = new Player({
      id,
      tank,
      map: this.map
    })
    this.players.push(player)
  }
}

// TODO ADD FEATURE TO SYNC UP SHOOT OF ENEMY