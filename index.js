const express = require('express');
const app = express();
const path = require('path');

const port = 2000; // Change this to your desired port number
const publicPath = path.join(__dirname, '/');

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
