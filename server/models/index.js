var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var sql = "SELECT * from messages";
      db.query(sql, function (err, result) {
        callback(err, result);
        console.log('1 record inserted');
      });
    },

    post: function (obj, callback) {
      var usernameID;
      var getUsername = "SELECT ID FROM users WHERE name =(?);";
      db.query(getUsername, obj.username, function (err, result) {
        usernameID = result;
      });
      console.log('this is the messages post ', obj);
      var sql = "INSERT INTO messages (message) VALUES (?);";
      db.query(sql, [obj.message, obj.roomname, usernameID], function (err, result) {
        callback(err, result);
        console.log('1 record inserted');
      });
    }
  },

  users: {
    get: function (callback) {
      var sql = "SELECT * from users";
      db.query(sql, function (err, result) {
        callback(err, result);
        console.log('1 record inserted');
      });
    },

    post: function (obj, callback) {
      var sql = "INSERT INTO users (name) VALUES (?);";
      db.query(sql, obj.username, function (err, result) {
        callback(err, result);
        console.log('1 record inserted');
      });
    }
  }

};

