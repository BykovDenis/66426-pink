"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);


  grunt.initConfig({
    sass: {
      style: {
        files: {
          "build/css/style.css": "sass/style.scss"
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
        src: "build/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: "./build",
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
      tasks: ["sass", "postcss", "csso", "jade", "copy", "uglify", "imagemin"],
      options: {
        spawn: false
      }
    },

    csso:{
      style:{
        options:{
          reports: "gzip"
        },
        files:{
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/img/'             // Destination path prefix
        }]
      }
    },

    copy:{
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      }
    },

    uglify: {
      options: {
        mangle: {
          except: ['jQuery', 'Backbone']
        }
      },
      my_target: {
        files: {
          'build/js/script.min.js': ['js/script.js']
        }
      }
    },

    clean: {
      build: ["build"]
    }


  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build",["clean", "jade", "sass", "postcss", "csso", "imagemin", "uglify", "copy"])
};
