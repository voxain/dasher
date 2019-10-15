const _ex   = require('express');
const _app  = _ex();
const _http = require('http').createServer(_app);
const _io   = require('socket.io')(_http);
const _si   = require('systeminformation');


_app.use('/global', _ex.static(__dirname + '/views/global'));

_app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/main/index.html');
});
_app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/views/board/index.html');
});

_http.listen(80)

_io.on('connection', s => {
    setInterval(async () => {
        s.emit('data', {
            time: await _si.time(),
            cpu: {
                data: await _si.cpu(),
                load: await _si.currentLoad()
            },
            mem: await _si.mem()
        });
    }, 1000);
});