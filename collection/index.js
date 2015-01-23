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

Generator.prototype.createCollectionEntries = function createCollectionEntries() {
  //todo add collection entries to end of file
  //this.writeTemplate('client/lib/subscriptions.coffee', path.join('client/lib/', this.underscoredPath + '.coffee'));
  this.writeTemplate('lib/collections.coffee', path.join('lib/', this.underscoredPath + '.coffee'));
  this.writeTemplate('server/publications.coffee', path.join('server/', this.underscoredPath + '.coffee'));
};
