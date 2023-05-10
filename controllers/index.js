const router = require('express').Router();

const home = require('./render');
const rsvp = require('./rsvpRoutes');

router.use('/', home);
router.use('/rsvp', rsvp);

module.exports = router;