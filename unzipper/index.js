const debug=require('debug')('debug');
const fs = require('fs');
const pathInput='/home/begerad/git/sib/sandbox-node/request';
const fileInput='connect-top-dhid-1654514173016.zip';
debug('fileInput: '+fileInput);
const filePathInput=pathInput+'/'+fileInput;
debug('filePathInput: '+filePathInput);
const fileInputNoType=fileInput.slice(0,fileInput.length-4);
debug('fileInputNoType: '+fileInputNoType);
const pathOutput='/tmp'+'/'+fileInputNoType;
debug('pathOutput: '+pathOutput);

//create new folder on demand
let isUnzipped=false;
try {
    //check if folder already exists
    if (!fs.existsSync(pathOutput)) {
        fs.mkdirSync(pathOutput);
        debug("Directory is created.");
    } else {
        debug("Directory already exists.");
	isUnzipped=true;
    }
} catch (err) {
    debug(err);
}

//double check if output path exists
if (fs.existsSync(pathOutput)) {
    debug('Directory exists!');
} else {
    debug('Directory not found.');
}

if(!isUnzipped){
    debug('unzip');
    const unzipper=require('./unzipper');
    (async () => {
	try {
	    await unzipper.unzip(filePathInput,pathOutput);
	} catch (err) {
	    console.error(err);
	}
    })();
}else{
    debug('unzip already done');
}
debug('done.');
