const express = require('express')
const mysql = require('mysql');
require('dotenv/config');

const app = express();


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// Connect to Database
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    // insecureAuth : true
});

connection.connect(() => {
    console.log('Database has been connected')
});

// To start listening to the server
app.listen(3000);