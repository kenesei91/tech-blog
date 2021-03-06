const router = require('express').Router();

const apiRoutes = require('./api');

// referencing handlebars
const homeRoutes = require('./home-routes.js');

const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
// referencing handlebars
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;