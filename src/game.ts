import { Tank } from "./Tank";

export class Game {
  tanks: Tank[];

  constructor() {
    this.tanks = [];
  }

  addTank({ id, x, y }: { id: string, x: number, y: number }) {
    const newTank = new Tank(id, x, y)
    this.tanks.push(newTank)
  }

  deleteTank(id: string) {
    this.tanks = this.tanks.filter(tank => tank.id !== id)
  }
}