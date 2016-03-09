 module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '',
            src: ['img/*.{png,jpg,gif}'],
            dest: 'dist/'
        }]
    }
};