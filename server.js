var server = require('./app/app');
var port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log('Server runnig CodeBreaker API :D on port %d', port);
});