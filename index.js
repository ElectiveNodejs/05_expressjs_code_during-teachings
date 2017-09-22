var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello from root</h1>');
});

app.get('/testdigselv', function (req, res) {
    res.send('Du vandt!!');
});

app.get('/login', function (req, res) {
    res.sendFile('/Users/clbo/Google Drive/KEA_Macbook/node/nodejsE2017/05_express/05_expressjs_code_during-teachings/login.html', function (err) {
        // handle error
    });
});

app.listen(3000);
