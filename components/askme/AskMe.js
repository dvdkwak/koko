class AskMe extends React.Component {


  /**
   * setting the socket and default value
   * @param {Object} props props form react
   */
  constructor(props) {
    super(props);
    this.state =  {
        value: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  /**
   * Emitting the command to the socket server and emptying the input field
   * (by use of the state)
   * @param {*} event event of the form
   */
  handleSubmit(event) {
    console.log(`Your command: ${this.state.value}`);
    this.props.socket.emit('command', this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  } // end of handleSubmit


  /**
   * handeling what to do on typing within the input field
   * @param {*} event event of the input field
   */
  handleChange(event) {
    this.setState({value: event.target.value});
  } // end of handleChange


  /**
   * Rendering item to the DOM
   */
  render() {
    return(
      <form id="AskMeForm" onSubmit={this.handleSubmit}>
      <input 
        style={this.style} 
        type="text" 
        placeholder="Ask me anything!"
        value={this.state.value}
        onChange={this.handleChange} />
      </form>
    );
  } // end of render

}