# generator-meteor-coffee [![Build Status](https://secure.travis-ci.org/shilman80/generator-meteor.png?branch=master)](https://travis-ci.org/shilman80/generator-meteor-coffee)

A [Coffeescript](http://coffeescript.org) [Meteor](http://meteor.com) project generator for [Yeoman](http://yeoman.io).

This is a Coffeescript port of the excellent [generator-meteor](https://github.com/Pent/generator-meteor) Yeoman generator.
If you prefer straight Javascript, check it out.

Minor modifications:
 - Removed a few files to keep the scaffolding simple ()
 - Moved routes.coffee to lib/
 - 



[![NPM](https://nodei.co/npm/generator-meteor-coffee.png)](https://nodei.co/npm/generator-meteor-coffee/)

## Prerequisites
* [nodejs](http://nodejs.com)
* [yeoman](http://yeoman.io)

To install yeoman from npm, run:

```
$ npm install -g yo
```

### The Best Instructions You'll See All Day

To install generator-meteor from npm, run:

```
$ npm install -g generator-meteor-coffee
```

Create a new project directory:

```
$ mkdir your-new-project && cd $_
```

Initiate the generator:

```
$ yo meteor-coffee
```

Finally, run Meteor:

```
$ meteor
```

## *NEW* View and Collection Generators
Generator-Meteor now supports primitive scaffolding using Yeoman sub-generators

To generate a new Meteor Collection, try using:

```
$ yo meteor-coffee:collection yourCollectionName
```

To generate a new Meteor Template view/events/helper, try this one out:

```
$ yo meteor-coffee:view viewName
```

These generators will be extended over time and I hope you make good use of them!

## Structure Generated with Iron-Router Enabled
```
/
    .meteor/
        .gitignore
        packages
        release
    client/
        lib/
            subscriptions.coffee
        styles/
            theme.css
        views/
            common/
            home.html
            home.coffee
            layout.html
        routes.coffee
    lib/
        collections.coffee
    private/
    public/
        fonts/
        images/
        robots.txt
    server/
        publications.coffee
        security.coffee
        server.coffee
    .gitignore <- contains sensible defaults for files/folders to ignore
    LICENSE <- default empty license file
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
