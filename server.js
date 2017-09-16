// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 2000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT 2000 " + PORT);
  });
});
//formidable code 
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
// use express to listen to 1776

// Client Routes

app.post('/upload', function (req, res) {
  var form = new formidable.IncomingForm({
    uploadDir: __dirname + '/assets/audio',  // don't forget the __dirname here
    keepExtensions: true
  });
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });
});

app.get('/', function (req, res) {
	res.render('cms.html');
});

// Ports: two routes, one to load cms.html and to handle the upload
app.listen(2000, function () {
  console.log('Listening on Port 2000. Server deployed.');
});


// http.createServer(function(req, res) {
//   //route on your server called upload 
//   if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
//     // parse a file upload 
//     var form = new formidable.IncomingForm({
//       uploadDir: __dirname + '/assets/audio',  // don't forget the __dirname here
//       keepExtensions: true
//     });
//     form.parse(req, function(err, fields, files) {
//       res.writeHead(200, {'content-type': 'text/plain'});
//       res.write('received upload:\n\n');
//       res.end(util.inspect({fields: fields, files: files}));
//     });

//     return;
//   }


//   // show a file upload form 
//   // see if we can make this a separate file
//   res.writeHead(200, {'content-type': 'text/html'});
//   res.end(
//     '<form action="/upload" enctype="multipart/form-data" method="post">'+
//     '<input type="text" name="Audio File"><br>'+
//     '<input type="file" name="upload" multiple="multiple"><br>'+
//     '<input type="submit" value="Upload">'+
//     '</form>'
//   );
// }).listen(8080);
