'use strict';
 
const {src,dest,watch,parallel} = require('gulp');

const sass 			= require('gulp-sass')(require('sass'));
const concat 		= require('gulp-concat');
const browserSync 	= require('browser-sync').create();
const autoprefixer 	= require('gulp-autoprefixer');
const nunjucks		= require('gulp-nunjucks');

function browsersync(){
	browserSync.init({
		server: { 
			baseDir:'./code/'
		} 
	})
}

function templates() {
	return src('./code/templates/**/*.html')
		.pipe(nunjucks.compile())
		.pipe(dest('./code'))
}

function styles() {
	return src('./code/presets/sass/**/*.scss')
		.pipe(sass({outputStyle:'expanded'}))
		.pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
		.pipe(concat('style.min.css'))
		.pipe(dest('./code/assets/css'))
		.pipe(browserSync.stream())
};

function watching() {
	watch(['./code/presets/sass/**/*.scss'], styles);
	watch(['./code/assets/css/*.css']).on('change',browserSync.reload)
	watch(['./code/templates/**/*.html'],templates);
	watch(['./code/**/*.html']).on('change',browserSync.reload)
};

exports.styles = styles;
exports.watch = watching;
exports.browser = browsersync;

exports.default = parallel(watching,browsersync);