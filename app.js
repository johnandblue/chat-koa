
var koa = require('koa');
var fs = require('fs');
var app = koa();
var serve = require('koa-static');
var routes = require('./routes.js')
var bodyParser = require('koa-bodyparser')();

const notFound = fs.readFileSync('./public/404-barbie.html', 'utf8');

app.use(serve('./public'));
app.use(bodyParser);
app.use(routes.routes());

app.use(function* (next) {
  if (this.status === 404) this.body = notFound;
});

app.listen(3000);
console.log('Listening Barbie Chat Koa...');

module.exports = app;
