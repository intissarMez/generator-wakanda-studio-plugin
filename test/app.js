'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
//var fs = require('fs');

describe('generator-wakanda-studio-plugin :', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: "some name",description: "some description",version: "0.1.0",author: "some author",location: "some location"})
      .toPromise();
  });

  it('creates the top level file,package.json,quickstart.md and README.md', function () {
    assert.file([
      'index.js','package.json','quickstart.md','README.md'
    ]);
  });

/*
  var expectedResults = {
  "name": "generator-wakanda-studio-plugin",
  "version": "0.1.0",
  "description": "Generate a basic structure to get up and running with wakanda plugin developemet",
  "repository": "https://github.com/wakanda/generator-wakanda-studio-plugin",
  "homepage": "https://wakanda.github.io",
  "license": "MIT",
  "author" :"Wakanda SAS",
  "files": [
    "generators"
  ],
  "main": "app/index.js",
  "keywords": [
    "yeoman-generator",
    "wakanda-studio-plugin-generator",
    "wakanda studio"
  ],
  "dependencies": {
    "yeoman-generator": "^0.23.0",
    "chalk": "^1.0.0",
    "yosay": "^1.0.0"
    },
    "devDependencies": {
      "mocha": "*"
    }
  }
  var jsonDATA = fs.readFileSync('package.json', 'utf8');
  var actualResults = JSON.parse(jsonDATA);
  assert.deepEqual(expectedResults, actualResults);
*/

});
