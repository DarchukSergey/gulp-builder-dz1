'use strict';

module.exports = function() {
	$.gulp.task('gulp-file-copy', function() {
		return $.gulp.src('./source/fonts/**/*.*', {
				since: $.gulp.lastRun('gulp-file-copy')
			})
			.pipe($.gulp.dest($.config.root + '/assets/fonts'));

	});
};