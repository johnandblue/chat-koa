var koa = require('koa');
var router = require('koa-router')();
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var controller = require('./controllers/messagesCtrl.js');
var app = koa();
router.use(router.routes());

router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);
router.post('/deleteMsgs', controller.deleteMsgs);

module.exports = router;
