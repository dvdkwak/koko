class Dice extends React.Component {

    state = {
        value: 1, // value of the dice (1-6)
        roll: this.props.roll
    }


    /**
     * catching the roll command from the parent by use of props
     */
    componentDidMount() {
        if(this.state.roll) {
            this.roll();
            this.setState({
                roll: false
            });
            console.log(`rolled the dice!`);
        }
    } // end of componentDidMount


    /**
     * method to roll the dice and get a random value
     */
    roll() {
        let newValue = Math.floor(Math.random()*6 + 1);
        this.setState({
            value: newValue
        });
        console.log(`new dice value: ${newValue}`);
    } // end of roll


    /**
     * Showing the dice on screen
     */
    render() {
        // getting the right image by the set value
        let src;
        if(this.state.value == 1) {
            src = `./assets/dice-face1.jpg`;
        } else
        if(this.state.value == 2) {
            src = `./assets/dice-face2.jpg`;
        } else
        if(this.state.value == 3) {
            src = `./assets/dice-face3.jpg`;
        } else
        if(this.state.value == 4) {
            src = `./assets/dice-face4.png`;
        } else
        if(this.state.value == 5) {
            src = `./assets/dice-face5.gif`;
        } else
        if(this.state.value == 6) {
            src = `./assets/dice-face6.png`;
        }
        return(
            <div className="Dice">
               <img src={src} height='250' width='250' />
            </div>
        );
    }

} // end of class