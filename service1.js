var request=require("request");

var http=require("http");

var express = require('express');

var cors=require("cors");

var app = express();



var option = {

 hostname :'nodeservice-be.app-dev',

 port:3000,

 path:'/',

 method:'GET',

headers: {

        'Content-Type': 'application/json',

    }

}



app.use(function(req, res, next) 

{

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");

  next();

});



app.use(cors());



app.get('/',function(req,res)

{

	var data='';

	var reqGet=http.request(option,function(resp)

	{

		resp.setEncoding('utf8');

		

		resp.on('data',function(d){

		process.stdout.write("hmmm "+d);

		res.send("Object returned is "+d);

		});

		

		resp.on('end',function(){

		 ;

		//res.write("end block");

		});

		

							

	});

	    

		reqGet.end();	

});



app.listen(3232);
