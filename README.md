# gulp-update-module

> [gulp-update-module](https://github.com/semiromid/gulp-update-module) is a gulp plugin to update modules easily.



[![NPM](https://nodei.co/npm/gulp-update-modul.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-update-modul/)


[![build status](https://travis-ci.org/semiromid/gulp-update-modul.svg)](https://travis-ci.org/semiromid/gulp-update-modul)

![Image](https://raw.githubusercontent.com/semiromid/gulp-update-modul/master/screenshots/scr.png)

[En]
gulp-update-module is a plugin to auto update all node modules. 

[Ru]
gulp-update-module предназначен для автоматического обновления всех установленных модулей в приложении.



## Install

gulp-update-module provides simple  updates all modules.

First, install `gulp-update-module` as dependency:

```shell
npm install --save gulp-update-module 
```

## Usage

Then, add it to your gulpfile.js:

```javascript
var upmodule = require("gulp-update-module");

gulp.task('update-module', function () {
    gulp.src('package.json')
    .pipe(upmodule('latest')); //update all modules latest version.
});
```


## Example

```javascript
var upmodule = require("gulp-update-module");


//watch
gulp.task('watch', function () {
    gulp.start('update-module');
});

//update-module
gulp.task('update-module', function () {
    gulp.src('package.json')
    .pipe(upmodule('latest')); //update all modules latest version.
});

```

```javascript
var upmodule = require("gulp-update-module");


//watch
gulp.task('watch', function () {
    gulp.start('update-module');
});

//update-module
gulp.task('update-module', function () {
    gulp.src('package.json')
    .pipe(upmodule('latest, true')); //update all modules latest version.
});

```
## API

### upmodule('version, process')
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

  * github - [github.com/semiromid/gulp-update-module](https://github.com/semiromid/gulp-update-module) 

  * email - xor.wind@mail.ru
 

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
