class ResponseWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            responses: []
        }
        this.handleSocket();
    } // end of construct


    /**
     * Method handeling all socket emits 'n stuff
     */
    handleSocket() {
        this.props.socket.on('response', (response) => {
            this.state.responses.push(response);
            if(this.state.responses.length > 10) {
                while(this.state.responses.length > 10) {
                    // maximum of 10 responses
                this.state.responses.shift();
                }
            }
            this.setState({
                responses: this.state.responses
            });
        });
    } // end of handleSocket


    /**
     * rendering the component into the DOM
     */
    render() {
        // id for the responses
        let i = 0;

        // rendering the component
        return(
            <div className="responseWindow">
                {this.state.responses.map((response) => {
                    i++;
                    return (<p key={i}>{response}</p>)
                })}
            </div>
        );
    } // end of render

}