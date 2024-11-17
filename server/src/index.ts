import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const port = 5000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {});

httpServer.listen(port, () => console.log(`Server is running on port ${port}`));
