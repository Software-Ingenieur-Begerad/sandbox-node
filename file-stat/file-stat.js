const debug=require('debug')('last-modified');
const fs = require('fs');

function getMTimeAsync(fileName){
    let mtime=fs.stat(fileName, (err, stats) => {
	if(err) {
            throw err;
	}
	return stats.mtime;
    });
    debug('mtime: '+mtime);
    return mtime;
}

function getMTimeSync(fileName){
    let mtime=null;
    try {
	const stats = fs.statSync(fileName);
	mtime=stats.mtime;
    } catch (error) {
	console.log(error);
    }
    debug('mtime: '+mtime);
    return mtime;
}

module.exports={
    getMTimeAsync,
    getMTimeSync
};
