# LinkedIn Profile Info API

> A simple API that requests and parses basic public LinkedIn profile data in JSON format from a given username using [RequestJS](https://github.com/request/request) and [CheerioJS](https://github.com/cheeriojs/cheerio)

## Setup

    git clone git@github.com:tancredi/linkedin-profile-info-api.git
    cd linkedin-profile-info-api
    npm install

## Run

    npm start

## Endpoints

* `GET /info/:username` Returns profile information in JSON format from given LinkedIn username

## Configuration

Environment variables used by the app

* `PORT - ` - Port to expose the API server
* `PROXY_URL` - Proxy URL for outbound requests

## Example Response

Here's an example response processing my username (`/info/tancre`)

```json
{
    "info": {
        "name": {
            "full": "Tancredi Trugenberger",
            "first": "Tancredi",
            "last": "Trugenberger"
        },
        "history": [{
            "type": "education",
            "title": "ENAIP Santander",
            "institution": "Tecnico Hardware/Software, informatics, electronics, electrics",
            "range": {
                "start": "2004-01-01T00:00:00.000Z",
                "end": "2008-01-01T00:00:00.000Z"
            },
            "description": null
        },
        {
            "type": "work",
            "title": "Web Designer Intern",
            "employer": "Macpro Studio",
            "range": {
                "start": "2009-02-01T00:00:00.000Z",
                "end": "2009-03-31T23:00:00.000Z"
            },
            "description": "Worked as Junior Developer and Web Designer where I was introduced to the agency world by working for small and large businesses and brands within an agency environment."
        }, {
            "type": "work",
            "title": "Web Designer, Graphic Designer, Developer",
            "employer": "Liquidimage",
            "range": {
                "start": "2010-01-01T00:00:00.000Z",
                "end": "2011-01-01T00:00:00.000Z"
            },
            "description": "Worked for numerous firms as Web and Print Developer and Designer and managed to drastically expand my skills set and professional network in London.\n\nSome examples of my work in this period:\n\n- www.alfonsospain.com (brand, design for print, web design and development)\n- www.voiceofspain.com (brand, design for print, web design and development)\n- www.golocalise.com (back-end, design for print)\n- www.sound-engine.com (brand, design for print, web design and development)\n- www.losgamato.it (co-founder, design, development)\n- www.enocratia.com (development)"
        }, {
            "type": "work",
            "title": "Junior Interactive Designer",
            "employer": "The Crocodile",
            "range": {
                "start": "2011-02-01T00:00:00.000Z",
                "end": "2012-01-01T00:00:00.000Z"
            },
            "description": "Worked as an Interactive Designer on a number of digital integrated campaigns (email templates, landing pages, animated banners, small designs for print).\n\nClients included big brands such as Nectar Business, EMC, Intel, American Express, Sage and others."
        }, {
            "type": "work",
            "title": "Front-end Developer & UX",
            "employer": "BraveNewTalent",
            "range": {
                "start": "2012-01-01T00:00:00.000Z",
                "end": "2012-07-31T23:00:00.000Z"
            },
            "description": "With BraveNewTalent, worked on a large and scalable web platform where I delivered front-end development using my skills in Javascript, CSS, HTML - and also had a number of Design & UX responsibilities. In addition, the work allowed me to practice and hone my PHP skill further.\n\nResponsibilities included a number of architectural decisions and increased my focus on progressive enhancement, graceful degradation, accessibility, performance optimisation and best-practice.\n\nWorking as a part of a large team, I took on several roles / team structures while working in an Agile environment applying Scrum, thus improving my confidence in team-work, communication skills and process."
        }, {
            "type": "work",
            "title": "Developer & Designer",
            "employer": "Liquidimage",
            "range": {
                "start": "2012-01-01T00:00:00.000Z",
                "end": "2012-01-01T00:00:00.000Z"
            },
            "description": "Freelance website development (see below)"
        }, {
            "type": "work",
            "title": "Front End Dev & UX/UI Designer",
            "employer": "Memrise",
            "range": {
                "start": "2012-08-31T23:00:00.000Z",
                "end": "2013-08-31T23:00:00.000Z"
            },
            "description": "Thinking, designing and implementing functional and juicy pieces of interface on the most memorable place on the internet"
        }, {
            "type": "work",
            "title": "Lead Web Developer",
            "employer": "Kano Computing",
            "range": {
                "start": "2013-08-31T23:00:00.000Z",
                "end": "2014-12-01T00:00:00.000Z"
            },
            "description": "Hacking all sorts of things for the next generation of makers, building the web team"
        }, {
            "type": "work",
            "title": "Co-founder & CPO",
            "employer": "Workshape.io",
            "range": {
                "start": "2014-12-01T00:00:00.000Z",
                "end": null
            },
            "description": "Workshape.io is the talent matching service for Startup. \n\nWe kill the rhetoric in recruitment by converging on interest first, before unlocking the conversation second. The end result is a high signal, zero noise talent marketplace - exactly what the technology professionals need."
        }],
        "skills": ["JavaScript", "CSS3", "HTML 5", "PHP", "MySQL", "Node.js", "MongoDB", "jQuery", "LESS", "Git", "Adobe Creative Suite", "Photoshop", "Illustrator", "ExpressionEngine", "Drupal", "Wordpress", "Joomla", "CodeIgniter", "Processing.js", "Canvas", "SVG", "Express.js", "GIMP", "Straight Talking", "HTML5", "Paradigm Shifts", "Thinking Outside The Box", "Juggling", "CSS", "User Experience"]
    }
}
```

## License

Copyright (c) 2015 WorkShape.io - Released under the [MIT](https://github.com/tancredi/linkedin-profile-info-api/blob/master/LICENSE) license