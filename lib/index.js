var express = require('express'),
    color = require('cli-color'),
    logger = require('./middleware/logger'),
    routes = require('./routes'),
    cors = require('cors'),
    config = require('config');

/*
 * API server module
 *
 * Configures and runs the API server, includes middleware, connects to DB
 */

var STATIC_PATH = './static',
    UPLOADS_PATH = './uploads',
    app = express(),
    port = config.get('port');

app.use(logger);
app.use('/static', express.static(STATIC_PATH));
app.use('/uploads', express.static(UPLOADS_PATH));
app.use(cors());
app.use(routes);

// Start server
app.listen(port);
console.log(color.green('Listening on port ' + port + '...'));