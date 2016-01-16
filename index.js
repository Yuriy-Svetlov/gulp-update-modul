'use strict';
var Stream = require('stream'),
    exec = require('child_process').exec,
    lengmass = 0,
    obj,
    countpackege,
    losk_version,
    keysgenerel,
    keys;
const chalk = require('chalk');


module.exports = function (latest) {
    var readable = new Stream.Transform({ objectMode: true });
    readable._transform = function (file, unused, callback) {
       //var obj = JSON.parse(file.contents);
       //console.log('' + obj.name);
       exec_command0(latest);
       return readable;
    }
    return readable;
}


///////////////////////////////////////////////////////////////
//npm outdated global
///////////////////////////////////////////////////////////////
//"latest": "2.1.0",
//"current": "2.0.0",

function exec_command0(losk_version) {
    console.log(chalk.cyan('Check update packege...'));
    exec('npm outdated -json --long',
    (error, stdout, stderr) => {
        countpackege = 0;
        keysgenerel = new Array();
        keysgenerel.fill(0);

        losk_version = 'latest'; //wanted
        if (error !== null) {
            console.log(`exec error 1 : ${error}`);
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

                            //i = keys.length;
                            //console.log("rrrrrrrrrrrrrrrr - ");
                        }
                    }
                    if (i == keys.length - 1) {
                        //console.log(keysgenerel);
                        exec_command1();
                    }
                 }
            } else {
                console.log(chalk.cyan('Completed!'));
            }
        }
    });
}

function exec_command1() {
    exec('npm outdated',
    (error, stdout, stderr) => {
        if (error !== null) {
            console.log(`exec error 1 : ${error}`);
        } else {
            if (stdout != "") {
                console.log(chalk.red('________________________________________________'));
                console.log(stdout);
                console.log(chalk.red('________________________________________________'));
                exec_command2();
            } 
        }
    });
}




function exec_command2() {
    exec('npm outdated -json --long',
    (error, stdout, stderr) => {
        lengmass = lengmass;
        //console.log("test - " + stdout);
        if (error !== null) {
            console.log(`exec error 1 : ${error}`);
        } else {
            if (stdout != "") {
                obj = JSON.parse(stdout);
                keys = Object.keys(obj);
                lengmass = keys.length;

                console.log(chalk.red('Update packege: ') + countpackege);
                setTimeout(wil, 5000, obj, keys, lengmass);
            } else {
                console.log(chalk.blue('Completed'));
            }
        }
    });
}

function keygen(namemodul){
    var lock = false;
    for (var i = 0 ; keysgenerel.length > i ; i++) {
        
        if(keysgenerel[i]==namemodul){
            lock = true;
            i = keysgenerel.length;
        }
    }

    return lock;
}



var wil = function datamodules(obj, keys, i) {
    i = i - 1;
    var modulUp = keys[i];
    var locked = keygen(keys[i]);
    console.log(chalk.blue('i  - ' + i));

    if (locked) {
        if (obj[keys[i]].type == 'devDependencies') {
            console.log(chalk.green('UPDATE: ') + keys[i] + " " + chalk.green("position ") + lengmass);
            exec_command_save_dev(modulUp);

        } else if (obj[keys[i]].type == 'dependencies') {
            console.log(chalk.green('UPDATE: ') + keys[i] + " " + chalk.green("position ") + lengmass);
            exec_command_save(modulUp);
        }
    }
    console.log(chalk.blue('111  - ' + locked));
    console.log(chalk.blue('222 - ' + keys[i]));
    lengmass = lengmass - 1;
    if (i != 0 && !locked) {
        datamodules(obj, keys, i);
    }
}








//=================================================================================
function exec_command_save_dev(modulupdate) {
    console.log(chalk.blue('exec_command_save_dev  - ' + modulupdate));
    exec('npm install ' + modulupdate + ' --save-dev',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(chalk.magenta('Finish:') + " " + chalk.green(modulupdate));
        console.log(chalk.red('________________________________________________'));

        if (error !== null) {
            console.log(`exec error: ${error}`);
        } else {
            if (lengmass != 0) {
                setTimeout(wil, 3000, obj, keys, lengmass);
            } else {
                console.log(chalk.cyan('Completed!'));
            }
        }
    });
}

function exec_command_save(modulupdate) {
    console.log(chalk.blue('exec_command_save  - ' + modulupdate));
    exec('npm install ' + modulupdate + ' --save',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(chalk.magenta('Finish:') + " " + chalk.green(modulupdate));
        console.log(chalk.red('________________________________________________'));


        if (error !== null) {
            console.log(`exec error: ${error}`);
        } else {
            if (lengmass > 0) {
                setTimeout(wil, 3000, obj, keys, lengmass);
            } else {
                console.log(chalk.cyan('Completed!'));
            }
        }
    });
}
//=================================================================================



