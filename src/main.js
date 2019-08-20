const _ex   = require('express');
const _app  = _ex();
const _http = require('http').createServer(_app);


_app.use('/global', _ex.static(__dirname + '/views/global'));

_app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/main/index.html');
});
_app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/views/board/index.html');
});

_http.listen(80)