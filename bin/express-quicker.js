#!/usr/bin/env node

/**
 * Express-quicker 
 * 
 * Usage: equicker [name]
 */

'use strict';

console.log('Start equicker.');

const SRC = 'Express-quickstart-master-1.2.1.zip';

const path = require('path')
const fs = require('fs');
const fse = require('fs-extra')
const unzip = require('unzip');

// arguments
var args = process.argv.splice(2);

// Destination Path
var destPath = process.cwd();

if(args.length > 0) {
	fs.mkdirSync(args[0]);
	destPath = process.cwd() + "/" + args[0];
}

// COPY & UNZIP (Donot DOWNLOAD from github)

var srcPath = path.resolve(__dirname, '../src/' + SRC);

var exists = fs.existsSync(srcPath)
if(exists) {
	console.log('create files...');
	fs.createReadStream(srcPath).pipe(unzip.Extract({
		path: destPath
	})).on('close',function(){
		fse.moveSync(path.resolve(destPath,'Express-quickstart-master'), destPath);
		console.log('equicker work done! ');
	});
} else {
	var url = 'https://github.com/ushelp/Express-quickstart/archive/master.zip';
	console.log('Waiting for the latest download from `' + url + '`');
	console.log('Waiting ...');

	var request = require('request');

	request(url).pipe(fs.createWriteStream(srcPath)).on('close', function() {
		console.log('Download done.');
		console.log('create files...');
		fs.createReadStream(srcPath).pipe(unzip.Extract({
			path: destPath
		})).on('close',function(){
			fse.moveSync(path.resolve(destPath,'Express-quickstart-master'), destPath);
			console.log('equicker work done! ');
		});
	});
}