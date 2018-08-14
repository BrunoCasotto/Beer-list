const http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    mimeTypes = {
      "html": "text/html",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "png": "image/png",
      "js": "text/javascript",
      "css": "text/css"
    },
    port = process.env.PORT || 4000
  

http.createServer((req, res) => {
    let uri = url.parse(req.url).pathname
    uri = uri === '/' ? '/index.html' : uri
    const filePath = path.join(__dirname, uri)

    const exist = fs.existsSync(path.join(__dirname, uri))
    if( exist ) {
      const mimeType = mimeTypes[path.extname(filePath).split(".")[1]]

      res.writeHead(200, mimeType)
      const fileStream = fs.createReadStream(filePath)
      fileStream.pipe(res) 
    } else {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>Not found :/</h1>');
    }
}).listen(port)

console.log(`running in port ${port}` )