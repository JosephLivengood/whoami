var express = require('express');
var app = express();

app.get('/whoami', function (req, res) {
    var defaultresult = {"ipaddress": null, "language": null, "software": null};
    var result = defaultresult;
    
    result.ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    result.language = req.headers["accept-language"].split(',')[0]
    result.software = req.headers['user-agent'].split(') ')[0].split(' (')[1]
    
    res.json(result);
});

app.get('/', function (req, res) {
    res.send('./whoami for User Story: I can get the IP address, language and operating system for my browser.')
});

app.listen(process.env.PORT, function () {
    console.log("Server started listening on port: " + process.env.PORT);
});