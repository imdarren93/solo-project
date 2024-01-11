const path = require('path');
const express = require('express');
const cors = require('cors')
require('dotenv').config()
const apiController = require('../server/controllers/apiController');

const app = express();
const PORT = 3000;

const apiRouter = require('../server/routes/api');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
});

if (process.env.NODE_ENV === "production") {
    app.use('/build', express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) => {
      return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
  }

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app