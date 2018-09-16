var gulp = require('gulp');
var htmlv = require('gulp-html-validator');

// Default
gulp.task('valid', function () {
  gulp.src('valid.html')
    .pipe(htmlv())
    .pipe(gulp.dest('./out'));
});
 
// Option format set to html
gulp.task('invalid', function () {
  gulp.src('invalid.html')
    .pipe(htmlv({format: 'html'}))
    .pipe(gulp.dest('./out'));
});

gulp.task('default', ['valid']);