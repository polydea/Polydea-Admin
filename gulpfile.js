const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const modernizr = require('gulp-modernizr');

// Task HTML
gulp.task('html', () => {
  gulp.src('src/*.html')
  .pipe(plumber())
  .pipe(gulp.dest('dist/'))
  .pipe(sync.stream());
});

// Task style
gulp.task('style', function () {
  gulp.src([
    'src/scss/**/*.scss',
    'node_modules/font-awesome/css/font-awesome.min.css',
  ])
 .pipe(plumber())
 .pipe(sourcemaps.init())

 .pipe(sass({ outputStyle: 'compressed' }))
 .pipe(autoprefixer('last 2 versions'))

 .pipe(sourcemaps.write('.'))
 .pipe(concat('style.min.css'))
 .pipe(gulp.dest('dist/css'))
 .pipe(sync.stream());
});

// Task Fonts
gulp.task('fonts', function () {
  gulp.src([
    'src/fonts/**',
    'node_modules/font-awesome/fonts/**',
  ])
  .pipe(plumber())
  .pipe(gulp.dest('dist/fonts/'))
  .pipe(sync.stream());
});

// Task scripts
gulp.task('scripts', function () {
  return gulp.src([
    'node_modules/npm-zepto/zepto/dist/zepto.js',
    'src/**/*.js',
  ])
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  .pipe(sync.stream());
});

// Hot reload
gulp.task('hot-reload', function () {
  sync.init({ server: 'dist/' });
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/img/*', ['images']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('src/scss/**/*.scss', ['style']);
  gulp.watch('src/*.html').on('change', sync.reload);
});

// Image compress
gulp.task('images', function () {
  gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img/'));
});

// Task Modernizr
gulp.task('modernizr', function () {
  gulp.src('src/js/*.js')
  .pipe(modernizr())
  .pipe(gulp.dest('dist/js'));
});


// Default run all the tasks
gulp.task('default', ['scripts', 'fonts', 'style', 'images', 'html', 'hot-reload', 'modernizr']);
