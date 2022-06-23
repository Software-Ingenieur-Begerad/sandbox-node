const fs = require('fs');
const debug=require('debug')('debug');
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
    const buffer=fs.readFileSync('/tmp/vbn/gtfsr_connect.bin');
    if(buffer instanceof Buffer){
	debug('buffer is instance of Buffer');
	debug('read buffer and create pbf');
	const pbf = new Pbf(buffer);
	debug('create feed');
	const feed = FeedMessage.read(pbf);
	debug('use feed');
	if('header' in feed){
	    debug('feed has header');
	}else{
	    debug('feed has header NOT');
	}
	let feedCount=0;
	feed.entity.forEach(entity => {
	    feedCount++;
	    const vehiclePos = entity.vehicle;
	    if (vehiclePos) {
		const { trip, position, vehicle } = vehiclePos;
		if (trip && position && vehicle) {
		}else{
		    debug('vehiclePos misses either trip, position or vehicle');
		}
	    }else{
		debug('entity misses vehicle');
	    }
	});
	debug('feedCount: '+feedCount);
    }else{
	debug('buffer is NOT instance of Buffer');
    }
    debug('run done.');
}
