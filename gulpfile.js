const { src, dest, watch, parallel } = require("gulp");
//CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    src('src/scss/**/*.scss') //Identifica el archivo sass
        .pipe( plumber() )
        .pipe( sass() )
        .pipe( dest('build/css') )
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;