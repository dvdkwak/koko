class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    this.socket = io();
    this.handleSocket();
    this.startClock();
  }

  handleSocket() {
    this.socket.on('authenticate', () => {
      this.socket.emit('authenticateResponse', "Clock");
    });
  }

  startClock() {
    setInterval(() => {
      let time = new Date();
      let hours = "";
      let minutes = "";
      let seconds = "";

      // correcting seconds
      if(time.getSeconds().toString().length == 1) {
        seconds = "0" + time.getSeconds().toString();
      } else {
        seconds = time.getSeconds().toString();
      }

      // correcting the minutes
      if(time.getMinutes().toString().length == 1) {
        minutes = "0" + time.getMinutes().toString();
      } else {
        minutes = time.getMinutes().toString();
      }

      // correcting the houres
      if(time.getHours().toString().length == 1) {
        hours = "0" + time.getHours().toString();
      } else {
        hours = time.getHours().toString();
      }

      // updating the state
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }, 1000);
  }

  render() {
    return(
      <div className="background">
        <div className="clock_container">
          <div className="clock">
            <p>{ this.state.hours }:{ this.state.minutes }<span id="seconds">{ this.state.seconds }</span></p>
          </div>
        </div>
      </div>
    );
  }

}