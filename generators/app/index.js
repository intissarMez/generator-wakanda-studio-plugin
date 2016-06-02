'use strict';

//TODO : Code refactoring, call the async method, add git init

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
     message : 'What is your plugin  name ? ',
     default : this.appname
   },{
     type    : 'input',
     name    : 'description',
     message : 'What does your plugin do ?'
   },{
     type    : 'list',
     name    : 'location',
     message : 'Where your plugin will be available?',
     choices: ['studioToolbar', 'solutionExplorerTreeViewContextMenu', 'codeEditorToolbar']
   }, {
     type    : 'confirm',
     name    : 'gitInit',
     message : 'Do you want to initialize a git repository ?',
     default : true
   }]).then(function (answers) {
     this.props = answers;
   }.bind(this));
 },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('manifest.json'),
      this.destinationPath(this.props.name +'/manifest.json'),{
         name: this.props.name,
         description : this.props.description,
         location : this.props.location
      }
    );

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(this.props.name +'/index.js')
    );

    this.fs.copy(
      this.templatePath('YOUR_EXTENSION_ICON.png'),
      this.destinationPath(this.props.name +'/YOUR_EXTENSION_ICON.png')
    );
    this.fs.copy(
      this.templatePath('quickstart.md'),
      this.destinationPath(this.props.name +'/quickstart.md')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.props.name +'/README.md'),{
         name: this.props.name,
         description : this.props.description
      }
    );

    this.fs.copy(
      this.templatePath('test/test.js'),
      this.destinationPath(this.props.name +'/test/test.js')
    );
  },

  install: function () {
    this.installDependencies();

  },

  end: function () {
    /*
    if (this.props.gitInit) {
       this.spawnCommand('git', ['init', '--quiet']);
      }
    this.log('');
    this.log('Your plugin ' + this.props.name + ' has been created!');
    this.log('');
    this.log('Open quickstart.md inside the new plugin folder to get up and running quickly');
    this.log('');
    this.log('For further information, visit http://doc.wakanda.io');
    this.log('\r\n');*/
    }
});
