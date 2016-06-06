const API = require('wakanda-studio-api');

function activate(){
    API.NameSpace.method("Good Job ! Your extension is up and running.")
}

exports.activate = activate;
