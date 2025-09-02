const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagein =  require('gulp-imagemin');



function styles(){
    return gulp.src('./src/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function images(){
    return gulp.src('./src/images/**/')
    .pipe(imagein())
    .pipe(gulp.dest('./dist/css'))
}

exports.default = gulp.parallel(styles, images);

exports.watch = function (){
gulp.watch('./src/styles/*.scss,', gulp.parallel(styles))
}