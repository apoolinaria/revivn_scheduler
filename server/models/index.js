// require db

module.exports = {
  getAllPickupsByUserId: (id, callback) => {
    const queryString = `SELECT * FROM pickups WHERE userId=${id}`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
};
