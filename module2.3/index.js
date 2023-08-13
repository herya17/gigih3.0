const express = require('express');
const app = express();

app.use(express.json());

const playlist = require('./src/routes/playlist');
app.use('v1/internal/playlist', playlist);

app.listen(3000, () => {
  console.log('App running on port 3000');
});
