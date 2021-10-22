const controller = require('./controllers');
const router = require('express').Router();

router.get('/pickups', controller.pickups.get);
router.post('/pickups', controller.pickups.post);

module.exports = router;
