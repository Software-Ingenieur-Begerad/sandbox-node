const axios=require('axios');
const debug=require('debug')('debug');
const aryThisWeek=require('./ary-this-week');
const routeService=require('./service');

run().catch(err => {
    debug('run: error')
    console.log(err)
});

async function run() {
    debug('run started...')
    const thisWeek=aryThisWeek.getAryThisWeek(new Date());
    debug('thisWeek: '+thisWeek)


    let url = 'http://localhost:65534/service-overview';
    debug('url: '+url);
    let res={};
    res= await axios.get(url);
    if('data' in res){
	let aryServiceOverview=Object.entries(res.data);
	for(var i=1;i<2;i++){
	    debug('i: '+i);
            let agencyId = aryServiceOverview[i][0];
	    debug('agencyId: '+agencyId);
            let objRoutes = aryServiceOverview[i][1];
            let count = Object.keys(objRoutes).length;
            debug('objRoutes count: ' + count);
	    let aryRoutes =Object.entries(objRoutes);
	    for(var j=0;j<1;j++){
		debug('j: '+j);
		let routeId=aryRoutes[i][0];
		debug('routeId: ' + routeId);
		let routeShortName=aryRoutes[i][1];
		debug('routeShortName: ' + routeShortName);
		if(routeShortName){
		    let aryTripsCount=[0,0,0,0,0,0,0];
		    aryTripsCount=routeService.getTripsCountFromRoute(routeShortName,thisWeek);
		    //TODO Why is aryTripsCount undefined?
		    debug('aryTripsCount: '+aryTripsCount[0]);
		}
	    }
	}
	/* TODO do run over the entire agencies
	Object.entries(res.data).map((agency, key) => {
            //debug('key: ' + key);
            let objRoutes = agency[1];
            let count = Object.keys(objRoutes).length;
            //debug('count: ' + count);
            let agencyId = agency[0];
	    Object.entries(objRoutes).map((route,key)=>{
		let routeId=route[0];
		    let routeShortName=route[1];
		if(routeShortName){
		    debug('routeShortName: ' + routeShortName);
		    routeService.getService(routeShortName);
		}
	    });
        });
	*/
    }else{
	debug('no data in res');
    }
    debug('run done.')
}
