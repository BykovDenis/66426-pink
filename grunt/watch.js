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
            'sass/style.scss',
            'sass/blocks/*.scss'
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
    
    browserSync: {
        files: [
            '*.html',
            '*.css'
        ],
        tasks: [
            'browsersync:dev'
        ]
    }    
    
};