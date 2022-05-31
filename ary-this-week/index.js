const Debug=require('debug')('debug');
const AryThisWeek=require('./ary-this-week');

run().catch(err => {
    Debug('run: error')
    console.log(err)
});

async function run() {
    Debug('run started...')
    const thisWeek=AryThisWeek.getAryThisWeek(new Date());

    Debug('thisWeek: '+thisWeek)
    Debug('run done.')
}
