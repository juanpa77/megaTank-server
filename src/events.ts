import { Server } from "socket.io";
import { Player } from "./player";

export class Events {
  io: Server

  constructor(socket: Server) {
    this.io = socket
  }

  init() {
    this.io.on('connection', (client) => {
      console.log('User connected');
      // client.emit('getPlayers', game.tanks)

      client.on('joinGame', () => {
        console.log(client.id + ' joined the game');
        const initX = 200;
        const initY = 100;
        client.emit('joinGame',
          {
            id: client.id,
            isLocal: true,
            x: initX,
            y: initY
          }
        );
        client.broadcast.emit('joinGame',
          {
            id: client.id,
            isLocal: false,
            x: initX,
            y: initY
          }
        );
        // game.addTank({ id: client.id, x: 200, y: 100 });
      })
      client.on('disconnect', () => {
        // game.deleteTank(client.id)
        client.broadcast.emit('playerDisconnected', client.id)
      })

      client.on('updatePlayer', (player: Player) => {
        client.broadcast.emit('updateEnemies', player)
      })

      client.on('shot', (playerId: string) => {
        client.broadcast.emit('enemyShot', playerId)
      })
    }
    )
  }
}