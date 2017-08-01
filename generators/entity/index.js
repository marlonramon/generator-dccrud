'use strict';

var path = require('path'),
    yeoman = require('yeoman-generator'),
    prompts = require('./prompts_'),
    _ = require('lodash'),
    chalk = require('chalk'),
    constants = require('../generator-constants');

var EntityGenerator = yeoman.Base.extend({});



module.exports = EntityGenerator.extend({
    constructor: function() {

        yeoman.Base.apply(this, arguments);

        this.argument('name', {
            type: String,
            required: true,
            description: 'Entity name'
        });

        this.option('visibility', {
            desc: 'Specify the class visibility',
            type: String,
            defaults: 'public'
        });

        console.log('Criando a entidade: ' + this.name);


    },

    initializing: function() {
        /*this.props = this.config.getAll();
        this.props.package = parts.join('.');
        this.props.dir = parts.join('/');
        this.props.name = name;

        if (this.props.package) {
            this.props.package = (this.props.namespace ? '.' : '') + this.props.package;
        }*/
    },

    writing: function() {
        /*var namespace = (this.props.namespace || '').replace(/\./g, '/');*/
        var project = this.config.get('project');

        this.entityName = this.name;

        console.log('akii: ' + constants.COMMON);

        var packageName = constants.BASE_PACKAGE + _.lowerCase(project) + constants.ENTITY_PACKAGE;

        this.entityPackage = packageName;

        this.template('_Entity.java', packageName + this.entityName + '.java');

    },


    prompting: {
        /* pre entity hook needs to be written here */
        //  askForMicroserviceJson: prompts.askForMicroserviceJson,
        /* ask question to user if s/he wants to update entity */
        //askForUpdate: prompts.askForUpdate,
        askForFields: prompts.askForField
            //askForFieldsToRemove: prompts.askForFieldsToRemove,
            //askForRelationships: prompts.askForRelationships,
            /*askForRelationsToRemove: prompts.askForRelationsToRemove,
            askForDTO: prompts.askForDTO,
            askForService: prompts.askForService,
            askForPagination: prompts.askForPagination*/
    }
});
