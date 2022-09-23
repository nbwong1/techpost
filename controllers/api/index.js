// add additional routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');

// add additional routes
router.use('/users', userRoutes);

module.exports = router;
