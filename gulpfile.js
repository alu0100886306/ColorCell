var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', shell.task(
	'NODE_PATH=./node_modules/@alu0100886306/dtable/src/ node main.js'
));
gulp.task("test", shell.task("NODE_PATH=./node_modules/@alu0100886306/dtable/src/ ./node_modules/mocha/bin/mocha --require should"));
