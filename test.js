#! /usr/bin/env node

require('source-map-support').install();

require('es6-shim');
require('zone.js');
require('reflect-metadata');

var Jasmine = require('jasmine');
var jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: './dist',
    spec_files: [
        '**/*.spec.js'
    ]
});

var testing = require('angular2/testing');
var platform_testing_server = require('angular2/platform/testing/server');

testing.setBaseTestProviders(
    platform_testing_server.TEST_SERVER_PLATFORM_PROVIDERS,
    platform_testing_server.TEST_SERVER_APPLICATION_PROVIDERS
);

jasmine.execute();