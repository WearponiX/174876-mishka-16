"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var include = require("posthtml-include");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var del = require("del");
var csso = require("gulp-csso");

gulp.task("copy", function() {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.ico"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("css", function() {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("sprite", function() {
  return gulp.src("source/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function() {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function() {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("server", function() {
  server.init({
    server: "build/"
  });
  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});
gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "html"
));

gulp.task("images", gulp.series(
"sprite",
"webp"
));


gulp.task("start", gulp.series("build", "server"));
