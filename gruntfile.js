module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          loadPath: [ 'vendor' ]
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

  grunt.registerTask('default', [ 'sass:dist' ]);
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
}
