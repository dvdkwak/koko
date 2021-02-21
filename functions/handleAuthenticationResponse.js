var handleAuthenticationResponse = function(res, socket, settings) {
    if(res == "color") {
        if(settings.currentColor != "") {
            socket.emit('changeColor', settings.currentColor);
        } else {
            socket.emit('changeColor', 'white');
        }
    }
} // end of handleAuthenticationResponse()


exports.default = handleAuthenticationResponse;