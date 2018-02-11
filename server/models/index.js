var db = require('../db');

module.exports = {
  
  messages: {
    
    get: function (callback) {
      var sql = "SELECT * from messages";
      db.query(sql, function (err, result) {
        callback(err, result);
      });
    },

    post: function (obj, callback) {
      var usernameID;
      console.log(obj)
      var insertUsername = "INSERT INTO users (name) values (?);";
      db.query(insertUsername, obj.username, function (err, result) {
        var getUsername = "SELECT ID FROM users WHERE name =(?);";
          console.log(result);
        db.query(getUsername, obj.username, function (err, result) {
          usernameID = result[0].ID;
          console.log('usernameID1', usernameID);
          console.log('usernameID2', usernameID);
          var sql = "INSERT INTO messages (message, roomname, username) VALUES (?, ?, ?);";
          db.query(sql, [obj.message, obj.roomname, usernameID], function (err, result) {
            callback(err, result);
          });
        });
      });
    }
  },

  users: {
    
    get: function (callback) {
      var sql = "SELECT * from users";
      db.query(sql, function (err, result) {
        callback(err, result);
      });
    },

    post: function (obj, callback) {
      var sql = "INSERT INTO users (name) VALUES (?);";
      db.query(sql, obj.username, function (err, result) {
        callback(err, result);
      });
    }
  }

};

