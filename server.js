const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

app.use(cors());
app.use(history());
app.use(serveStatic('./dist'));


app.listen(process.env.PORT || 8080);