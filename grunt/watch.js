module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'js/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'scss/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
    
    jade: {
        files: [
            'jade/*.jade'
        ],
        tasks: [
            'jade'
        ]
    },
    
};