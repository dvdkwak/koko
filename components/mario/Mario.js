class Mario extends React.Component {

    options = {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        parent: "myGame",
        physics: {
            default: "arcade",
            arcade: {
                gravity: { y: 0 },
                debug: true
            }
        },
        scene: [
            Boot
        ]
    }


    constructor(props) {
        super(props);
        this.socket = io();
        // handeling the sockets
        this.handleSocket();
    }


    /**
     * Authenticating to the KOKO system as 'dice window'
     */
    handleSocket() {
        // authenticating as Koko
        this.socket.on('authenticate', () => {
            this.socket.emit('authenticateResponse', 'mario');
        });
    } // end of handleSocket


    componentDidMount() {
        new Phaser.Game(this.options);
    } // end of componentDidMount


    /**
     * Renders the container to render the canvas in
     * @returns JSX
     */
    render() {
        return(
            <div id="myGame"></div>
        );
    } // end of render

}