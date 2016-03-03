module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'js/',
            src: '**/*.js',
            dest: 'dist/js',
            ext: '.min.js'
        }]
    }
};