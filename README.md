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

## License

Copyright (c) 2015 WorkShape.io - Released under the [MIT](https://github.com/tancredi/linkedin-profile-info-api/blob/master/LICENSE) license