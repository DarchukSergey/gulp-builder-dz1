'use strict';
module.exports = function() {
	$.gulp.task('spritesmith', function() {
		var spriteData =
			$.gulp.src('./source/images/sprite/*.*')
			.pipe($.gp.spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.css'
			}));

		return spriteData.pipe($.gulp.dest('build/assets/img/'));
	});
};