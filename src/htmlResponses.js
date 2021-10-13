const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`); // The HTML page
const indexCSS = fs.readFileSync(`${__dirname}/../client/style.css`); // The style sheet
const indexSH = fs.readFileSync(`${__dirname}/../client/styleHelper.js`); // The style helper for making the questions visible / invisible

// General respond function, responds with 200 with a given content type
const respond = (request, response, content, type) => {
  response.writeHead(200, { 'Content-Type': type });
  response.write(content);
  response.end();
};

// Gets the style helper javascript file
const getIndexStyleHelper = (request, response) => respond(request, response, indexSH, 'text/javascript');

// Gets the style sheet file
const getIndexStyle = (request, response) => respond(request, response, indexCSS, 'text/css');

// Gets the HTML file
const getIndex = (request, response) => respond(request, response, index, 'text/html');

module.exports = {
  getIndexStyleHelper,
  getIndexStyle,
  getIndex,
};
