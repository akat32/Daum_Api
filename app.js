var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 4000;
var main = require('./routes/main')(express.Router(), fs);
app.set('views', path.join(__dirname, 'views'));
app.set('port', port)
app.set('view engine', 'ejs');

app.use('/main',main);

app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000');
});
