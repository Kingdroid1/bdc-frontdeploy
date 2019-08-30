const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');


app.use(cors());
app.use(history());
app.use(serveStatic('./dist'));


app.listen(process.env.PORT || 8080);