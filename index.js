// initializing all required variables
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const { networkInterfaces } = require('os');
var colors = require('colors');

// needed to get the hostmachine ip address
const nets = networkInterfaces();
const hostresults = Object.create(null);

// filtering for the local ip adress of the hostmachine
for (const name of Object.keys(nets)) {
	for (const net of nets[name]) {
		// skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
		if (net.family === 'IPv4' && !net.internal) {
			if (!hostresults[name]) {
				hostresults[name] = [];
			}
			hostresults[name].push(net.address);
		}
	}
}

// setting standard settings
var views = '/views/';
var port = 3000;
var windows = []; // here we save all connected windows
var settings = {
  currentColor: ''
}; // here we save the last set color

// response is the first function all commands go to
var response = require('./functions/response');

// function which handles all different authentication responses
var handleAuthenticationResponse = require('./functions/handleAuthenticationResponse.js');

// including the routes file
getRoutes = require('./routes');
getRoutes.default(app, views);

// all rules what to do on events with the connected party
io.on('connection', (socket) => {
  // on connection check prompt authentication
  socket.emit('authenticate');
  // catch Authentication response
  socket.on('authenticateResponse', (res) => {
    // adding the window to the array of windows
    windows.push({ id: socket.id, name: res});
    console.log(`\n ~${res}~`.bold.bgGreen + ` connected to the server `.bgGreen);
    // handle different responses of the authentication
    handleAuthenticationResponse.default(res, socket, settings);
  });
  socket.on('disconnect', () => {
    // removing the connect window form the windows
    let index = windows.findIndex(window => window.id === socket.id);
    let closedWindow = windows.splice(index, 1);
    if(typeof closedWindow[0] !== 'undefined') {
      console.log(`\n ~${closedWindow[0].name}~`.bold.bgRed.white + ` disconnected from the server `.bgRed.white);
    }
  });
  socket.on('ping', (res) => {
    console.log(res);
  });
  // the mario functions
  socket.on('mario', (res) => {
    socket.broadcast.emit('mario', res);
  });
  // the respond functions
  socket.on('command', (res) => {
    response.default(res, socket, settings);
  });
});

// starting express server + socket.io
http.listen(port, () => {
  console.log(`Koko is Running...`.bgWhite.black + `\nlistening on ` + `http://localhost:${port}`.bold + `\nExternal address: ` + `${hostresults['Wi-Fi']}:3000`.bold);
});