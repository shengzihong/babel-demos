var gulp = require('gulp');
var babel = require('gulp-babel');

// 
gulp.task('babel', function() {
    
    // 
    return gulp.src('src/*.js')
    .pipe(babel()) // ����babel����
    .pipe(gulp.dest('build')) // �ŵ�build�ļ�������
});

gulp.task('default', ['babel']);