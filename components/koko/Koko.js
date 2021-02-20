class Koko extends React.Component {

    /**
     * Setting up socket.io for the main Koko window
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: "Hi!"
        }
        //setting up socket.io
        this.socket = io();
        this.handleSocket();
    } // end of constructor


    /**
     * Handeling all socket events
     */
    handleSocket() {
        // authenticating as Koko
        this.socket.on('authenticate', () => {
            this.socket.emit('authenticateResponse', 'Koko');
        });
    } // end of handleSocket


    /**
     * Method to render the item to the DOM
     */
    render() {
        return(
            <div className="Koko">
                <h1>Hi! I am Koko!</h1>
                <AskMe socket={this.socket} />
                <ResponseWindow socket={this.socket} />
            </div>
        );
    } // end of render
}