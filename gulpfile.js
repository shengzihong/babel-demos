var gulp = require('gulp');
var babel = require('gulp-babel');

// 
gulp.task('babel', function() {
    
    // 
    return gulp.src('src/*.js')
    .pipe(babel()) // 经过babel编译
    .pipe(gulp.dest('build')) // 放到build文件夹里面
});

gulp.task('default', ['babel']);