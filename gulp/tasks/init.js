'use strict';

module.exports = function() {
	$.gulp.task('js:lint', function() {
		return $.gulp.src('. / source / js /**/ * .*')
			.pipe($.gp.eslint())
			.pipe($.gp.eslint.format());
	})
};