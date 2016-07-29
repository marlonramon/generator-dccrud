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

    prompting: {
        askForProject : prompts.askForProject
    }

});

module.exports = DCGenerator;
