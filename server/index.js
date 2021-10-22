const express = require('express');
const port = process.env.API_PORT || 3005;
const path = require('path');

const app = express();
const router = require('./routes');
app.use(express.json());
// npoint I would have used if I had more time to set up db connection
// app.use('/sheduler', router);

console.log(path.join(__dirname, 'client/dist'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
