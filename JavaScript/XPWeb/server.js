const http = require('http'),
  url = require('url'),
  fs = require('fs'),
  path = require('path'),
  config = require('./config.json'),
  { blackList } = require('./blacklist'),
  mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
    '.doc': 'application/msword',
    '.eot': 'application/vnd.ms-fontobject',
    '.ttf': 'application/x-font-ttf',
  }

http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url),
    sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, ''),
    pathname = path.join(__dirname, config.DIR + sanitizePath),
    ip = req.ip
      || req.connection.remoteAddress
      || req.socket.remoteAddress
      || req.connection.socket.remoteAddress,
    urli = req.url

  // IP blacklist check
  if (blackList.indexOf(ip) > -1) {
    res.end('This is a blacklisted IP!');
  }

  // Basic routing
  if (urli === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(config.DIR + '/' + config.INDEX).pipe(res)

  }
  else if (urli === '/second') {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('public/second.html').pipe(res)
  }
  else {
    fs.exists(pathname, function (exist) {
      if (!exist) {
        fs.createReadStream(config['404Err']).pipe(res)
        return;
      }
   // Response by file and mimetype
      fs.readFile(pathname, function (err, data) {
        if (err) {
          fs.createReadStream(config['404Err']).pipe(res)
        } else {
          const ext = path.parse(pathname).ext;
          res.setHeader('Content-type', mimeType[ext] || 'text/plain');
          const { rawHeaders, httpVersion, method, socket, url } = req;
          const { remoteAddress, remoteFamily } = socket;
          res.end(data);
        }
      });
    });
  }

}).listen(config.PORT, config.HOSTNAME);
console.log(`Server running at http://${config.HOSTNAME}:${config.PORT}/`);