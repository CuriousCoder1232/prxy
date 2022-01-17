const http = require('http'),
https = require('https'),
fs = require('fs'),
config = require('./config.json'),
Corrosion = require('corrosion'),
express = require('express')
const proxy = new Corrosion({
    prefix: config.prefix,
    codec: 'xor'
})
const app = express()
const thesite = (req,res)=>{
    if(req.url.startsWith(config.prefix)) return proxy.request(req,res)
    req.pathname = req.url.split('#')[0].split('?')[0]
    req.query = {}
}
app.use('/',express.static(__dirname+'/public'))
app.use('/',thesite)
app.listen(process.env.PORT||config.port,()=>{console.log(`prxy is running at http://localhost:${config.port}`)})