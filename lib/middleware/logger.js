var color = require('cli-color');

/*
 * Logger middleware
 *
 * Pretty logging of HTTP responses
 */

var methodColors = {
    post   : color.cyan,
    get    : color.blue,
    put    : color.magenta,
    delete : color.red
};

/*
 * Return HTTP method tag string with assigned color
 *
 * @param {String} method
 */
function outputMethod (method) {
    var colorFn = methodColors[method.toLowerCase()] || color.white;
    return colorFn('[' + method.toUpperCase() + ']');
}

/*
 * Output HTTP status - green for good and red for bad status codes
 *
 * @param {Number} code
 */
function outputStatus (code) {
    var colorFn = code >= 200 && code < 300 ? color.green : color.red;
    return colorFn('[' + code + ']');
}

/*
 * Middleware function, logs response once sent back
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
module.exports = function (req, res, next) {
    req.on('end', function () {
        console.log(
            outputStatus(res.statusCode) +
            outputMethod(req.method) +
            ' - ' +
            color.yellow(req.url)
        );
    });

    next();
};