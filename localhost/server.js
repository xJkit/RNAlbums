const app = require('express')();
const ALBUMS = require('./albums.json');

const PORT = 3001;

app.get('/albums', (req, res) => {
  res.json(ALBUMS);
});

app.listen(PORT, () => {
  console.log(`express listened on port ${PORT}`);
});
