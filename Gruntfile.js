module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
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

  grunt.registerTask('dev', [ 'express:dev', 'watch' ]);

  grunt.registerTask('default', ['dev']);
};
