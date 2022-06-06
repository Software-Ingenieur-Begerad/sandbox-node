const debug=require('debug')('files');
const fs = require('fs');
const fsp = fs.promises;

//resolves to true or false
async function compare(fname1, fname2) {
    debug('fname1: '+fname1);
    let h1, h2;
    try {
        h1 = await fsp.open(fname1);
        h2 = await fsp.open(fname2);
        const [stat1, stat2] = await Promise.all([h1.stat(), h2.stat()]);
        if (stat1.size !== stat2.size) {
	    debug('file size NOT equal');
            return false;
        }else{
	    debug('file size equal');
            return true;
	}
    } finally {
        if (h1) {
	    debug('h1 to be closed');
            await h1.close();
        }
        if (h2) {
	    debug('h2 to be closed');
            await h2.close();
        }
    }
}

module.exports={
    compare
}
