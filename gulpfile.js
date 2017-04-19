const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function() {
  gulp.watch('./src/sass/**/*.scss', ['styles']);
});
