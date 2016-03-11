module.exports =  {
    // Development settings
  
    autoprefixer: {
      options: {
        browsers: ['last 30 versions']
      },
      files: {
        'css/style.css': 'css/style.css'
      }
    },
    watch: {
      sass: {
        files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }

    

};