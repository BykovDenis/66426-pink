module.exports = function(grunt) {

    require('time-grunt')(grunt);
     

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
	
	grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
 
	
};