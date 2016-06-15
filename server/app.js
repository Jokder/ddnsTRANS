var express = require('express');

var app=express();
app.listen(2016,'0.0.0.0',function(){
    console.log("server 0.0.0.0:2016 started.");
});

app.use('/',express.static('../client'));

app.get('/ip',function(req,res){
   res.send(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
});