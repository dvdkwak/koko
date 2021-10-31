function handleSockets(io, windows, settings, response) {
  io.on('connection', (socket) => {
    socket.emit('authenticate');
    
    socket.on('authenticateResponse', (res) => {
      windows.push({ id: socket.id, name: res});
      console.log(`\n ~${res}~`.bold.bgGreen + ` connected to the server `.bgGreen);
    });
    
    socket.on('disconnect', () =>  {
      // removing the connected window from the windows
      let index = windows.findIndex(window => window.id === socket.id);
      let closedWindow = windows.splice(index, 1);
      if(typeof closedWindow[0] !== 'undefined') {
        console.log(`\n ~${closedWindow[0].name}~`.bold.bgRed.white + ` disconnected from the server `.bgRed.white);
      }
    });

    // the respond functions
    socket.on('command', (res) => {
      response(res, socket, settings);
    });
  });
}

exports.handleSockets = handleSockets;