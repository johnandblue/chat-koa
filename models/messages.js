// Example model

const dbPath = __dirname + '/db.json';
const fs = require('fs')
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));


const Message = {}

Message.getAll = function() {
  return db.msgs;
}

Message.postMessage = function(tempMsg) {
  db.msgs.push(tempMsg);
}

Message.deleteMsgs = function() {
  db.msgs = [];
}


setInterval(function () {
  fs.writeFile(dbPath, JSON.stringify(db));
}, 5000);

module.exports = Message;
