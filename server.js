const express = require("express");
const { WebSocketServer } = require("ws");
const uuid = require("uuid");

const app = express();
const port = 6000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  const clientId = uuid.v4();
  console.log("New client connected : ", clientId);
  ws.send("Hello client");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Hello client`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
