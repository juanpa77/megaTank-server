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
const game = new Game()

/* Connection events */
io.on('connection', (client) => {
  console.log('User connected');

  client.on('joinGame', (tank: Tank) => {
    console.log(tank.id + ' joined the game');
    const initX = 100;
    const initY = 100;
    client.emit('addTank',
      {
        id: client.id,
        isLocal: true,
        x: initX,
        y: initY
      }
    );

    client.broadcast.emit('addTank',
      {
        id: client.id,
        isLocal: false,
        x: initX,
        y: initY
      }
    );
    game.addTank({ id: client.id, x: 100, y: 100 });
    console.log(game)

  })
  client.on('disconnect', () => {
    game.deleteTank(client.id)
    console.log(client.id)
  })
}
)
