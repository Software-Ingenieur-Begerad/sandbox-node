require('dotenv').config();
const axios=require('axios');
const debug=require('debug')('debug');
const Count=require('./agency-route-count');
const Mapping=require('./utils/mapping');

const URL=process.env.URL;
debug('URL: '+URL)

run().catch(err => {
    debug('run: error')
    console.log(err)
});

async function run() {
    debug('run started...')
    const res = await axios.get(URL);
    debug('res: '+res);
    if('data' in res){
	/*get routes*/
	const AryRoutes=res.data;
	const RouteCount=AryRoutes.length;
	debug('RouteCount: '+RouteCount);
	/*create map*/
	const MapRoutes=new Map();

	/*interate through routes*/
	//TODO for(var i=0;i<RouteCount;i++){
	for(var i=0;i<20;i++){
	    debug('i: '+i);
	    let agencyId=null;
	    let routeId=null;
	    let routeShortName=null;
	    if('agency_id' in AryRoutes[i]){
		agencyId=AryRoutes[i].agency_id;
		debug('agencyId: '+agencyId);
	    }
	    if('route_id' in AryRoutes[i]){
		routeId=AryRoutes[i].route_id;
		debug('routeId: '+routeId);
	    }
	    if('route_short_name' in AryRoutes[i]){
		routeShortName=AryRoutes[i].route_short_name;
		debug('routeShortName: '+routeShortName);
	    }
	    Mapping.updateMap(agencyId,routeId,routeShortName,MapRoutes);

	}
	debug('MapRoutes size: '+MapRoutes.size);
    }
    debug('run done.')
}
