# gulp-update-modul

> [gulp-update-modul](https://github.com/semiromid/gulp-update-modul) is a gulp plugin to update modules easily.



[![NPM](https://nodei.co/npm/gulp-update-modul.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-update-modul/)


[![build status](https://travis-ci.org/semiromid/gulp-update-modul.svg)](https://travis-ci.org/semiromid/gulp-update-modul)

![Image](https://raw.githubusercontent.com/semiromid/gulp-update-modul/master/screenshots/scr.png)

[En]
gulp-update-modul is a plugin to auto update all node modules. 

[Ru]
gulp-update-modul предназначен для автоматического обновления всех установленных модулей в приложении.



## Install

gulp-update-modul provides simple  updates all modules.

First, install `gulp-update-modul` as dependency:

```shell
npm install  gulp-update-modul --save-dev
```

## Usage

Then, add it to your gulpfile.js:

```javascript
var upmodul = require("gulp-update-modul");

gulp.task('update-modul', function () {
    gulp.src('package.json')
    .pipe(upmodul('latest', 'false')); //update all modules latest version.
});
```


## Example

```javascript
var upmodul = require("gulp-update-modul");


//watch
gulp.task('watch', function () {
    gulp.start('update-modul');
});

//update-modul
gulp.task('update-modul', function () {
    gulp.src('package.json')
    .pipe(upmodul('latest', 'false')); //update all modules latest version.
});

```

```javascript
var upmodul = require("gulp-update-modul");


//watch
gulp.task('watch', function () {
    gulp.start('update-modul');
});

//update-modul
gulp.task('update-modul', function () {
    gulp.src('package.json')
    .pipe(upmodul('latest, true')); //update all modules latest version.
});

```
## API

### upmodul('version, process')
+ Version

  + latest ('Default')

    Update all modules 'latest' version.

  + wanted 

    Update to all modules 'wanted'  version.

+ Process

  + true ('Default')

    Update in auto mode.

  + false

    Asks: Do you want to update: packagename  [Y(yes)/N(no)] ?



## Bugs

* Please to write

  * github - [github.com/semiromid/gulp-update-modul](https://github.com/semiromid/gulp-update-modul) 

  * email - xor.wind@mail.ru
 

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
