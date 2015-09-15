var express = require('express'),
    controllers = {
        info : require('./controller/info')
    };

/*
 * Routes module
 *
 * Contains routes mapping to all app's endpoints
 */

var router = express.Router();

// Info
router.get('/info/:username', controllers.info);

module.exports = router;