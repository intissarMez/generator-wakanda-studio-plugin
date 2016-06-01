'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    this.log(yosay(
      'Welcome to the Wakanda Studio Plugin Generator!'
    ));

   return this.prompt([{
     type    : 'input',
     name    : 'name',
     message : 'Your plugin  name : ',
     default : this.appname
   }, {
     type    : 'input',
     name    : 'description',
     message : 'What does your plugin do ?'
   },{
     type    : 'list',
     name    : 'location',
     message : 'Where your extention will be available?',
     choices: ['studioToolbar', 'solutionExplorerTreeViewContextMenu', 'codeEditorToolbar']
   }]).then(function (answers) {
     this.props = answers;
   }.bind(this));
 },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('manifest.json'),
      this.destinationPath('manifest.json'),{
         name: this.props.name,
         description : this.props.description,
         location : this.props.location
      }
    );

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );

    this.fs.copy(
      this.templatePath('YOUR_EXTENSION_ICON.png'),
      this.destinationPath('YOUR_EXTENSION_ICON.png')
    );
    this.fs.copy(
      this.templatePath('quickstart.txt'),
      this.destinationPath('quickstart.txt')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),{
         name: this.props.name,
         description : this.props.description
      }
    );

    this.fs.copy(
      this.templatePath('test/test.js'),
      this.destinationPath('test/test.js')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
