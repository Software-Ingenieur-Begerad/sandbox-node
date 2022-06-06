const debug=require('debug')('debug');
const fs = require('fs');
const fileStat=require('./file-stat');
const fileName='package.json';
debug('fileName: '+fileName);
fileStat.getMTimeAsync(fileName);
fileStat.getMTimeSync(fileName);
debug('done.');
