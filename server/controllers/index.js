var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req.body);
    },
    post: function (req, res) {
      console.log('uisgfderfgjsrbfjebhrvejhrbjehrbvjehrbcjebv', req.body);
      models.messages.post(req.body, (result) => {
        res.send(result);
      });
      
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body);
    },
    post: function (req, res) {
      models.users.post(req.body);
      res.send();
    }
  }
};

