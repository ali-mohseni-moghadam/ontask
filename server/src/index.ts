import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

type chatMessage = {
  text: string;
  fromUser: boolean;
};

const app = express();
const port = 5000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
  connectionStateRecovery: {},
});

io.on("connection", (socket) => {
  console.log(`User connected with ID: ${socket.id}`);

  socket.on("chat message", (message: chatMessage) => {
    console.log(`${socket.id} message is:`, message.text);
    socket.broadcast.emit("chat pm", message);
  });
  socket.on("online", (id) => {
    console.log(`${id} is online`);
    socket.broadcast.emit("user-online", id);
  });

  socket.on("disconnect", () => {
    console.log(`User with ID: ${socket.id} disconnected`);
  });
});

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
