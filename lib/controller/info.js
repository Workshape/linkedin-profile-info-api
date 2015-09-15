var request = require('request'),
    cheerio = require('cheerio'),
    moment = require('moment'),
    config = require('config');

// Override request if a proxy is configured
var proxyUrl = config.get('proxyUrl');

if (proxyUrl) {
    request = request.defaults({ proxy: proxyUrl });
}

/*
 * Info controller - Crawl basic profile info for given LinkedIn username
 *
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
module.exports = function (req, res, next) {
    var username = req.params.username,
        $, profile;

    request('https://www.linkedin.com/in/' + username, function (err, response, body) {

        if (err) {
            return next(err);
        }

        if (response.statusCode !== 200) {
            return res.status(response.statusCode).send('Responded with ' + response.statusCode);
        }

        $ = cheerio.load(body);

        profile = $('#profile');

        if (!profile.length) {
            return res.status(404).send('Profile not found');
        }

        res.status(200).send({ info: parseInfo(profile) });
    });
};

/*
 * Parse skills from endorsement tags all over DOM tree
 *
 * @param {Cheerio} profile
 * @return {[String]}
 */
function parseSkills(profile) {
    var skills = [];

    profile.find('.endorse-item-name').each(function (i, el) {
        skills.push(cheerio(el).text());
    });

    return skills;
}

/*
 * Parse profile info from given profile DOM tree
 *
 * @param {Cheerio} profile
 * @return {Object}
 */
function parseInfo(profile) {
    return {
        name    : parseName(profile),
        history : parseHistory(profile),
        skills  : parseSkills(profile)
    };
}

/*
 * Parse history data from given profile DOM tree
 *
 * @param {Cheerio} profile
 * @return {Object}
 */
function parseHistory(profile) {
    var history = [];

    profile.find('#background-experience .section-item').each(function (i, el) {
        var experience = cheerio(el);

        history.push({
            type        : 'work',
            title       : experience.find('h4').text(),
            employer    : experience.find('h5').text(),
            range       : parseRange(experience.find('.experience-date-locale').text()),
            description : experience.find('p.description').text()
        });
    });

    profile.find('#background-education .section-item').each(function (i, el) {
        var experience = cheerio(el);

        history.push({
            type        : 'education',
            title       : experience.find('h4').text(),
            institution : experience.find('h5').text(),
            range       : parseRange(experience.find('.education-date').text()),
            description : experience.find('p.notes').text() || null
        });
    });

    return history.sort(function (a, b) {
        return a.range.start > b.range.start ? 1 : -1;
    });
}

/*
 * Parse dates range from LinkedIn format
 *
 * @param {String} str
 * @return {Object}
 */
function parseRange(str) {
    var parts = str.split(' (')[0].split(' – ');

    if (parts[0].indexOf(' ') === -1) {
        return {
            start : parseYearDate(parts[0] || ''),
            end   : parseYearDate(parts[1] || '')
        };
    }

    return {
        start : parseMonthAndYearDate(parts[0] || ''),
        end   : parseMonthAndYearDate(parts[1] || '')
    };
}

/*
 * Parse Linkedin year-only format date
 *
 * @param {String} str
 * @return {Date}
 */
function parseYearDate(str) {
    if (!str || str.indexOf('Present') !== -1) { return null; }

    return moment(str, 'YYYY')._d;
}

/*
 * Parse Linkedin year-month format date
 *
 * @param {String} str
 * @return {Date}
 */
function parseMonthAndYearDate(str) {
    if (!str || str.indexOf('Present') !== -1) { return null; }

    return moment(str, 'MMMM YYYY')._d;
}

/*
 * Parse person first, last and full name from given profile DOM tree
 *
 * @param {Cheerio} profile
 * @return {Object}
 */
function parseName(profile) {
    var fullName = profile.find('.full-name').text() || '',
        nameParts = fullName.split(' '),
        firstName = nameParts.splice(0, 1)[0],
        lastName = nameParts.join(' ');

    return {
        full  : fullName,
        first : firstName,
        last  : lastName
    };
}