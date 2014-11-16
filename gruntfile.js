module.exports = function(grunt) {
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

    watch: {
      sass: {
        files: [ 'public/stylesheets/**/*.scss' ],
        tasks: [ 'sass:dist' ]
      }
    }
  });

  grunt.registerTask('default', [ 'bower:install', 'sass:dist' ]);
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
}
