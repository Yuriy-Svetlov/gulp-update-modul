# gulp-update-modul

> [gulp-update-modul](https://github.com/semiromid/gulp-update-modul) is a gulp plugin to update modules easily.

[![NPM](https://nodei.co/npm/gulp-update-modul.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-update-modul/)


[![build status](https://travis-ci.org/semiromid/gulp-update-modul.svg?branch=master)](https://travis-ci.org/semiromid/gulp-update-modul/builds/102869205)


[En]
gulp-update-modul is a plugin to auto update all node modules. 

[Ru]
gulp-update-modul предназначен для автоматического обновления всех установленных модулей в приложении.



## Install

gulp-update-modul provides simple  updates all modules.

First, install `gulp-update-modul` as dependency:

```shell
npm install --save gulp-update-modul 
```

## Usage

Then, add it to your gulpfile.js:

```javascript
upmodul = require("gulp-update-modul");

gulp.task('update-modul', function () {
    gulp.src('package.json')
    .pipe(upmodul('latest')); //update all modules latest version.
});
```


Example use:

```javascript
upmodul = require("gulp-update-modul");


//watch
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.start('update-modul');
});

//update-modul
gulp.task('update-modul', function () {
    gulp.src('package.json')
    .pipe(upmodul('latest')); //update all modules latest version.
});

```
## API

### upmodul('options')

+ latest ('Default')

  Update all modules latest version.

+ wanted 

  update to all modules wanted  version.


## Bugs

* Please to write

  * github - [github.com/semiromid/gulp-update-modul](https://github.com/semiromid/gulp-update-modul) 

  * email - xor.wind@mail.ru
 

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
