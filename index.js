'use strict';
var Stream = require('stream');



var loger = function () {







    var readable = new Stream.Transform({ objectMode: true });

    readable._transform = function (file, unused, callback) {

        //console.log('Wait 88888 !!! nano - ' + file.contents);
        var obj = JSON.parse(file.contents);
        console.log('Óðààà!!! - ' + obj.name);
        return readable;
    }
    return readable;
}

module.exports = loger;





//var Transform = require('transform');

//module.exports = function() {
    // Monkey patch Transform or create your own subclass, 
    // implementing `_transform()` and optionally `_flush()`
    //var transformStream = new Transform({objectMode: true});
    /**
     * @param {Buffer|string} file
     * @param {string=} encoding - ignored if file contains a Buffer
     * @param {function(Error, object)} callback - Call this function (optionally with an 
     *          error argument and data) when you are done processing the supplied chunk.
     */
    //transformStream._transform = function(file, encoding, callback) {
        
        //console.log('Wait 88888 !!! nano444 - ' + file.contents);
        
        
    //};

    //return transformStream;
//};