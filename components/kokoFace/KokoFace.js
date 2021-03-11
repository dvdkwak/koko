class KokoFace extends React.Component {

    // array containing the "map" to generate and the current scene to render
    state = {
        bitMap: [
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
        ],
        currentScene: 0
    }

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
        this.scenes = [
            [
                ['#fff', '#fff', '#fff', '#fff'],
                ['#fff', '#fff', '#fff', '#fff'],
                ['#fff', '#fff', '#fff', '#fff'],
                ['#fff', '#fff', '#fff', '#fff']
            ],
            [
                ['#fff', '#fff', '#fff', '#fff'],
                ['#fff', '#000', '#000', '#fff'],
                ['#fff', '#000', '#000', '#fff'],
                ['#fff', '#fff', '#fff', '#fff']
            ],
            [
                ['#000', '#000', '#000', '#000'],
                ['#000', '#fff', '#fff', '#000'],
                ['#000', '#fff', '#fff', '#000'],
                ['#000', '#000', '#000', '#000']
            ]
        ];
        if(this.props.bitMap) {
            this.bitMap = true;
        } else {
            this.bitMap = false;
        }
        if(this.props.scenes) {
            this.scenes = this.props.scenes;
        }
        this.bitMap = true;
    } // end of constructor


    /**
     * starts generating the startScenes method
     */
    componentDidMount() {
        if(!this.bitMap) {
            this.startScenes();
        }
    } // end of componentDidMount


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
     * This method calls a new scene from the scenes prop to render
     */
    startScenes() {
        let maxScenes = this.scenes.length - 1;
        setInterval(() => {
            if(this.state.currentScene >= maxScenes) {
                this.nextScene = 0;
            } else {
                this.nextScene = this.state.currentScene + 1;
            }
            this.setState({
                currentScene: this.nextScene
            });
        }, 300);
    } // end of startScenes


    /**
     * Rendering method to render the bitMap to a gridview (table)
     */
     renderCurrentScene() {
        let i = 0; // to generate the keys for the rows
        let j = 0; // to generate the keys for the cells
        let table = this.scenes[this.state.currentScene].map((row) => {
            i++;
            return <tr key={i}>{ row.map((val) => { j++; return <td key={"child-" + j} className={val} style={{backgroundColor: val}}></td> }) }</tr>;
        });
        return table;
    } // end of renderScene


    /**
     * Rendering method to render the bitMap to a gridview (table)
     */
    renderBitMap() {
        let i = 0; // to generate the keys for the rows
        let j = 0; // to generate the keys for the cells
        let table = this.state.bitMap.map((row) => {
            i++;
            return <tr key={i}>{ row.map((val) => { j++; return <td key={"child-" + j} className={val} style={{backgroundColor: val}}></td> }) }</tr>;
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
                        {this.bitMap
                        ? this.renderBitMap()
                        : this.renderCurrentScene()
                        }
                    </tbody>
                </table>
            </div>
        );
    } // end of render

}