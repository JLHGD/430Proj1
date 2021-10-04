const resultParser = require('./resultParser.js');

const newestMonster = {};
const monsters = {};

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

/// //////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////// REPLACE THESE ///////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////

// Gets all users in the user object
const getMonsters = (request, response) => {
  const responseJSON = {
    monsters,
  };

  return respond(request, response, 200, responseJSON, 'application/json');
};

// Gets all users in the user object as meta data
const getMonstersMeta = (request, response) => respondMeta(request, response, 200, 'application/json');

// Gets all users in the user object
const getNewestMonster = (request, response) => {
  const responseJSON = {
    newestMonster,
  };

  return respond(request, response, 200, responseJSON, 'application/json');
};
//
// // Updates the user object with a new user
// const updateUser = (request, response) => {
//   const newUser = {
//     createdAt: Date.now(),
//   };
//
//   users[newUser.createAt] = newUser;
//
//   return respond(request, response, 201, newUser);
// };

// Adds user to the user oject given user input in the html form
const generateMonster = (request, response, body) => {
  const responseJSON = {
    message: 'All questions must be filled out',
  };

  if (!body.q1 || !body.q2 || !body.q3) {
    responseJSON.id = 'missingParams';
    return respond(request, response, 400, responseJSON, 'application/json');
  }

  const responseCode = 201;

  // if (users[body.name]) {
  //   // User exists and is updated
  //   responseCode = 204;
  // } else {

  const nameObj = resultParser.getNameObj(body);
  const { name } = nameObj;
  const description = resultParser.getDescription(nameObj);
  const stats = resultParser.getStats();

  monsters[name] = {};
  monsters[name].name = name;
  // }

  monsters[name].description = description;
  monsters[name].stats = stats;

  newestMonster.monster = monsters[name];

  if (responseCode === 201) {
    responseJSON.message = 'Created Successfully';
    return respond(request, response, responseCode, responseJSON, 'application/json');
  }

  return respondMeta(request, response, responseCode, 'application/json');
};

/// //////////////////////////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////// REPLACE THESE ///////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////////////////////////

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
  // updateUser,
  generateMonster,
  notFound,
  notFoundMeta,
};
