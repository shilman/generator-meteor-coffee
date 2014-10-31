'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var scriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  scriptBase.apply(this, arguments);
  // calling NamedBase allows us to retrieve the name argument associated with
  // yo meteor:view name, and set it to this.name *magic*
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(Generator, scriptBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  this.writeTemplate('client/view/view.html', path.join('client/views', this.underscoredName + '.html'));
  this.writeTemplate('client/view/view.coffee', path.join('client/views', this.underscoredName + '.coffee'));
};
