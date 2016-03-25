'use strict';

const gulp          = require('gulp');
const del           = require('del');
const typescript    = require('typescript');
const transpile     = require('gulp-typescript');
const srcmaps       = require('gulp-sourcemaps');
const lint          = require('gulp-tslint');
const inject        = require('gulp-inject');
const path          = require('path');

const config        = require('./gulp.config')();
const PROJECT       = transpile.createProject('./tsconfig.json', { typescript: typescript });

gulp.task('default', [
    'insert.scripts',
    'copy.dependencies',
    'tslint',
    'transpile',
    'copy.assets'
]);

gulp.task('clean', (done) => {
    del([config.dist]).then(paths => {
        console.log('dist directory successfully deleted:\n\t', paths.join('\n'));
        done();
    });
});

gulp.task('insert.scripts', () => {
    let thingsToInsert = gulp.src(config.dependencies, { read: false });

    return gulp
        .src(config.indexHTML)
        .pipe(inject(thingsToInsert))
        .pipe(gulp.dest(config.dist));
});

gulp.task('copy.dependencies', () => {
    return gulp
        .src(config.dependencies, { base: '.' })
        .pipe(gulp.dest(config.dist));
});

gulp.task('copy.assets', () => {
    return gulp
        .src(config.allAssets, { base: '.' })
        .pipe(gulp.dest(config.dist));
});

gulp.task('tslint', () => {
    return gulp
        .src(config.allTS)
        .pipe(lint())
        .pipe(lint.report('full'))
            .on('error', function() {
                this.emit('end');
            });
});

gulp.task('transpile', () => {
    return gulp
        .src(config.allTS, { base: '.' })
        .pipe(srcmaps.init())
        .pipe(transpile(PROJECT)).js
        .pipe(srcmaps.write())
        .pipe(gulp.dest(config.dist));
});

gulp.task('serve', ['default'], () => {
    const allFiles = [
        config.allTS,
        config.allAssets,
        config.indexHTML
    ];

    const reload = [
        'insert.scripts',
        'copy.dependencies',
        'tslint',
        'transpile',
        'copy.assets'
    ];

    return gulp
        .watch(allFiles, reload);
});