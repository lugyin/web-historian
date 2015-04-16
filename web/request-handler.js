var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('../web/http-helpers.js');
var qs = require('querystring');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  console.log("received a " + req.method + "with url " + req.url);

  if(req.method === 'GET'){
    if(req.url === '/'){
      httpHelpers.serveAssets(res, archive.paths.home);
    } else if (req.url === '/favicon.ico'){
      res.end();
    } else if (req.url === '/styles.css'){
      httpHelpers.serveAssets(res, archive.paths.siteAssets + '/styles.css');
    }







  } else if(req.method === 'POST'){
    if(req.url === '/inbound'){
      var body = "";
      req.on('data', function(chunk){
        body += chunk;
        if(body.length > 1e7){
          req.writeHead(413);
          req.end('req too large');
        }
      });

      req.on('end', function(){
        var bodyFinal = qs.parse(body);


      });
    }
  }
  else {

      res.end(archive.paths.list);
  }



};
