'use strict';
var lengmass = 0,
    obj,
    exec = require('child_process').exec,
    countpackege,
    losk_version,
    keysgenerel,
    keys;
const colors = require('colors');


describe('addition-2-global', function () {
    it('should add 1+1 correctly', function (done) {
        var onePlusOne = 1 + 1;
        onePlusOne.should.equal(2);
        // must call done() so that mocha know that we are... done.
        // Useful for async tests.
        done();
    });
});









//=================================================================================
describe('exec_command2-test-Global-1', function () {
    it('Global-1-test-completed', function (done) {

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
        //////////////////////////   TEST Global  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        //=======================================================================
        function exec_command0(losk_version) {
            console.log(colors.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                lengmass = 0;
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
                        //l------------------------------------------------------------------
                        if (losk_version == 'latest') {
                            for (var i = 0 ; keys.length > i ; i++) {
                                //filter
                                //f----------------------------------------------------------
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
                                //f----------------------------------------------------------

                                //start
                                //s----------------------------------------------------------
                                if (i == keys.length - 1 && countpackege != 0) {
                                    for (var i2 = 0 ; massfordelete.length > i2 ; i2++) {
                                        delete obj[massfordelete[i2]];
                                    }

                                    keys = Object.keys(obj);
                                    //console.log(obj);
                                    exec_command1();
                                } else if (i == keys.length - 1 && countpackege == 0) {
                                    for (var i3 = 0 ; massfordelete.length > i3 ; i3++) {
                                        delete obj[massfordelete[i3]];
                                    }

                                    console.log(colors.cyan('Completed!'));
                                }
                                //s----------------------------------------------------------
                            }
                        }
                        //l------------------------------------------------------------------


                        //wanted
                        //w------------------------------------------------------------------
                        if (losk_version == 'wanted') {
                            if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                //.......


                                //.......
                            }
                        }
                        //w------------------------------------------------------------------
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }


        //=================================================================================

        ///////////////////////////////////////////////////////////////
        //npm update latest
        ///////////////////////////////////////////////////////////////


        //M-2-1 ============================================================================
        function exec_command1() {
            //exec('npm outdated',
            exec('npm -v ',
            (error, stdout, stderr) => {
                if (error !== null) {
                    console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        console.log(colors.red('________________________________________________'));
                        console.log(stdout);
                        console.log(colors.red('________________________________________________'));
                        console.log(colors.red('Update packege: ') + "["+countpackege+"]");
                        setTimeout(wil, 5000, obj, keys, keys.length - 1);
                    }
                }
            });
        }


        var wil = function datamodules(obj, keys, i) {
            lengmass = i;
            var modulUp = keys[lengmass];

            if (obj[keys[lengmass]].type == 'devDependencies') {
                var pos = lengmass + 1;
                console.log(colors.green('Update: ') + colors.green("position ") + "["+pos+"]");
                exec_command_save_dev(modulUp);
            } else if (obj[keys[lengmass]].type == 'dependencies') {
                var pos = lengmass + 1;
                console.log(colors.green('Update: ') + colors.green("position ") + "[" + pos + "]");
                exec_command_save(modulUp);
            }
        }
        //=================================================================================


        //=================================================================================
        function exec_command_save_dev(modulupdate) {
            console.log(colors.blue('Upgrade ' + "\'" + modulupdate + "\'" + '. Please wait...'));
            //------ test --------
            //exec('npm install ' + modulupdate + ' --save-dev',
            //-------------------- 
            exec('npm -v ',
            (error, stdout, stderr) => {
                

                if (error !== null) {
                    console.log(`exec error: ${error}`);
                } else {
                    //------ test --------
                    //console.log("TEST - " + lengmass);
                    switch (lengmass) {
                        case 0:
                            keys[lengmass].should.equal("gulp-b");
                            //console.log("command_save_dev " + lengmass + "   " + keys[lengmass]);
                            break
                        case 1:
                            keys[lengmass].should.equal("gulp-d");
                            //console.log("command_save_dev " + lengmass + "   " + keys[lengmass]);
                            break
                    }
                    //-------------------- 
                    //console.log(`${stdout}`);
                    console.log(colors.magenta('Finish:') + " " + colors.green(modulupdate));
                    console.log(colors.red('________________________________________________'));
                    
                    if (lengmass != 0) {
                        lengmass = lengmass - 1;
                        setTimeout(wil, 3000, obj, keys, lengmass);
                    } else {
                        console.log(colors.cyan('Completed!'));
                        done();
                    }
                }
            });
        }

        function exec_command_save(modulupdate) {
            console.log(colors.blue('Upgrade ' + "\'"+modulupdate +"\'"+ '. Please wait...'));
            //------ test --------
            //exec('npm install ' + modulupdate + ' --save',
            //-------------------- 
            exec('npm -v ',
            (error, stdout, stderr) => {

                if (error !== null) {
                    console.log(`exec error: ${error}`);
                } else {
                    //------ test --------
                    console.log("TEST - " + lengmass);
                    switch (lengmass) {
                        case 0:
                            keys[lengmass].should.equal("gulp-b");
                            console.log("command_save_dev " + lengmass + "   " + keys[lengmass]);
                            break
                        case 1:
                            keys[lengmass].should.equal("gulp-d");
                            console.log("command_save_dev " + lengmass + "   " + keys[lengmass]);
                            break
                    }
                    //-------------------- 
                    //console.log(`${stdout}`);
                    console.log(colors.magenta('Finish:') + " " + colors.green(modulupdate));
                    console.log(colors.red('________________________________________________'));

                    if (lengmass > 0) {
                        lengmass = lengmass - 1;
                        setTimeout(wil, 3000, obj, keys, lengmass);
                    } else {
                        console.log(colors.cyan('Completed!'));
                    }
                }
            });
        }
        //=================================================================================






        ///////////////////////////////////////////////////////////////
        //npm update wanted
        ///////////////////////////////////////////////////////////////


        //M - 1 - 2 ========================================================================

        function exec_command1_wanted() {

            console.log(colors.red('Version \'wanted\'  not work, use \'latest\' version.'));

        }
       
        /////////////////////////////////////////////////////////////////////////
    });
});

//=================================================================================