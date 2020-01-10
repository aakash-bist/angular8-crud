const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db');

const meanRoute = require('./routes/route');
mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true }).then(
    () => {console.log('Connected to the database...') },
    err => {console.log('Cannot connect to the database..'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/mean', meanRoute);
const port = process.env.PORT || 3000;

const server = app.listen(port, function(){
    console.log('Listening on port: ' + port);
});