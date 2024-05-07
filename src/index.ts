require('dotenv').config()
import express from "express";
import { createServer } from 'node:http';
import { Server } from 'socket.io';

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

io.on('connection', (socket) => {
  console.log('a user connected');
});
