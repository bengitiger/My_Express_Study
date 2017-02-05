/**
* @Date:   2017-02-05T20:03:31+09:00
* @Last modified time: 2017-02-05T20:03:43+09:00
*/

// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// Task
gulp.task('default', function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'app.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
})
