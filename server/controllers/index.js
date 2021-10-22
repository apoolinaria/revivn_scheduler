const models = require('../models');

exports.pickups = {
  get: function (req, res) {
    models.pickups.getAllPickupsByUser(req.query.user_id, (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.json(data);
      }
    });
  },
  post: function (req, res) {
    // transform req.body into an array of fields to add into db
    // use create and pass down the data
    // catch err
    // on sucess send res.json with result
  },
};
