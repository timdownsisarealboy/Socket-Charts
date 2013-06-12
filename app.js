var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

server.listen(3001);

app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/graph.html');
});

app.get('/video', function (req, res) {
  res.sendfile(__dirname + '/video.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  app.post('/update', function (req, res) {
    socket.emit('news', { "point" : req.body.point, "value" : req.body.value });
    res.send({'success' : true});
  });
});
