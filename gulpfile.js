var gulp   = require('gulp'),
	// concat = require('gulp-concat'),
	minify = require('gulp-minify');

gulp.task('default', ['watch']);
gulp.task('concat', function(){
	gulp.src("./js/**/*")
		// .pipe(concat('combo.js'))
		.pipe(minify())
		.pipe(gulp.dest("./new_js/"));
});

gulp.task("watch", function(){
	gulp.watch("./js/**/*", ["concat"]);
});