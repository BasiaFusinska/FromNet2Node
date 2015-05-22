module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: '*'
            },
            all: ['.'],
        },
        exec: {
            nodemon: {
                cmd: 'nodemon ./bin/www'
            }
        }
	});

	grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default', ['jasmine_node', 'karma']);
    grunt.registerTask('nodemon', ['exec:nodemon']);
};