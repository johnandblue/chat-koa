
var koa = require('koa');
var routes = require('./routes.js')
var bodyParser = require('koa-bodyparser');
var serve = require('koa-static');
var app = koa();

app.use(serve('./public'));
app.use(bodyParser());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(routes);

app.listen(3000);
console.log('Listening Barbie Chat Koa...');

module.exports = app;
