module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['scripts/*'],
        dest: '_site/scripts/main.js',
        options: {
          separator: ';'
        }
      }
    },
    uglify: {
      js: {
        src: 'scripts/main.js',
        dest: '_site/scripts/main.min.js'
      }
    },
    watch: {
      js: {
        files: ['scripts/**/*.js'],
        tasks: ['default'],
      }
    },
    githubPages: {
      target: {
        // The folder where your gh-pages repo is
        src: '_site',
        // The second ignored directory with the .git folder
        dest: '_site_git'
        options: {
          // The default commit message for the gh-pages branch
          commitMessage: 'push'
        },
        // The folder where your gh-pages repo is
        src: '_site'
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['watch', 'concat', 'uglify']);
  grunt.registerTask('deploy', ['githubPages:target']);
};
