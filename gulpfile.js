const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create()

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});



gulp.task('copy', function() {
    gulp.src('./src/fonts/**.*')
    .pipe(gulp.dest('./dist/fonts'))
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});