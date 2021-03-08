class KokoFace extends React.Component {

    // array containing the "map" to generate
    bitMap = [
        [ 0, 0, 0, 0, 0, '#000', '#000', '#000', '#000', '#000', '#000', 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, '#000', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#000', 0, 0, 0 ],
        [ 0, 0, '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', 0, 0 ],
        [ 0, '#000', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', 0 ],
        [ 0, '#000', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#000', '#000', '#eaf056', '#000', 0 ],
        [ '#000', '#eaf056', '#000', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#eaf056', '#000' ],
        [ '#000', '#eaf056', '#eaf056', '#eaf056', '#000', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#000', '#eaf056', '#eaf056', '#eaf056', '#000' ],
        [ '#000', '#eaf056', '#eaf056', '#eaf056', '#000', '#000', '#eaf056', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#000' ],
        [ '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000' ],
        [ '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000' ],
        [ '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#fa68fc', '#eaf056', '#fa68fc', '#000' ],
        [ 0, '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#fa68fc', '#fa68fc', '#fa68fc', '#fa68fc', '#fa68fc' ],
        [ 0, '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#eaf056', '#eaf056', '#eaf056', '#fa68fc', '#fa68fc', '#fa68fc', 0 ],
        [ 0, 0, '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#fa68fc', 0, 0 ],
        [ 0, 0, 0, '#000', '#000', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#eaf056', '#000', '#000', 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, '#000', '#000', '#000', '#000', '#000', '#000', 0, 0, 0, 0, 0 ],
    ];


    /**
     * Method which handles props and calls the handleSocket method
     * @param {*} props Properties given to the object
     */
    constructor(props) {
        super(props);
        this.socket = io();
        this.handleSocket();
    } // end of constructor


    /**
     * Authenticating to the KOKO system as 'dice window'
     */
    handleSocket() {
        // authenticating as Koko-Face
        this.socket.on('authenticate', () => {
            this.socket.emit('authenticateResponse', 'Koko-Face');
        });
    } // end of handleSocket


    /**
     * Rendering method to render the bitMap to a gridview (table)
     */
    renderBitMap() {
        let i = 0; // to generate the keys for the rows
        let j = 0; // to generate the keys for the cells
        let table = this.bitMap.map((e) => {
            i++;
            return <tr key={i}>{ e.map((val) => { j++; return <td key={"child-" + j} className={val} style={{backgroundColor: val}}></td> }) }</tr>;
        });
        return table;
    } // end of renderBitMap


    /**
     * method to render the view
     * @returns view
     */
    render() {
        return(
            <div className="KokoFace">
                <table>
                    <tbody>
                        {this.renderBitMap()}
                        </tbody>
                </table>
            </div>
        );
    } // end of render

}