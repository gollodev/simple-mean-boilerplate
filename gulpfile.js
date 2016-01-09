var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    stylus = require('gulp-stylus'),
    jeet = require('jeet'),
    nib = require('nib'),
    browserSync = require('browser-sync');

// task to compile stylus
gulp.task('styles', function() {
    gulp.src('public/src/content/styles/style.styl')
        .pipe(stylus({use: [nib(),jeet()],import: ['nib','jeet']}))
        .pipe(gulp.dest('public/src/content/styles/'));
});

// To show js errors in a fashion way
gulp.task('jshint', function() {
    return gulp.src('public/src/modules/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Watch task live reloading with browser-sync
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('public/src/content/styles/**/*.styl',['styles']);
    gulp.watch('{public/src/modules/**/*.js,public/src/content/styles/**/*.css,public/src/**/*.html}',['jshint']);
    gulp.watch('public/src/content/images/**/*');
});

// We need this to autoreload everything
gulp.task('browser-sync', function () {
    var files = [
        'public/src/**/*.html',
        'public/src/content/styles/**/*.css',
        'public/src/content/images/**/*.png',
        'public/src/content/images/**/*.jpg',
        'public/src/content/images/**/*.gif',
        'public/src/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: 'public/src',
            index: 'index.html'
        },
        reloadDelay: 1000
    });

    // Watch any files in src and reload on change
    gulp.watch(['public/src/**']).on('change', browserSync.reload);
});
