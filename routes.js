// function which holds all routes within this project

function getRoute(app, views) {
    // opening up Koko (express server)
    app.get('/', (req, res) => {
        res.sendFile(__dirname + views + 'koko.html');
    });

    // opening the background color route
    app.get('/color', (req, res) => {
    res.sendFile(__dirname + views + 'color.html');
    });

    // Pond route
    app.get('/pond', (req, res) => {
    res.sendFile(__dirname + views + 'pond.html');
    });

    // route to show everything with the dice(s)
    app.get('/dice', (req, res) => {
        res.sendFile(__dirname + views + 'dice.html');
    });

    // route to show koko her face!
    app.get('/face', (req, res) => {
        res.sendFile(__dirname + views + 'face.html');
    });

    // route to test phaser (Mario)
    app.get('/mario', (req, res) => {
        res.sendFile(__dirname + views + 'mario.html');
    });

    // route to test controller (Mario)
    app.get('/controller', (req, res) => {
        res.sendFile(__dirname + views + 'controller.html');
    });

    // base css file
    app.get('/base.css', (req, res) => {
        res.sendFile(__dirname + views + 'base.css');
    });

    // generating all routes to the components folder
    app.get('/components/*', (req, res) => {
        res.sendFile(__dirname + req.path);
    });

    // generating all asset routes to the source folder
    app.get('/assets/*', (req, res) => {
        res.sendFile(__dirname + req.path);
    });

    // getting all within the lib folder
    app.get('/lib/*', (req, res) => {
        res.sendFile(__dirname + req.path);
    });

    // getting all within game folder
    app.get('/game/*', (req, res) => {
        res.sendFile(__dirname + req.path);
    });
} // end of getRoute

exports.default = getRoute;