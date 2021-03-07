class DiceContainer extends React.Component {

    
    /**
     * handeling the sockets (authenticating)
     * @param {Object} props properties passed to the object
     */
    constructor(props) {
        super(props)
        this.socket = io();
        // handeling the sockets
        this.handleSocket();

        // create a refference to the dice
        this.dice = React.createRef();
    } // end of contructor


    /**
     * Authenticating to the KOKO system as 'dice window'
     */
    handleSocket() {
        // authenticating as Koko
        this.socket.on('authenticate', () => {
            this.socket.emit('authenticateResponse', 'dice-container');
        });
    } // end of handleSocket


    /**
     * when the component rendered, we can start updating states and stuff
     */
    componentDidMount() {
        // handeling the 'rollDice' request
        this.socket.on('rollDice', () => {
            this.dice.current.roll();
        });
    } // end of componentDidMount


    /**
     * rendering the view to the DOM
     */
    render() {
        return(
            <div className="DiceContainer">
                <h1>Throw the dice!</h1>
                <Dice ref={this.dice} />
            </div>
        );
    } // end of render

} // end of DiceContainer