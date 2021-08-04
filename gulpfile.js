const {src, dest, task, series, watch} = require("gulp")

const rm = require("gulp-rm")
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');

const styles = ["node_modules/normalize.css/normalize.css", "src/styles/main.scss"];




task( 'clean', function() {
    return src( 'dist/**/*', { read: false })
      .pipe( rm() )
  })


task ("copy", function (){
    return src("src/**/*.scss").pipe(dest("dist"))
})

task ("styles", function (){
    return src(styles)
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'));
})

watch("./src/styles/**/*.scss", series("styles"))
task ("default", series("clean", "styles"))




//const files = ["src/styles/one.scss", "src/styles/two.scss" ];we can add this massive to return src() and it will be the same
//("!src/**/*.scss") - means to EXCLUDE this file from copying
//*.scss" - here we can put req.*.scss so all files starting with req and then any symbols will go to dist