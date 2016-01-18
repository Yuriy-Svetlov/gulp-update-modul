'use strict';
var lengmass = 0,
    obj,
    exec = require('child_process').exec,
    countpackege,
    losk_version,
    keysgenerel,
    keys;
var colors = require('colors');


describe('addition-1', function () {
    it('should add 1+1 correctly', function (done) {
        var onePlusOne = 1 + 1;
        onePlusOne.should.equal(2);
        // must call done() so that mocha know that we are... done.
        // Useful for async tests.
        done();
    });
});









//M-1-1 ===========================================================================

describe('exec_command2-test-1', function () {
    it('1 test-completed', function (done) {

        var jsonpack = {
            "gulp-a": {
                "current": "3.0.0",
                "wanted": "3.1.0",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-b": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-c": {
                "current": "3.1.0",
                "wanted": "3.1.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-d": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            }

        };
        jsonpack = JSON.stringify(jsonpack);
        
        
        exec_command0("latest");
        //=======================================================================
        //////////////////////////   TEST H-1  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================
        
        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                var massfordelete = new Array();
                massfordelete.fill(0);
                //------ test --------
                stdout = jsonpack;
                //--------------------
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);

                        //latest
                        //------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {

                                if (obj[keys[i]].latest > obj[keys[i]].current && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    countpackege = countpackege + 1;
                                    //------ test --------
                                    switch (i) {
                                        case 0:
                                            keys[i].should.equal("gulp-a");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 1:
                                            keys[i].should.equal("gulp-b");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 3:
                                            keys[i].should.equal("gulp-d");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                    }
                                    //--------------------
                                }
                                if (obj[keys[i]].current == obj[keys[i]].latest && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    console.log("DELETE LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }
                                if (obj[keys[i]].wanted > obj[keys[i]].latest) {
                                    console.log("WANTED " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }

                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }
                                    keys = Object.keys(obj);
                                    //------ test --------
                                    keys.length.should.equal(3);
                                    //console.log(obj);
                                    done();
                                    //-------------------- 
                                    //exec_command1();
                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }
                                    console.log(colors.cyan('Completed!'));
                                }
                            }
                        }
                        //------------------------------------------------------------------


                        //wanted
                        //------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //------------------------------------------------------------------
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }
        /////////////////////////////////////////////////////////////////////////
    });
});





describe('exec_command2-test-2', function () {
    it('2 test-completed', function (done) {

        var jsonpack = "";
        //jsonpack = JSON.stringify(jsonpack);


        exec_command0("latest");
        //=======================================================================
        //////////////////////////   TEST H-1  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================

        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                var massfordelete = new Array();
                massfordelete.fill(0);
                //------ test --------
                stdout = jsonpack;
                //--------------------
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);

                        //latest
                        //------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {

                                if (obj[keys[i]].latest > obj[keys[i]].current && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    countpackege = countpackege + 1;
                                    console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                }
                                if (obj[keys[i]].current == obj[keys[i]].latest && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    console.log("DELETE LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }
                                if (obj[keys[i]].wanted > obj[keys[i]].latest) {
                                    console.log("WANTED " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }

                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }
                                    keys = Object.keys(obj);
                                    //exec_command1();
    
                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }
                                    console.log(colors.cyan('Completed!'));
                                }
                            }
                        }
                        //------------------------------------------------------------------


                        //wanted
                        //------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //------------------------------------------------------------------
                    } else {
                        //------ test --------
                        stdout.should.equal("");
                        //--------------------  
                        console.log(colors.cyan('Completed!'));
                        //------ test --------
                        done();
                        //--------------------  
                    }
                }
            });
        }
        /////////////////////////////////////////////////////////////////////////
    });
});






describe('exec_command2-test-3', function () {
    it('3 test-completed', function (done) {

        var jsonpack = {
            "gulp-c": {
                "current": "3.1.0",
                "wanted": "3.1.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            }

        };
        jsonpack = JSON.stringify(jsonpack);


        exec_command0("latest");
        //=======================================================================
        //////////////////////////   TEST H-1  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================

        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                var massfordelete = new Array();
                massfordelete.fill(0);
                //------ test --------
                stdout = jsonpack;
                //--------------------
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);

                        //latest
                        //------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {

                                if (obj[keys[i]].latest > obj[keys[i]].current && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    countpackege = countpackege + 1;
                                    console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                }
                                if (obj[keys[i]].current == obj[keys[i]].latest && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    console.log("DELETE LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }
                                if (obj[keys[i]].wanted > obj[keys[i]].latest) {
                                    console.log("WANTED " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }

                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }
                                    keys = Object.keys(obj);
                                    //exec_command1();
                                    //------ test --------
                                    keys.length.should.equal(1000);
                                    //-------------------- 

                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    console.log(colors.cyan('Completed!'));
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }
                                    //------ test --------
                                    keys = Object.keys(obj);
                                    keys.length.should.equal(0);
                                    done();
                                    //--------------------  
                                }
                            }
                        }
                        //------------------------------------------------------------------


                        //wanted
                        //------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //------------------------------------------------------------------
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }
        /////////////////////////////////////////////////////////////////////////
    });
});




