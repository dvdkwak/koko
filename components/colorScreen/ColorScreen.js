class ColorScreen extends React.Component {

    // State holding the requested color
    state = {
        color: "red"
    }


    /**
     * 
     * @param {Obj} props Object holding the given properties
     */
    constructor(props) {
        super(props);
        //setting up socket.io
        this.socket = io();
        this.handleSocket();
    } // end of construct


    /**
     * Authentication to the server
     */
    handleSocket() {
        // authenticating as Koko
        this.socket.on('authenticate', () => {
            this.socket.emit('authenticateResponse', 'color');
        });
        // handle change color
        this.socket.on('changeColor', (color) => {
            this.setColor(color);
        });
    } // end of handleSocket


    /**
     * Change the background of this item :D
     * @param {string} color Color to set background
     */
    setColor(color) {
        this.setState({
            color: color
        });
    } // end of setColor


    /**
     * Render the item to the DOM, inculdes styling
     */
    render() {
        let style = {
            display: "block",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: this.state.color
        }
        return(
            <div className="colorScreen" style={style}>
                <h1>I am the color screen!</h1>
            </div>
        );
    } // end of render
}