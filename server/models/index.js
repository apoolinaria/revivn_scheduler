// require db

module.exports = {
  getAllPickupsByUserId: (id, callback) => {
    const queryString = 'SELECT * FROM pickups WHERE userId = ?';
    db.query(queryString, id, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
};
