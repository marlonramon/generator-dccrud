'use strict';

// var chalk = require('chalk'),
//     path = require('path'),
//     _ = require('lodash'),
//     shelljs = require('shelljs');


module.exports = {
    askForField
};

function askForField() {

    var prompts = [{
            type: 'confirm',
            name: 'fieldAdd',
            message: 'Adiciona um campo, baitola',
            default: true
        }, {
            when: function(response) {                
                return response.fieldAdd === true;

            }
        }

    ];

    this.prompt(prompts);


}
