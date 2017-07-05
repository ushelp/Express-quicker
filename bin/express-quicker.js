#!/usr/bin/env node

/**
 * Express-quicker 
 * 
 * Usage: equicker [name]
 */

'use strict';

const path = require('path')
const fs = require('fs');
const fse = require('fs-extra')
const unzip = require('unzip');
const program = require('commander')
const colors = require('colors')

const SRC = 'Express-quickstart-master-1.3.0.zip';
const EMP_SRC = 'express-quickstart-emp-master-1.3.0.zip';

const URL = 'https://github.com/ushelp/Express-quickstart/archive/master.zip';
const EMP_URL = 'https://github.com/ushelp/express-quickstart-emp/archive/master.zip';

var useType=null;
var appName=null;

program.version('1.3.0')
.name('equicker')
.usage(' [options]  [app-name]')
.description('Express application generator tool based on Express-quickstart.')
.option('-t <type>', 'generator type, available in: [emp]',function(value){
	if(value.toLowerCase()=='emp'){
		useType='emp';
		// exist app-name
		if(program.rawArgs.length==5){
			appName = program.rawArgs[4];
		}
	}else{
		useType='ERROR';
		console.error(('Type Error: \''+value+'\' not allowed!').red);
		console.error('The current allowable type in: [emp]'.red);
	}
})
.parse(process.argv);


if(useType=='ERROR'){
	return;
}

console.log('Start equicker.');
// Destination Path
var destPath = process.cwd();

var fromSrc=SRC;
var fromUrl=URL;

if(useType=='emp'){
	fromSrc=EMP_SRC;
	fromUrl=EMP_URL;
}else{
	// arguments
	var args = process.argv.splice(2);
	if(args.length > 0) {
		appName=args[0];
	}
}

if(appName){
	fs.mkdirSync(appName);
	destPath = process.cwd() + "/" + appName;
}


// COPY & UNZIP (Donot DOWNLOAD from github)

var srcPath = path.resolve(__dirname, '../src/' + fromSrc);

//
//console.log(srcPath);
//console.log(fromUrl);
//console.log(destPath);
//
//return;

var exists = fs.existsSync(srcPath)
if(exists) {
	console.log('create files...');
	fs.createReadStream(srcPath).pipe(unzip.Extract({
		path: destPath
	})).on('close', function() {
		if(useType=='emp'){
			fse.moveSync(path.resolve(destPath, 'Express-quickstart-emp-master'), destPath);
		}else{
			fse.moveSync(path.resolve(destPath, 'Express-quickstart-master'), destPath);
		}
		console.log('equicker work done! ');
	});
} else {
	console.log('Waiting for the latest download from `' + fromUrl + '`');
	console.log('Waiting ...');

	var request = require('request');

	request(url).pipe(fs.createWriteStream(srcPath)).on('close', function() {
		console.log('Download done.');
		console.log('create files...');
		fs.createReadStream(srcPath).pipe(unzip.Extract({
			path: destPath
		})).on('close', function() {
			if(useType=='emp'){
				fse.moveSync(path.resolve(destPath, 'express-quickstart-emp-master'), destPath);
			}else{
				fse.moveSync(path.resolve(destPath, 'Express-quickstart-master'), destPath);
			}
			console.log('equicker work done! ');
		});
	});
}