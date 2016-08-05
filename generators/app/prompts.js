'use strict';

var chalk = require('chalk');


module.exports = {
    askForProject
};


function askForProject() {

    var projectName = this.appname.toString().split(' ')[0];

    return this.prompt([{
        type: 'input',
        name: 'project',
        message: 'Qual é o nome do projeto?',
        default: projectName
    }]).then(function(answers) {
        this.config.project = answers;
    }.bind(this));

}
