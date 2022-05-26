const fs = require('fs');
const debug=require('debug')('pbf');
const gtfsRt=require('../../proto2js/js/gtfs-rt.js');
const Pbf = require('pbf');

run().catch(err => {
    debug('run: error');
    console.log(err)
});

async function run() {
    debug('run started...');
    const FeedMessage = gtfsRt.FeedMessage;
    debug('read gtfs-rt feed from file');
    const buffer=fs.readFileSync('/tmp/gtfsr_connect.bin');
    if(buffer instanceof Buffer){
	debug('buffer is instance of Buffer');
	debug('read buffer and create pbf');
	const pbf = new Pbf(buffer);
	debug('create obj');
	const obj = FeedMessage.read(pbf);
	debug('use obj');
	if(obj.header in obj){
	    debug('obj has header');
	}else{
	    debug('obj has header NOT');
	}
    }else{
	debug('buffer is NOT instance of Buffer');
    }
    debug('run done.');
}
