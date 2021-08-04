const {src, dest, task, series, watch} = require("gulp")
const rm = require("gulp-rm")
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
const styles = ["node_modules/normalize.css/normalize.css", "src/styles/main.scss"];
const browserSync = require("browser-sync").create();
const reload = browserSync.reload
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');

task( 'clean', function() {
    return src( 'dist/**/*', { read: false })
      .pipe( rm() )
  })


task ("copy:html", function (){
    return src("src/*.html").pipe(dest("dist")).pipe(reload({stream:true}))
})

task ("styles", function (){
    return src(styles)
    .pipe(concat('main.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rem())
    .pipe(autoprefixer({
        cascade: true
    }))
    .pipe(dest('dist'));
})

task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
        
    });
});

watch("./src/styles/**/*.scss", series("styles"))
watch("./src/*.html", series("copy:html"));
task('default', series('clean', "copy:html", 'styles', 'server'));


//const files = ["src/styles/one.scss", "src/styles/two.scss" ];we can add this massive to return src() and it will be the same
//("!src/**/*.scss") - means to EXCLUDE this file from copying
//*.scss" - here we can put req.*.scss so all files starting with req and then any symbols will go to dist