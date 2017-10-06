module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    jshint: {
      all: ['js/*.js']
    },
    watch: {
      scripts: {
          files: ['js/*.js', '*.js','sass/*.sass'],
          tasks: ['jshint', 'sass'],
          options: {
              spawn: false,
          },
      },
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'css/*.css',
                    '*.html',
                    'js/*.js'
                ]
            },
            options: {
                watchTask: true,
                server: true
            }
        }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/public/',
        },],
      },
    },

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');


  // task for images processing
  grunt.registerTask('image', ['imagemin']);
  // task for browserSync, jshint, sass on the run
  grunt.registerTask('wait', ['browserSync', 'watch']);
  // "npm test" runs these task(s)
  grunt.registerTask('test', ['jshint']);
  // Default task(s).
  grunt.registerTask('default', ['jshint']);
};
