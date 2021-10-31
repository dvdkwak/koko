const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const colors = require('colors');

const staticSettings = require('./system/settings.json');

var windows = [];
var settings = {};

const { getRoutes } = require('./routes.js');
getRoutes(app, staticSettings.views);

const { handleSockets } = require('./system/socket.js');
const { response } = require('./system/functions/responseHandler.js');
handleSockets(io, windows, settings, response);

server.listen(staticSettings.port, () => {
  console.log(`Koko V2 is running!`);
});