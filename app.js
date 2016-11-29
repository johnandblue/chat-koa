
var koa = require('koa');
var app = koa();
var serve = require('koa-static');
var routes = require('./routes.js')
var bodyParser = require('koa-bodyparser')();//require('koa-bodyparser');
// var request = require('koa-request');
// var response = require('koa-response');

app.use(serve('./public'));
app.use(bodyParser);
app.use(routes.routes());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(routes);
app.on('error', function(err){
  log.error('server error', err);
});

app.listen(3000);
console.log('Listening Barbie Chat Koa...');

module.exports = app;
