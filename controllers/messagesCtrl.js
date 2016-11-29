'use strict';
var koa = require('koa'),
  router = koa.Router();

var Message = require('../models/messages.js')

module.exports = function (app) {
  app.use('/', router);
};

const messagesCtrl = {};

messagesCtrl.getMessages = function (req, res) {
  res.json(Message.getAll());
};


var createMsg = function (body) {
  let timestamp = Date.now();
  let user = body.user;
  let content = body.content;

  return {
    timestamp,
    user,
    content,
  };
}

messagesCtrl.postMessage = function (req, res) {
  let tempMsg = createMsg(req.body);
  console.log(req.body);
  Message.postMessage(tempMsg);
  // console.log(tempMsg);
  res.status(201);
  res.end()
}


module.exports = messagesCtrl
