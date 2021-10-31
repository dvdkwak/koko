class Koko extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: "Hi!"
    }
    this.socket = io();
    this.handleSocket();
  }

  handleSocket() {
    this.socket.on('authenticate', () => {
      this.socket.emit('authenticateResponse', "Koko");
    });
  }

  render() {
    return(
      <div className="Koko">
        <h1>{ this.state.welcomeMessage }</h1>
        <AskMe socket={this.socket} />
        <ResponseWindow socket={this.socket} max={10} time={10000} />
      </div>
    );
  }

}