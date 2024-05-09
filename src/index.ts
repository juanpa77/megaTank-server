require('dotenv').config()
import express from "express";
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { Game } from "./game";

const app = express()

const PORT = process.env.PORT || 3000
const urlOrigin = "http://localhost:5173"

const cors = {
  origin: urlOrigin,
  methods: ["GET", "POST"],
  allowedHeaders: ["my-custom-header"],
  credentials: true
}

const server = createServer(app);

const io = new Server(server, { cors });

app.get('/', (req: any, res: any) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(PORT, () => {
  console.log('server running at http://localhost:3000');
});

interface Tank {
  id: string;
}
interface Player {
  id: string;
  x: number;
  y: number;
}
const game = new Game()

/* Connection events */
io.on('connection', (client) => {
  console.log('User connected');
  client.emit('getPlayers', game.tanks)

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
    game.addTank({ id: client.id, x: 200, y: 100 });
  })
  client.on('disconnect', () => {
    game.deleteTank(client.id)
    client.broadcast.emit('playerDisconnected', client.id)
  })

  // client.on('updatePlayer', ({ x, y, id }: Player) => {

  //   game.tanks = game.tanks.map(tank => {
  //     if (tank.id === id) {
  //       return {
  //         ...tank,
  //         x,
  //         y,
  //       }
  //     }
  //     return {
  //       ...tank
  //     }
  //   })
  // })

  client.on('updatePlayer', (player: Player) => {
    client.broadcast.emit('updateEnemies', player)

  })
}
)
