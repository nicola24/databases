var db = require('../db');

module.exports = {
  messages: {
    get: function (obj) {
      //console.log('this is inside of models messages get', obj);
    }, // a function which produces all the messages

    post: function (obj) {
      console.log('this is the messages post ', obj);
      var sql = "INSERT INTO messages (message) VALUES (?);";
      db.query(sql, obj.message, function (err, result) {
        if (err) { throw err; } 
        console.log('1 record inserted');
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (obj) {
      //console.log('this is inside of models get', obj);
    },

    post: function (obj) {
      console.log('user post', obj);
      var sql = "INSERT INTO users (name) VALUES (?);";
      db.query(sql, obj.username, function (err, result) {
        if (err) { throw err; } 
        console.log('1 record inserted');
      });
    }
  }

};

