const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

app.use(cors());
app.use(history());
app.use(serveStatic('./dist'));

// app.get('/*', function(req,res) {
//      res.sendFile(path.join(__dirname,'./../dist/naijabdcs/index.html'));
//      console.log('path',path.join(__dirname,'./../dist/naijabdcs/index.html') )
//     });   
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);