const app = require('express')();
const ALBUMS = require('./albums.json');

app.get('/albums', (req, res) => {
  res.json(ALBUMS);
});

app.listen(3000, () => {
  console.log('express listened on port 3000');
});
