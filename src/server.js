const http = require('http');
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getIndexStyle,
    '/getMonsters': jsonHandler.getMonsters,
    '/getNewestMonster': jsonHandler.getNewestMonster,
    // '/updateUser': jsonHandler.updateUser,
    notFound: jsonHandler.notFound,
  },
  HEAD: {
    '/getMonsters': jsonHandler.getMonstersMeta,
    notFound: jsonHandler.notFoundMeta,
  },
  POST: {
    '/generateMonster': jsonHandler.generateMonster,
    notFound: jsonHandler.notFoundMeta,
  },
};

const handlePost = (request, response, parsedUrl) => {
  if (parsedUrl.pathname === '/generateMonster') {
    const body = [];

    request.on('error', (err) => {
      console.dir(err);
      response.statusCode = 400;
      response.end();
    });

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);

      jsonHandler.generateMonster(request, response, bodyParams);
    });
  }
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  if (request.method === 'POST') {
    handlePost(request, response, parsedUrl);
  } else if (urlStruct[request.method][parsedUrl.pathname]) {
    urlStruct[request.method][parsedUrl.pathname](request, response);
  } else {
    urlStruct[request.method].notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.1.1: ${port}`);
