"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 1 version",
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
          ]})
        ]
      },
      style: {
        src: "css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    jade: {

        options: {
          processName: function(filename) {
            return filename.toUpperCase();
          },
          client: false,
          runtime: true,
          pretty: ' ',
          compileDebug: false,
          extension: false,
          inline: false
        },
        all: {
            files: [{
                expand: true,
                cwd: 'jade/',
                src: '**/*.jade',
                dest: '',
                ext: '.html'
            }]
        }

    },

    watch: {
      files: ["sass/**/*.{scss,sass}","jade/**/*.{jade}"],
      tasks: ["sass", "postcss","jade"],
      options: {
        spawn: false
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
};
