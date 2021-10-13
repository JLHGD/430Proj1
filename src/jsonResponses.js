const resultParser = require('./resultParser.js');

const newestMonster = {}; // Only the newest / most recently created monster created is stored here
const monsters = {}; // All monsters that are created are stored here

// Generates an XML string with a given object
const generateXML = (obj) => {
  let responseXML = '<response>';
  if (obj.message) {
    responseXML = `${responseXML} <message>${obj.message}</message>`;
  }
  if (obj.id) {
    responseXML = `${responseXML} <id>${obj.id}</id>`;
  }
  responseXML = `${responseXML} </response>`;
  return responseXML;
};

// Respond and write with the given object and object type (JSON or XML) (GET)
const respond = (request, response, status, object, type) => {
  response.writeHead(status, { 'Content-Type': type });

  // Check if content is xml or json, then create appropriate content format
  let content;
  if (type === 'text/xml') {
    content = generateXML(object);
  } else {
    content = JSON.stringify(object);
  }

  response.write(content);
  response.end();
};

// Respond but don't write anything (HEAD)
const respondMeta = (request, response, status, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.end();
};

// Gets all monsters in the monsters object
const getMonsters = (request, response) => {
  const responseJSON = {
    monsters,
  };

  return respond(request, response, 200, responseJSON, 'application/json');
};

// Gets all monsters in the monsters object as meta data
const getMonstersMeta = (request, response) => respondMeta(request, response, 200, 'application/json');

// Gets the most recently created monster object
const getNewestMonster = (request, response) => {
  const responseJSON = {
    newestMonster,
  };

  return respond(request, response, 200, responseJSON, 'application/json');
};

// Adds a monster to the monster oject given user input in the html form
const generateMonster = (request, response, body) => {
  const responseJSON = {
    message: 'All questions must be filled out',
  };

  // If one or more of the questions aren't filled out, return 400 bad request
  if (!body.q1 || !body.q2 || !body.q3) {
    responseJSON.id = 'missingParams';
    return respond(request, response, 400, responseJSON, 'application/json');
  }

  let responseCode = 201;

  // Gets the name as an object with all of the name's parts and attributes
  const nameObj = resultParser.getNameObj(body);
  const { name } = nameObj;
  // Gets the description of the monster as a string
  const description = resultParser.getDescription(nameObj);
  const stats = resultParser.getStats(); // Gets the stats of the monster as an object

  if (monsters[name]) {
    // Monster exists and is updated
    responseCode = 204;
  } else {
    // If the monster doesn't exist, create a monster and set it as the newest monster
    monsters[name] = {};
    monsters[name].name = name;

    monsters[name].description = description;
    monsters[name].stats = stats;

    newestMonster.monster = monsters[name];
  }

  if (responseCode === 201) {
    responseJSON.message = `${name} Created Successfully`;
    return respond(request, response, responseCode, responseJSON, 'application/json');
  }

  return respondMeta(request, response, responseCode, 'application/json');
};

// Respond with a 404 if the url the user requested doesn't exist
const notFound = (request, response) => {
  const responseJSON = {
    message: 'Page you are looking for was not found',
    id: 'notFound',
  };
  return respond(request, response, 404, responseJSON, 'application/json');
};

const notFoundMeta = (request, response) => respond(request, response, 404, 'application/json');

module.exports = {
  getMonsters,
  getMonstersMeta,
  getNewestMonster,
  generateMonster,
  notFound,
  notFoundMeta,
};
