  var gulp = require('gulp')
    , fs = require('fs-extra')
    , chalk = require('chalk')
    , inject = require('gulp-inject')
    , sass = require('gulp-ruby-sass')
    , cssmin = require('gulp-minify-css')
    , sequence = require('run-sequence')
    , gulpsequence = require('gulp-sequence')
    , wiredep = require('wiredep').stream
    , open = require('gulp-open')
    , connect = require('gulp-connect')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify')
    , rename = require('gulp-rename')
    , angularFilesort = require('gulp-angular-filesort')
    , jshint = require('gulp-jshint')
    , stylish = require('jshint-stylish')
    , util = require('util')
    , shell = require('gulp-shell')
    , postcss      = require('gulp-postcss')
    , sourcemaps   = require('gulp-sourcemaps')
    , autoprefixer = require('autoprefixer')    
    , plugins = require('gulp-load-plugins')();
const PORT = '8888';

  var filesToInject = [
    './app/**/*.js', 
    './app/**/*.css'
  ];

  gulp.task('default', function(){
    console.log(chalk.magenta(gulpSplashStr));
  });

  gulp.task('wire', function(){
    gulp.src('./index.html')
      .pipe(wiredep())
      .pipe(gulp.dest('.'));
  });

  var filesToInject = ['./app/**/*.js', './app/**/*.css'];
  //i've replaced this task with angularFilesort below
  //I think that the syntax is much clearer
  //TODO remove this and fix the wire-inject task to use `sort`
  gulp.task('inject', function (){
    var target = gulp.src('./index.html');
    var sources = gulp.src(filesToInject, {read: false});
    return target.pipe(inject(sources))
      .pipe(gulp.dest('.'));
  });

  gulp.task('wire-inject',  function(callback){
      sequence('wire', 'inject', callback);
  });

  gulp.task('sort', function(){
    gulp.src('./index.html')
      .pipe(inject(
        gulp.src(['./app/**/*.js']).pipe(angularFilesort())
      ))
      .pipe(gulp.dest('.'));
  });


  gulp.task('sass', function() {
    return sass('./themes/stanleywp/css/aloha-poke-custom-scss/*.scss', { style: 'expanded' })
      .pipe(postcss([ autoprefixer({ browsers: ['last 3 versions'] }) ]))
      .pipe(gulp.dest('./themes/stanleywp/css/aloha-poke-custom-css'));
  });

  gulp.task('watch-sass', function () {
      gulp.watch('./themes/stanleywp/css/aloha-poke-custom-scss/*.scss', ['sass'])
  });



  gulp.task('hint', function(){
    return gulp.src('./app/**/*.js')
      .pipe(jshint({laxcomma: true}))
      .pipe(jshint.reporter(stylish));
  });



  /* launch app in browser */


  //open browser
  gulp.task('browser-open', false, function () {
      var options = {
          url: 'http://0.0.0.0:' + PORT + '/',
          app: 'Google Chrome'
      };
      return gulp.src('./index.html')
          .pipe(plugins.open('', options));
  });


  gulp.task('launch', function(callback){
    sequence(['browser-open'], callback);
  });


var gulpSplashStr =          chalk.blue('┌────────────────────────────────────────────────┐\n')
+ chalk.blue('│') + chalk.magenta(' Aloha Pokê (v 0.0.1)                            ') + chalk.blue('│\n')
//+ chalk.blue('│') + chalk.magenta(' Run npm install && bower install to get deps   ') + chalk.blue('│\n')
//+ chalk.blue('│') + chalk.magenta(' Run npm launch to run in browser               ') + chalk.blue('│\n')
+ chalk.blue('└────────────────────────────────────────────────┘');



