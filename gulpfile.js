var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    plumber         = require('gulp-plumber');

gulp.task('sass', function() {
    return gulp.src('app/sass/*.+(sass|scss)')
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .on('error',catchErr)
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

function catchErr(e) {
    console.log(e);
    this.emit('end');
}

gulp.task ('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/*.+(sass|scss)', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify:false
    });
});


