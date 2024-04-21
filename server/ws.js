const WebSocket = require("ws");
const url = require("url");
const fs = require("fs");

function init() {
    const config = JSON.parse(fs.readFileSync("./data/ports.json", "utf-8"));
    const host = config.ip;
    const port = config.socketPort;

    const wss = new WebSocket.Server({
        host, port
    });

    wss.on("connection", (ws, req) => {
        const parsed = url.parse(req.url, true);
    });
}

module.exports = init;
