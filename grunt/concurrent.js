module.exports = {

    // Опции
    options: {
        limit: 3
    },

    // Задачи разработки
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'sass:dev',
        'uglify'
    ],

    // Производственные задачи
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify'
    ],

    // Задачи изображений
    imgFirst: [
        'imagemin'
    ]
};