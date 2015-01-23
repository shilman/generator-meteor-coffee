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

Generator.prototype.createSpecFiles = function createSpecFiles() {
  this.writeTemplate('tests/jasmine/client/unit/spec_helper.coffee', 'tests/jasmine/client/unit/spec_helper.coffee');
  this.writeTemplate('tests/jasmine/client/unit/views/view_spec.coffee', path.join('tests/jasmine/client/unit/views', this.underscoredPath + '_spec.coffee'));
};
