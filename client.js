const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:6000");

ws.on("open", () => {
  console.log("Connected to server");
});

ws.on("message", (message) => {
  console.log(`Received from srever : ${message}`);
});

ws.on("close", () => {
  console.log("Disconnected from server");
});

ws.on("error", (error) => {
  console.error(`WebSocket error: ${error}`);
});
