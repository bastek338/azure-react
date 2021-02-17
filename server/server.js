require('dotenv').config();
var express = require('express');
const { heroesRouter } = require('./api/heroes');
const { connectDB } = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

connectDB();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/heroes', heroesRouter);

app.listen(port, () => {
    console.log(`My fancy app listening at http://localhost:${port}`);
})