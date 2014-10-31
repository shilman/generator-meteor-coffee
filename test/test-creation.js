/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('meteor generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('meteor-coffee:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      'client/client.coffee',
      'client/styles/theme.less',
      'client/lib/subscriptions.coffee',
      'client/views/layout.html',
      'client/views/home.html',
      'client/views/home.coffee',
      'client/views/common/loading.html',
      'lib/routes.coffee',
      'lib/collections.coffee',
      'public/robots.txt',
      'server/publications.coffee',
      'server/server.coffee',
      '.meteor/.gitignore',
      '.meteor/packages',
      '.meteor/release',
      '.gitignore',
      'LICENSE',
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      ironRouter: true,
      bootstrap: true
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
