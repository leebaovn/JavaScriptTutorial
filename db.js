var low = require('lowdb');
var fileSync = require('lowdb/adapters/FileSync');
var adapter = new fileSync('db.json');

db = low(adapter);

db.defaults({ users: [] })
  .write();

module.exports = db