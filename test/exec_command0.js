'use strict';
var lengmass = 0,
    obj,
    exec = require('child_process').exec,
    countpackege,
    losk_version,
    keysgenerel,
    keys;



describe('addition', function () {
    it('should add 1+1 correctly', function (done) {
        var onePlusOne = 1 + 1;
        onePlusOne.should.equal(2);
        // must call done() so that mocha know that we are... done.
        // Useful for async tests.
        done();
    });
});



//M-1-1 ==================================================================
describe('exec_command0-test-1', function () {
    var jsonpack = {
        "gulp-a": {
            "current": "2.3.0",
            "wanted": "2.3.1",
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
            "wanted": "3.1.0",
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

    it('1 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('latest');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();
                                //------ test --------
                                countpackege.should.equal(3);
                                done();
                                //--------------------
                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length == 0) {
                                //exec_command1_wanted();
                            }
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});


describe('exec_command0-test-2', function () {
    var jsonpack = {
        "gulp-a": {
            "current": "2.3.0",
            "wanted": "2.3.1",
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
            "current": "2.3.0",
            "wanted": "3.1.0",
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

    it('2 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('latest');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();
                                //------ test --------
                                countpackege.should.equal(4);
                                done();
                                //--------------------
                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length == 0) {
                                //exec_command1_wanted();
                            }
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});




describe('exec_command0-test-3', function () {
    var jsonpack = {
        "gulp-a": {
            "current": "4.0.0",
            "wanted": "2.3.1",
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
            "current": "2.3.0",
            "wanted": "3.1.0",
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

    it('3 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('latest');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();
                                //------ test --------
                                countpackege.should.equal(3);
                                done();
                                //--------------------
                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length == 0) {
                                //exec_command1_wanted();
                            }
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});



describe('exec_command0-test-4', function () {
    var jsonpack = '';

    it('4 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('latest');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();
                                
                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length == 0) {
                                //exec_command1_wanted();
                            }
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                        //------ test --------
                        countpackege.should.equal(0);
                        done();
                        //--------------------
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});




describe('exec_command0-test-5', function () {

    var jsonpack = {
        "gulp-a": {
            "current": "3.1.0",
            "wanted": "6.3.1",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        },
        "gulp-b": {
            "current": "3.1.0",
            "wanted": "6.3.1",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        },
        "gulp-c": {
            "current": "3.1.0",
            "wanted": "6.1.0",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        },
        "gulp-d": {
            "current": "3.1.0",
            "wanted": "6.3.1",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        }

    };
    jsonpack = JSON.stringify(jsonpack);

    it('5 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('latest');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();

                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                                //------ test --------
                                countpackege.should.equal(0);
                                done();
                                //--------------------
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length == 0) {
                                //exec_command1_wanted();
                            }
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});


describe('exec_command0-test-6', function () {

    var jsonpack = {
        "gulp-a": {
            "current": "3.1.0",
            "wanted": "6.3.1",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        },
        "gulp-b": {
            "current": "3.1.0",
            "wanted": "6.3.1",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        },
        "gulp-c": {
            "current": "3.1.0",
            "wanted": "6.1.0",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        },
        "gulp-d": {
            "current": "3.1.0",
            "wanted": "6.3.1",
            "latest": "3.1.0",
            "location": "node_modules",
            "type": "devDependencies"
        }

    };
    jsonpack = JSON.stringify(jsonpack);

    it('6 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('wanted');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();

                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                                //------ test --------
                                keys.length.should.equal(4);
                                done();
                                //--------------------
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length == 0) {
                                //exec_command1_wanted();
                            }
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});



describe('exec_command0-test-7', function () {

    var jsonpack = "";

    it('7 test-completed', function (done) {
        //-------------------------------------------------
        exec_command0('wanted');// test
        function exec_command0(losk_version) {
            //.log(chalk.cyan('Check update package...'));
            exec('npm outdated -json --long',
            (error, stdout, stderr) => {
                countpackege = 0;
                keysgenerel = new Array();
                keysgenerel.fill(0);
                //------ test --------
                stdout = jsonpack;
                //console.log("ttt - " + stdout);
                obj = "";
                keys = "";
                lengmass = "";
                //--------------------
                if (error !== null) {
                    //console.log(`exec error 1 : ${error}`);
                } else {
                    if (stdout != "") {
                        obj = JSON.parse(stdout);
                        keys = Object.keys(obj);
                        lengmass = keys.length;

                        for (var i = 0 ; keys.length > i ; i++) {
                            if (losk_version == 'latest') {
                                if (obj[keys[i]].latest > obj[keys[i]].current) {
                                    countpackege = countpackege + 1;
                                    keysgenerel[keysgenerel.length] = keys[i];
                                }
                            }
                            if (losk_version == 'wanted') {
                                if (obj[keys[i]].wanted > obj[keys[i]].current) {
                                    //.......


                                    //.......
                                }
                            }
                            if (i == keys.length - 1 && losk_version == 'latest' && countpackege != 0) {
                                //exec_command1();

                            } else if (i == keys.length - 1 && losk_version == 'latest' && countpackege == 0) {
                                //console.log(chalk.cyan('Completed!'));
                            } else if (i == keys.length - 1 && losk_version == 'wanted' && keys.length != 0) {
                                //exec_command1_wanted();
                            } 
                        }
                    } else {
                        //console.log(chalk.cyan('Completed!'));
                        //------ test --------
                        keys.length.should.equal(0);
                        done();
                        //--------------------
                    }
                }
            });
        }
        //-------------------------------------------------
    });
});
//=================================================================================