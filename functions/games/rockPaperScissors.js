/**
 * A little game of rock, paper and scissors!
 * @param {string} arg String with the given awnser by the user
 */
function rockPaperScissors(arg) {
    let choice = Math.round(Math.random() * 2);
    let answer = [
        'rock',
        'paper',
        'scissors'
    ];
    console.log(`You chose: ${arg}, I chose: ${answer[choice]}`);
    return `You chose: ${arg}, I chose: ${answer[choice]}`;
} // end of rockPaperScissors

exports.default = rockPaperScissors;