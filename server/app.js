var express = require('express');
var https=require('https');

var app=express();
app.listen(2016,'0.0.0.0',function(){
    console.log("server 0.0.0.0:2016 started.");
});

app.use('/',express.static('../client'));

app.get('/ip',function(req,res){
   res.send(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
});

app.all('/updatedns/*',function(req,res){
    var clientip=req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    https.get("https://DV8rpkNWXG5Vs8yH:wFlTwcJdEvd1whJf@domains.google.com/nic/update?hostname=dy.skymom.net&myip="+clientip,function(resp){
        var resData = '';
        resp.on('data',function(data){
            resData+=data;
        }).on('end',function(){
            res.send(resData);
        })
    });
});