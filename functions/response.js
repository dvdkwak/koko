// importing all actions
var rockPaperScissors = require('./games/rockPaperScissors.js');

// remembering the last used command
var lastCommand;

// controlling method to start the other methods
function response(command, socket) {
    let result = ""; // result given to the response window
    ucommand = command;
    ucommand = ucommand.toUpperCase();
    let args = ucommand.split(` `);
    let oldArgs = ucommand.split(` `);
    let a = Math.round(ucommand.length/2);
    let gate = ``;
    for(i = 0; i < a; i++) {
        gate += `_`;
    }
    console.log(`\n$_____${gate}-|==(O)==|-${gate}_____$`);
    console.log(`You gave the command: ${command}`);
    console.log(`The arguments within your command:`);
    console.log(args);
    console.log(`$_____${gate}-----------${gate}_____$\n`);

    // saving remaining arguments into another array
    args.shift();

    // resetting the command to the lastCommand of given
    if(oldArgs[0] === "LASTCOMMAND") {
        oldArgs[0] = lastCommand;
    }

    // triggering a certain action according to the given argument
    if(oldArgs[0] === "ROCK" || 
        oldArgs[0] === "SCISSORS" ||
        oldArgs[0] === "PAPER") {
        result = rockPaperScissors.default(oldArgs[0]);
    }else
    if(oldArgs[0] === "COLOR") {
        socket.broadcast.emit('changeColor', oldArgs[1].toLowerCase());
        result = `changed the color to ${oldArgs[1]}!`;
    }
    else {
        result = `I am sorry! I don't know what to do!`;
    }

    // changing the value of lastCommand
    if(oldArgs[0] !== "LASTCOMMAND") {
        lastCommand = oldArgs[0];
    }

    // emit the response to the reponse window and broadcast it for all others
    socket.broadcast.emit('response', `Koko:` + result);
    socket.emit('response', `Koko:` + result);
} // end of response

// exporting the function
exports.default = response;