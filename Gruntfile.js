module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          includePaths: [ 'bower_components' ]
        },
        files: {
          'public/stylesheets/application.css' : 'public/stylesheets/application.scss'
        }
      }
    },

    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      sass: {
        files: [ 'public/stylesheets/**/*.scss' ],
        tasks: [ 'sass:dist' ]
      },
      js: {
        files: [ 'server.js', 'data/**/*.js', 'routes/**/*.js', 'data/**/*.json' ],
        tasks: [ 'express:dev' ]
      }
    }
  });

  grunt.registerTask('build', [ 'bower:install', 'sass:dist' ]);
  grunt.registerTask('dev', [ 'build', 'express:dev', 'watch' ]);
  grunt.registerTask('heroku', [ 'build' ]);

  grunt.registerTask('default', ['dev']);
}
