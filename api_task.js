var express = require('express');
var app = express();
var fs = require('fs');
var sleep = require('sleep');
app.get('/api/requests/', function(req, res){
var a = req.query.connId;
var b = req.query.timeout;
var a = JSON.stringify(a, 'utf-8');
var b = JSON.stringify(b, 'utf-8');
var c = a + ':' + b;
fs.appendFile('pj', (c + '\n').split('\n'),  function (err) {
      if(err)
      throw err;
     console.log(c);
});
sleep.sleep(+req.query.timeout);

res.send('{"status":"ok"}');
});


app.get('/api/serverStatus', function(req, res){
var data = fs.readFileSync('pj');
var bh = data.toString()
var t = '{' + bh + '}';
        console.log(t);
res.send(t);
});

app.get('/api/kill', function(req, res){
if(req.query.connId == 12)
{
console.log('{"status":"killed"}');
process.kill(process.pid);
}
res.send('{"status":"ok"}');
});
app.listen(3000)

