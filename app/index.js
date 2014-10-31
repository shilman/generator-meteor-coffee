'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

//construct generator
var Generator = module.exports = function Generator(args, options) {
  //retrieve additional arguments, inheritance in js???!
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', {type: String, required: false});
  //set appname from argument-defined appname or get the path
  this.appname = this.appname || path.basename(process.cwd());
  //clean appname up to use as a variable
  this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function welcome() {
  // welcome message
  console.log(this.yeoman);
};

Generator.prototype.askFor = function askFor() {
  var cb = this.async(),
    prompts = [{
      type: 'confirm',
      name: 'ironRouter',
      message: 'Shall we include Iron Router?',
      default: true
    }, {
      type: 'confirm',
      name: 'bootstrap',
      message: 'Shall we include Bootstrap with LESS?',
      default: true
    }];

  this.prompt(prompts, function (answers) {
    this.ironRouter = answers.ironRouter;
    this.bootstrap = answers.bootstrap;
    cb();
  }.bind(this));
};

// generate the basic scaffolding for a Meteor project
Generator.prototype.app = function app() {
  this.mkdir('client');
  this.mkdir('client/styles');
  this.mkdir('client/lib');
  this.mkdir('client/views');
  this.mkdir('client/views/common');
  this.mkdir('lib');
  this.mkdir('server');
  this.mkdir('server/lib');
  this.mkdir('public');
  this.mkdir('public/fonts');
  this.mkdir('public/images');
  this.mkdir('private');
  this.mkdir('packages');
  this.mkdir('.meteor');

  this.copy('client/client.coffee', 'client/client.coffee');
  this.copy('client/lib/subscriptions.coffee', 'client/lib/subscriptions.coffee');
  this.copy('client/views/home.coffee', 'client/views/home.coffee');
  this.copy('client/views/home.html', 'client/views/home.html');
  this.copy('client/views/common/loading.html', 'client/views/common/loading.html');
  this.copy('lib/collections.coffee', 'lib/collections.coffee');
  this.copy('public/robots.txt', 'public/robots.txt');
  this.copy('server/publications.coffee', 'server/publications.coffee');
  this.copy('server/server.coffee', 'server/server.coffee');
  this.copy('.meteor/gitignore', '.meteor/.gitignore');
  this.copy('.meteor/release', '.meteor/release');
  this.copy('gitignore', '.gitignore');
  this.copy('LICENSE', 'LICENSE');
  this.copy('README.md', 'README.md');
};

var packages = [
  'standard-app-packages',
  'coffeescript',
];

Generator.prototype.addRouter = function addRouter() {
  if (this.ironRouter) {
    this.copy('lib/routes.coffee', 'lib/routes.coffee');
    this.copy('iron-router/layout.html', 'client/views/layout.html');
    packages.push('iron:router');
  } else {
    this.copy('client/views/layout.html', 'client/views/layout.html');
  }
};

Generator.prototype.addBootstrap = function addBootstrap() {
  if (this.bootstrap) {
    this.copy('bootstrap/theme.less', 'client/styles/theme.less');
    packages.push('bootstrap');
  } else {
    this.copy('client/styles/theme.css', 'client/styles/theme.css');
  }
};

Generator.prototype.done = function done() {
  this.write('.meteor/packages', packages.join('\n'));
};
