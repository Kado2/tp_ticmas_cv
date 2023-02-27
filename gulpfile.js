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

function js(done) {
    src('src/js/*.js')
        .pipe(dest('build/js'))
    done();
}
function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/*.js', js);
    done();
}
exports.css = css;
exports.js = js;
exports.dev = parallel(js, dev);