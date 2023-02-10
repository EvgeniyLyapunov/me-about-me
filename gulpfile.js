'use strict';

const { src, dest, watch, parallel, series } = require("gulp");

const scss         = require('gulp-sass')(require('sass'));
const concat       = require("gulp-concat"); // для объединения и/или переименования файлов 
const browserSync  = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const imagemin     = require("gulp-imagemin");
const del          = require("del"); // для удаления папки dest
const webpack      = require("webpack-stream");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

let isDev = true;
let isProd = !isDev;

let webConfig = {
  output: {
    filename: "main.min.js"
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval-source-map" : "source-map"
};

function cleanDist() {
  return del("dist");
}

function images() {
  return src("app/images/**/*")
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
  .pipe(dest("dist/images"));
}

function scripts() {
  return src("./app/js/main.js")
  .pipe(webpack(webConfig))
  .pipe(dest("./app/js"))
  .pipe(browserSync.stream());
}

function styles() {
  return src("app/scss/style.scss")
          .pipe(scss({outputStyle: "compressed"}))
          .pipe(concat("style.min.css"))
          .pipe(autoprefixer({
            overrideBrowserslist: ["last 10 version"],
            grid: true
          }))
          .pipe(dest("app/css"))
          .pipe(browserSync.stream());
}

function build() {
  return src([
    "app/css/style.min.css",
    "app/fonts/**/*",
    "app/js/main.min.js",
    "app/*.html"
  ], {base: "app"})
  .pipe(dest("dist"));
}

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.images = images;

exports.build = series(cleanDist, build, images); // запускать когда проект готов, для создания папки dist - gulp build
exports.default = parallel(styles, scripts, browsersync, watching); // запускать для работы с проектом gulp