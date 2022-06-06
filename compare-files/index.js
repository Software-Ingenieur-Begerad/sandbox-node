const debug=require('debug')('debug');
const fs = require('fs');
const files=require('./files');
const path='/home/begerad/git/sib/sandbox-node/request';
const filePathAbsOne=path+'/connect-top-dhid-1654510162870.zip';
debug('filePathAbsOne: '+filePathAbsOne);
const filePathAbsTwo=path+'/connect-top-dhid-1654514173016.zip';
debug('filePathAbsTwo: '+filePathAbsTwo);

//sample usage
files.compare(filePathAbsOne,filePathAbsTwo).then(result => {
    debug('result: '+result);
}).catch(err => {
    console.log(err);
});
debug('done.');
