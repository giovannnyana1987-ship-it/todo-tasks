const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const api = require('./api');
var path = require("path");  //AGREGADO DESPUES DEL COMMIT CRUD
const port = process.env.PORT || 3000;
const app = express();

const bosyParser = require('body-parser');
app.use(bosyParser.json());

app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html')) // SE MODIFICA ESTA LINEA
});

app.use('/api', api);