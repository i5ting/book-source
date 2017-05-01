const https = require('https');
const fs = require('fs');

const hskey = fs.readFileSync('www.i5ting.com/www.i5ting.com.key');
const hscert = fs.readFileSync('www.i5ting.com/fullchain.cer')

const options = {
    key: hskey,
    cert: hscert
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hi from HTTPS");
}).listen(8000);

