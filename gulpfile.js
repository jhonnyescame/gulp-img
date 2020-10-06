const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('site/img/**/*.jpg')
      //.pipe(imagemin())

      .pipe(imagemin([
          imagemin.gifsicle({interlaced: true}),
          imagemin.jpegtran({
                              progressive: true, 
                              arithmetic: false, 
                              buffer: true 
                            }),
          imagemin.optipng({optimizationLevel: 5}),
          imagemin.svgo({
              plugins: [
                  {removeViewBox: true},
                  {cleanupIDs: false}
              ]
          })
      ]))

    .pipe(gulp.dest('site/img-otimizado/'))
)