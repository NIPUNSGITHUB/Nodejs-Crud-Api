const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tcrud'

});

connection.connect((err) => {
    if (!err)
        console.log('done');
    else
        console.log(err);
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

//select
app.get('/movies', (req, res) => {
    connection.query('SELECT * FROM tdatas', (err, rows, next) => {
        if (!err)
            res.send(rows);
        else
            console.log('Error');
    });
});


//select a movie
app.get('/movie/:id', (req, res) => {
    connection.query('SELECT * FROM tdatas WHERE id = ?', [req.params.id], (err, rows, next) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });
});

//Delete
app.delete('/delete/movie/:id', (req, res) => {
    connection.query('DELETE FROM tdatas WHERE id = ?', [req.params.id], (err, rows, next) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });
});

//post
app.post('/add/movie', (req, res) => {
    //  res.send(res.body);

    //  let movie = req.body;
    console.log(req);
    // connection.query('INSERT INTO `tdatas`(`heading1`, `heading2`) VALUES (?,?)', [movie.heahing1, movie.heading2], (err, rows, next) => {
    //     if (!err)
    //         res.send(rows);
    //     else
    //         res.send(err);
    // });
});