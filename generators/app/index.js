'use strict';

var path = require('path'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay'),
    validator = require('validator'),
    superb = require('superb'),
    prompts = require('./prompts');


var DCGenerator = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);
        this.log(yosay('DCCrud Generator Tabajara!'));
    },

    initializing: {
        teste: function() {
            console.log('passou');
        }
    },

    prompting: {
        askForProject: prompts.askForProject
    },

    configuring: {

        generateEntities: function() {

            this.composeWith('dccrud:entity', {
                options: {

                },
                args: ['Teste']
            }, {
                local: require.resolve('../entity')
            });

        }

    },
    end: {
        eita: function() {
            console.log('fimmmmmmmmmmm');
        }
    }



});

module.exports = DCGenerator;
