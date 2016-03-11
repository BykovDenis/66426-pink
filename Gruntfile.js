"use strict";

module.exports = function(grunt) {
    
    require("load-grunt-tasks")(grunt);
    
    require('time-grunt')(grunt);
     

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
	
	grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    
   // grunt.registerTask("default", ["browserSync", "watch"]);
	
};
