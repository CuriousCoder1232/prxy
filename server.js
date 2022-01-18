const
    https = require('https'),
    fs = require('fs'),
    config = require('./config.json'),
    Corrosion = require('corrosion'),
    express = require('express'),
    proxy = new Corrosion({
        prefix: config.prefix,
        codec: config.codec || 'xor',
        ws: true,
        cookie: true,
        title: 'index.html',
        standardMiddleware: true
    })
    const app = express()
    const theproxy = (req, res) => {
        if (req.url.startsWith(config.prefix)) return proxy.request(req, res);
        req.pathname = req.url.split('#')[0].split('?')[0];
        req.query = {};};
app.use('/', express.static(__dirname + '/public'));
app.use('/', theproxy);
https.createServer({
	  key: fs.readFileSync('ssl/ssl.key'),
	cert: fs.readFileSync('ssl/ssl.cert')}, app)
	.listen(process.env.PORT || config.port, function () {console.log(`prxy is running at http://localhost:${config.port}`)});
