
var koa = require('koa');
var routes = require('./routes.js')
var bodyParser = require('body-parser');
var app = koa();

module.exports = function(app, config) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use('',routes);

  return app;
};


app.use(function *(){
  this.body = 'Hello World Koa';
});

app.listen(3000);
