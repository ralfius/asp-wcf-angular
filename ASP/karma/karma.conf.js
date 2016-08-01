// Karma configuration
// Generated on Sat Jul 23 2016 09:53:53 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // angular sources
            '../Scripts/lib/angular/angular.js',
            '../Scripts/lib/angular-ui-router.js',
            '../Scripts/lib/angular/angular-mocks.js',
            '../Scripts/lib/ui-bootstrap-*.js',

            // application to be tested and tests
            '../Scripts/dist/*.js',

            // standalone tests
            '../Scripts/tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            '../Scripts/sandbox/*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../Scripts/src/**/!(*.mock|*.spec).js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            // specify a common output directory 
            dir: 'reports/coverage',
            reporters: [
                // reporters not supporting the `file` property 
                { type: 'html' }
            ],

            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        },


        // web server port. Default 9876 is conflicted with another app
        port: 19876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
}