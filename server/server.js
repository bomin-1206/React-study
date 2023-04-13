const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function() {
    console.log('listening on 8080')
})

/* 이거 추가해놔야 ajax 잘됩니다 */
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function(요쳥, 응답){
    응답.sendFile(path.join(__diranme, 'react-project/build/index.html'));
})

app.get('/product', function(요쳥, 응답){
    응답.json({name : 'black shoes'})
})

/* react router 쓰는 경우 이거 최하단에 추가해놓으면 좋음 */
app.get('*', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'react-project/build/index.html'));
})