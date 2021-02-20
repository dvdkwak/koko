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

// response is the first function all commands go to
var response = require('./functions/response');

// opening up Koko (express server)
app.get('/', (req, res) => {
	res.sendFile(__dirname + views + 'koko.html');
});

// base css file
app.get('/base.css', (req, res) => {
  res.sendFile(__dirname + views + 'base.css');
});

// generating all routes to the components folder
app.get('/components/*', (req, res) => {
  res.sendFile(__dirname + req.path);
});

// generating all asset routes to the source folder
app.get('/assets/*', (req, res) => {
  res.sendFile(__dirname + req.path);
});

// all rules what to do on events with the connected party
io.on('connection', (socket) => {
  // on connection check prompt authentication
  socket.emit('authenticate');
  // catch Authentication response
  socket.on('authenticateResponse', (res) => {
    // adding the window to the array of windows
    windows.push({ id: socket.id, name: res});
    console.log(`\n ~${res}~`.bold.bgGreen + ` connected to the server `.bgGreen);
  });
  socket.on('disconnect', () => {
    // removing the connect window form the windows
    let index = windows.findIndex(window => window.id === socket.id);
    let closedWindow = windows.splice(index, 1);
    console.log(`\n ~${closedWindow[0].name}~`.bold.bgRed.white + ` disconnected from the server `.bgRed.white);
  });
  socket.on('ping', (res) => {
    console.log(res);
  });
  // the respond functions
  socket.on('command', (res) => {
    response.default(res, socket);
  });
});

// starting express server + socket.io
http.listen(port, () => {
  console.log(`Koko is Running...`.bgWhite.black + `\nlistening on ` + `http://localhost:${port}`.bold + `\nExternal address: ` + `${hostresults['Wi-Fi']}:3000`.bold);
});