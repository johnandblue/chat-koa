'use strict';
// var koa = require('koa'),
//   router = require('koa-router')();

var Message = require('../models/messages.js')
const messagesCtrl = {};

messagesCtrl.getMessages = function* () {
  this.body = Message.getAll();
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

messagesCtrl.deleteMsgs = function* () {
  Message.deleteMsgs();
}

messagesCtrl.postMessage = function* () {
  console.log('request body',this.body);
  let tempMsg = createMsg(this.request.body);
  Message.postMessage(tempMsg);
  this.status = 201;
}

module.exports = messagesCtrl
