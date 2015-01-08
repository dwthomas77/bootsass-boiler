module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false,
                includePaths: [
                './bower_components/bootstrap-sass-official/assets/stylesheets'
                ]
            },
            dev: {
                files: {
                    'app/css/bootstrap.css': 'app/sass/bootstrap/bootstrap-config.scss',
                    'app/css/bootstrap-theme.css': 'app/sass/bootstrap-theme/bootstrap-theme.scss'
                } 
            }
        },

        // JS Hint
        jshint: {
            // define the files to lint
            files: ['gruntfile.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            dev: {
                files: ['app/sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'sass', 'jshint'
    ]);

};