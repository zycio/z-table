(function() {
    'use strict';

    var watch = {
        js: {
            files: ['src/**/*.js'],
            tasks: ['uglify']
        },
        less: {
            files: ['src/**/*.less'],
            tasks: ['less', 'cssmin']
        }
    };

    var concat = {
        options: {
            separator: '\n'
        },
        dist: {
            src: [
                'src/index.js',
                'src/templates.js',
                'src/directive.js'
            ],
            dest: 'dest/z-table.js'
        }
    };

    var uglify = {
        dest: {
            files: {
                'dest/z-table.min.js': [
                    'dest/z-table.js'
                ]
            }
        }
    };

    var cssmin = {
        target: {
            files: {
                'dest/z-table.min.css': ['dest/z-table.css']
            }
        }
    };

    var less = {
        options: {},
        dest: {
            files: {
                'dest/z-table.css': 'src/style.less'
            }
        }
    };

    var clean = {
        dest: {
            files: [{
                src: ['dest', 'docs/libs']
            }]
        }
    };

    var copy = {
        main: {
            files: [
                {
                    expand: true,
                    src: 'angular.min.js',
                    dest: 'docs/libs/angular/',
                    cwd: 'bower_components/angular/'
                },
                {
                    expand: true,
                    src: '**',
                    dest: 'docs/libs/z-table/',
                    cwd: 'dest/'
                }
            ]
        }
    };

    module.exports = function(grunt) {
        require('jit-grunt')(grunt, {});

        grunt.initConfig({
            watch: watch,
            concat: concat,
            uglify: uglify,
            cssmin: cssmin,
            less: less,
            clean: clean,
            copy: copy
        });

        grunt.registerTask('dest', [
            'clean',
            'concat',
            'uglify',
            'less',
            'cssmin',
            'copy'
        ]);

        grunt.registerTask('default', [
            'dest',
            'watch'
        ]);
    };
})();
