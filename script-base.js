'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  this.underscoredPath = this._.underscored(this.name);
  this.nameOnly = this._.last(this.name.split('/'))

  this.classyName = this._.classify(this.nameOnly);
  this.dasherizedName = this._.dasherize(this.nameOnly);
  this.classyNameSingular = this.classyName.replace(/s$/g, '')
  this.nameOnlySingular = this.nameOnly.replace(/s$/g, '')
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.writeTemplate = function writeTemplate(source, destination) {
  yeoman.generators.Base.prototype.template.apply(this, [source, destination]);
};
