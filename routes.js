var router = require('koa-router')();
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var controller = require('./controllers/messagesCtrl.js');
router.use(router.routes());


router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);

module.exports = router;
