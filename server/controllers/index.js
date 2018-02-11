var models = require('../models');

module.exports = {
  
  messages: {
    
    get: function (req, res) {
      models.messages.get((err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(result);
        }
      });
    },
    
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body, (err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(result);
        }
      });
    }
  },

  users: {
    
    get: function (req, res) {
      models.users.get((err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(result);
        }
      });
    },
    
    post: function (req, res) {
      models.users.post(req.body, (err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(result);
        }
      });
    }
  }
  
};

