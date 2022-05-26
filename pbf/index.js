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
    const buffer=[];
    // read
    debug('create pbf');
    const pbf = new Pbf(buffer);
    debug('create obj');
    const obj = FeedMessage.read(pbf);
    debug('use obj');
    debug('run done.');
}
