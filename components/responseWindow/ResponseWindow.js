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
   * Handels message not more than given maximum on screen, and removes messages older than 10 seconds.
   */
  handleSocket() {
    this.props.socket.on('response', (response) => {
      this.state.responses.push(response);
      setTimeout(() => {
        this.state.responses.shift();
        this.setState({
          responses: this.state.responses
        });
      }, this.props.time);
      if(this.state.responses.length > this.props.max) {
        while(this.state.responses.length > this.props.max) {
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