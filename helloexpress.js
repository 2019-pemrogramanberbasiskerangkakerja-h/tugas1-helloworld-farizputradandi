
var express = require('express'); // library needed
var myData = express();

myData.set('port', process.env.PORT || 3000); //port

//at root directory
myData.get('/', function(req, res){ //root basic access localhost
	res.send('hello world');//print message in browser
});

//at /lala directory
myData.get('/lala', function(req, res){ //root basic access localhost
	res.send('hello world');//print message in browser

});

myData.listen(myData.get('port'), function(){//tell cmd or web app
	console.log('my express works');
})

//open web browser and open localhost:3000 or localhost:3000/lala
 
 