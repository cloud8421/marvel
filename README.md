# Marvel

Learning Angular.js while using the [Marvel API](http://developer.marvel.com).

[![Build Status](https://travis-ci.org/cloud8421/marvel.png?branch=master)](https://travis-ci.org/cloud8421/marvel)

## Setup

This project requires a working installation of Ruby (>= 1.9).

Easy as:

    $ bundle
    $ cp env.sample .env

Then, update `.env` with a working Marvel Api key.

In addition, Marvel whitelists domain allowed to connect using the specified API key.

The simplest option is to reverse proxy using [Pow](http://pow.cx) or similar. For fine grain control (using Pow):

- Create a developer account and add `marvel.dev` as an allowed domain

- Reverse proxy port 9292 to `marvel.dev` on your machine:

`$ echo '9292' > ~/.pow/marvel`

- Run the server:

`$ bundle exec rackup`

- Open <http://marvel.dev> in your browser

## Testing

Tests are managed with Karma, Protractor and npm. Assuming you have a working Node installation, you need to:

    $ npm install

Then, make sure you have webdriver installed:

    $ make install_webdriver

And run it:

    $ make start_webdriver

After that, you can start the test watcher with:

    $ make watch

One-off runs are possible with:

    $ npm test

## Heroku deployment

Assuming you're calling the new app `my-marvel-app`

    $ heroku create my-marvel-app
    $ heroku config:set MARVEL_API_KEY=your-api-key RACK_ENV=production --app my-marvel-app
    $ git push heroku master
    $ heroku open
