'use strict';

module.exports = function(grunt) {
    // Show elapsed time at the end
    require('time-grunt')(grunt);
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        connect: {
            options: {
                port: 9000,
                // Enable hostname '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 36729
            },
            livereload: {
                options: {
                    open: 'http://localhost:9000',
                    middleware: function(connect) {
                        return [
                            connect.static('./')
                        ];
                    }
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            dist: {
                src: ['dist/bootstrap-session-timeout.js']
            }
        },
        watch: {
            dist: {
                files: '<%= jshint.dist.src %>',
                tasks: ['jshint:dist']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '*.html',
                    'examples/*.html',
                    'dist/*.js'
                ]
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/bootstrap-session-timeout.min.js': ['<%= jshint.dist.src %>']
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('dev', ['connect:livereload', 'watch']);
    grunt.registerTask('min', ['jshint', 'uglify']);
};
