const db_info = require('./dbconfig.js');
const mysql = require('mysql');
const cors = require('cors');
const express = require('express');

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
    }),
);

app.get('/', (req, res) => {
    res.send('Hello node express');
});
app.get('/memos', (req, res) => {
    const connection = mysql.createConnection(db_info);
    connection.connect();
    connection.query('SELECT * from tb_memo', (error, rows, fields) => {
        if (error) throw error;
        // console.log('memo info is: ', rows);
        res.send(rows);
    });
    connection.end();
});
app.post('/insert', (req, res) => {
    console.log(req.body);
    res.send('insert');
});
app.listen(5000, () => {
    console.log('Express server listening on port 5000');
});