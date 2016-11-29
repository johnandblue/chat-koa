var router = require('koa').Router();
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var controller = require('./controllers/messagesCtrl.js');

router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);

module.exports = router;
