'use strict';

const assert = require('assert');

module.exports = function (world) {
  let browser = world.browser;

  world.then('I see text for voter preference intro render', function (done) {
    browser
      .waitForSelector('.voter-preferences-intro')
      .then(() => { done(); })
      .catch((err) => {
        throw err;
        done(err);
      });
  });
};