describe('exec_command2-test-4', function () {
    it('4 test-completed', function (done) {

        var jsonpack = {
            "gulp-a": {
                "current": "3.1.0",
                "wanted": "3.1.0",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-b": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-c": {
                "current": "3.1.0",
                "wanted": "3.1.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-d": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            }

        };
        jsonpack = JSON.stringify(jsonpack);


        exec_command0("latest");
        //=======================================================================
        //////////////////////////   TEST H-1  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================

        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                var massfordelete = new Array();
                massfordelete.fill(0);
                //------ test --------
                stdout = jsonpack;
                //--------------------
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);

                        //latest
                        //------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {

                                if (obj[keys[i]].latest > obj[keys[i]].current && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    countpackege = countpackege + 1;
                                    //------ test --------
                                    switch (i) {
                                        case 1:
                                            keys[i].should.equal("gulp-b");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 3:
                                            keys[i].should.equal("gulp-d");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                    }
                                    //--------------------
                                }
                                if (obj[keys[i]].current == obj[keys[i]].latest && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    console.log("DELETE LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }
                                if (obj[keys[i]].wanted > obj[keys[i]].latest) {
                                    console.log("WANTED " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }


                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }
                                    //exec_command1();
                                    //------ test --------
                                    keys = Object.keys(obj);
                                    //console.log(obj);
                                    keys.length.should.equal(2);
                                    done();
                                    //-------------------- 
                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }
                                    console.log(colors.cyan('Completed!'));
                                }
                            }
                        }
                        //------------------------------------------------------------------


                        //wanted
                        //------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //------------------------------------------------------------------
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }
        /////////////////////////////////////////////////////////////////////////
    });
});



describe('exec_command2-test-5', function () {
    it('5 test-completed', function (done) {

        var jsonpack = {
            "gulp-a": {
                "current": "0.1.0",
                "wanted": "3.1.0",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-b": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "dependencies"
            },
            "gulp-c": {
                "current": "3.1.0",
                "wanted": "3.1.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-d": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            }

        };
        jsonpack = JSON.stringify(jsonpack);


        exec_command0("latest");
        //=======================================================================
        //////////////////////////   TEST H-1  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================

        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                var massfordelete = new Array();
                massfordelete.fill(0);
                //------ test --------
                stdout = jsonpack;
                //--------------------
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        console.log(obj);
                        //latest
                        //------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {

                                if (obj[keys[i]].latest > obj[keys[i]].current && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    countpackege = countpackege + 1;
                                    //------ test --------
                                    switch (i) {
                                        case 0:
                                            keys[i].should.equal("gulp-a");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 1:
                                            keys[i].should.equal("gulp-b");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 3:
                                            keys[i].should.equal("gulp-d");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                    }
                                    //--------------------
                                }
                                if (obj[keys[i]].current == obj[keys[i]].latest && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    console.log("DELETE LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }
                                if (obj[keys[i]].wanted > obj[keys[i]].latest) {
                                    console.log("WANTED " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }

                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }
                                    keys = Object.keys(obj);
                                    //------ test --------
                                    keys.length.should.equal(3);
                                    //console.log(obj);
                                    done();
                                    //-------------------- 
                                    //exec_command1();
                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }
                                    console.log(colors.cyan('Completed!'));
                                }
                            }
                        }
                        //------------------------------------------------------------------


                        //wanted
                        //------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //------------------------------------------------------------------
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }
        /////////////////////////////////////////////////////////////////////////
    });
});



describe('exec_command2-test-6', function () {
    it('6 test-completed', function (done) {

        var jsonpack = {
            "gulp-a": {
                "current": "0.1.0",
                "wanted": "3.1.0",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-b": {
                "current": "2.3.0",
                "wanted": "2.3.1",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "dependencies"
            },
            "gulp-c": {
                "current": "1.1.0",
                "wanted": "3.1.0",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            },
            "gulp-d": {
                "current": "2.3.0",
                "wanted": "3.1.0",
                "latest": "3.1.0",
                "location": "node_modules",
                "type": "devDependencies"
            }

        };
        jsonpack = JSON.stringify(jsonpack);
        

        exec_command0("latest");
        //=======================================================================
        //////////////////////////   TEST H-1  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================

        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                var massfordelete = new Array();
                massfordelete.fill(0);
                //------ test --------
                stdout = jsonpack;
                //--------------------
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        console.log(obj);
                        //latest
                        //------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {

                                if (obj[keys[i]].latest > obj[keys[i]].current && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    countpackege = countpackege + 1;
                                    //------ test --------
                                    switch (i) {
                                        case 0:
                                            keys[i].should.equal("gulp-a");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 1:
                                            keys[i].should.equal("gulp-b");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 2:
                                            keys[i].should.equal("gulp-c");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                        case 3:
                                            keys[i].should.equal("gulp-d");
                                            console.log("LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                            break
                                    }
                                    //--------------------
                                }
                                if (obj[keys[i]].current == obj[keys[i]].latest && obj[keys[i]].wanted <= obj[keys[i]].latest) {
                                    console.log("DELETE LATEST " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }
                                if (obj[keys[i]].wanted > obj[keys[i]].latest) {
                                    console.log("WANTED " + i + "   " + keys[i] + "   " + obj[keys[i]].wanted + "   " + obj[keys[i]].latest);
                                    massfordelete[i] = keys[i];
                                }

                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }
                                    keys = Object.keys(obj);
                                    //------ test --------
                                    keys.length.should.equal(4);
                                    //console.log(obj);
                                    done();
                                    //-------------------- 
                                    //exec_command1();
                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }
                                    console.log(colors.cyan('Completed!'));
                                }
                            }
                        }
                        //------------------------------------------------------------------


                        //wanted
                        //------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //------------------------------------------------------------------
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }
        /////////////////////////////////////////////////////////////////////////
    });
});
//=================================================================================