const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create(); 

// Compile SCSS to CSS
gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream()); 
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./*.html').on('change', browserSync.reload); 
});

// Initialize BrowserSync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './' 
    }
  });
});

// Default task
gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync'));
