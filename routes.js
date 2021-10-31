function getRoutes(app, views) {

  // main screen of Koko
  app.get('/', (req, res) => {
    res.sendFile(__dirname + views + '/koko.html');
  });

  // clock screen of koko
  app.get('/clock', (req, res) => {
    res.sendFile(__dirname + views + '/clock.html');
  });

  // route to expose all components
  app.get('/components/*', (req, res) => {
    res.sendFile(__dirname + req.path);
  })

  // route to expose all assets
  app.get('/assets/*', (req, res) => {
    res.sendFile(__dirname + req.path);
  });

}

exports.getRoutes = getRoutes;