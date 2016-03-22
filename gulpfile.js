var gulp = require("gulp");
// var runSequence = require("run-sequence");
var path = require('path');
var del = require('del');
var inject = require('gulp-inject');
var open = require('open');
var htmlreplace = require('gulp-html-replace');
var webpack = require("webpack");

var ROOT_PATH = path.resolve(__dirname);
var CURRENT_FOLDER = path.basename(ROOT_PATH);
var sublimeServerPort = "8082";

var PATHS = {
    src: {
        root: './src',
        css: './src/css',
        fonts: './src/fonts'
    },
    build: {
        root: "./build",
        css: './build/css',
        fonts: './build/fonts',
        js: "./build/js"
    },
    doco: CURRENT_FOLDER + "/docs/index.html"
};

//scripts
// Copy assets from src to build folder, cleaning that folder out first
gulp.task('cleanBuildFolder', function() {
    return del(PATHS.build.root + "/**/*");
});
gulp.task('copyCSS', function() {
    gulp.src(PATHS.src.css + '/**/*')
        .pipe(gulp.dest(PATHS.build.css));
});

gulp.task('copyHTMLAndInjectBuildRefs', function() {
    // Copy all the HTML files over and inject the correct JS script tags into them.
    var htmlFilesArray = ["index"];
    var refsArray, refsToInject;
    for (var x = 0; x <= htmlFilesArray.length; x++) {
        refsArray = [PATHS.build.js + "/vendor.js", PATHS.build.js + "/" + htmlFilesArray[x] + ".js"];
        refsToInject = gulp.src(refsArray, {
            read: false
        });

        gulp.src([PATHS.src.root + '/' + htmlFilesArray[x] + '.html'])
            .pipe(gulp.dest(PATHS.build.root))
            .pipe(htmlreplace()) // Remove dev script tags
            .pipe(inject(refsToInject, { // Inject prod script tags
                relative: true
            }))
            .pipe(gulp.dest('./build'));
    }
});

gulp.task('openDoco', function() {
    open("http://localhost:" + sublimeServerPort + "/" + PATHS.doco);
});


gulp.task('buildAssets', ['copyCSS']);