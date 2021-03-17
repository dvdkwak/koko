class Controller extends React.Component {


    /**
     * Properties to handle well
     * @param {Obj} props Handles properties
     */
    constructor(props) {
        super(props);
        this.socket = io();
        // handeling the sockets
        this.handleSocket();
        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
    } // end of constructor


    /**
     * Authenticating to the KOKO system as 'dice window'
     */
    handleSocket() {
        // authenticating as Koko
        this.socket.on('authenticate', () => {
            this.socket.emit('authenticateResponse', 'controller');
        });
    } // end of handleSocket


    /**
     * move player up
     */
    goUp() {
        this.socket.emit('mario', 'moveUp');
    } // end of handleClick


    /**
     * move player up
     */
     goDown() {
        this.socket.emit('mario', 'moveDown');
    } // end of handleClick


    /**
     * move player up
     */
     goLeft() {
        this.socket.emit('mario', 'moveLeft');
    } // end of handleClick


    /**
     * move player up
     */
     goRight() {
        this.socket.emit('mario', 'moveRight');
    } // end of handleClick


    /**
     * Renders the controller on screen
     * @returns JSX
     */
    render() {
        return(
            <div className="Controller">
                <button id="up" onClick={this.goUp}>Up</button>
                <button id="down" onClick={this.goDown}>Down</button>
                <button id="left" onClick={this.goLeft}>Left</button>
                <button id="right" onClick={this.goRight}>Right</button>
            </div>
        );
    } // end of render


} // end of class