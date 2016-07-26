﻿var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var es2015 = require('babel-preset-es2015');

function compile(watch) {
    var bundler = watchify(browserify('../Scripts/src/app.js', { debug: true })
        .transform(babel, { presets: [es2015] }));

    function rebundle() {
        bundler.bundle()
          .on('error', function (err) { console.error(err); this.emit('end'); })
          .pipe(source('bundle.js'))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest('../Scripts/dist'));
    }

    if (watch) {
        bundler.on('update', function () {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
};

gulp.task('build', function () { return compile(); });
gulp.task('watch', function () { return watch(); });

gulp.task('default', ['watch']);