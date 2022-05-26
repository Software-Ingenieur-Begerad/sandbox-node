const debug=require('debug')('pbf');

run().catch(err => {
    debug('run: error')
    console.log(err)
});

async function run() {
    debug('run started...')
    debug('run done.')
}
