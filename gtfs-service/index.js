const axios=require('axios');
const debug=require('debug')('debug');
const GtfsService=require('./gtfs-service');

const URL='to be configured';
debug('URL: '+URL)

run().catch(err => {
    debug('run: error')
    console.log(err)
});

async function run() {
    debug('run started...')
    const res = await axios.get(URL);
    debug('res: '+res);
    const aryTripCount=GtfsService.getAryTripCount(res);
    debug('aryTripCount len: '+aryTripCount.length);
    debug('aryTripCount [0]: '+aryTripCount[0]);
    const aryTime=GtfsService.getAryTime(res);
    debug('aryTime len: '+aryTime.length);
    debug('aryTime [0]: '+aryTime[0]);
    debug('run done.')
}
