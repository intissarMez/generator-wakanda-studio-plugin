'use strict';

//TODO : Code refactoring, call the async method, add git ignore, validate name against spaces: it won't scaffold correctly if it's given a name with spaces as i'm relying on that name to create the host folder

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting () {
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
     choices: ['Studio Toolbar', 'Tree View', 'Code EditorToolbar']
   },{
     type    : 'input',
     name    : 'license',
     message : 'Add a license :',
     default :"ISC"
   }, {
     type    : 'confirm',
     name    : 'gitInit',
     message : 'Do you want to initialize a git repository ?',
     default : true
   }]).then(function (answers) {
     this.props = answers;
   }.bind(this));
 },

  writing () {
    this.fs.copyTpl(
      this.templatePath('manifest.json'),
      this.destinationPath(this.props.name +'/package.json'),{
         name: this.props.name,
         description : this.props.description,
         location : this.props.location,
         license : this.props.license
      }
    );

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(this.props.name +'/index.js')
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

    this.fs.copy(
      this.templatePath('images/YOUR_EXTENSION_ICON.png'),
      this.destinationPath(this.props.name +'/images/YOUR_EXTENSION_ICON.png')
    );

    this.fs.copy(
      this.templatePath('images/YOUR_ACTION_ICON.png'),
      this.destinationPath(this.props.name +'/images/YOUR_ACTION_ICON.png')
    );


  },

  install () {
    process.chdir(this.props.name);
    this.installDependencies({npm:true,bower:false});

  },

  end() {
    if (this.props.gitInit) {
      //this.spawnCommand('git', ['init', '--quiet',this.props.name]);
        this.spawnCommand('git', ['init', '--quiet']);
     }
    this.log('');
    this.log('Your plugin ' + this.props.name + ' has been created!');
    this.log('');
    this.log('Open quickstart.md inside the new plugin folder to get up and running quickly');
    this.log('');
    this.log('For further information, visit http://doc.wakanda.org');
    this.log('');
    }
});
