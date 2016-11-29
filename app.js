
var koa = require('koa');
var app = koa();
var statuses = require('statuses')
var serve = require('koa-static');
var routes = require('./routes.js')
var bodyParser = require('koa-bodyparser')();//require('koa-bodyparser');
// var request = require('koa-request');
// var response = require('koa-response');

app.use(serve('./public'));
app.use(bodyParser);
app.use(routes.routes());

// app.on('error', function(err){
//   log.error('server error', err);
// });

statuses['404'] = 'No Barbie Found';
app.use(function *(next) {
  console.log('No Barbies dude...');
  this.throw(404);
  yield next;
});

app.listen(3000);
console.log('Listening Barbie Chat Koa...');

module.exports = app;
