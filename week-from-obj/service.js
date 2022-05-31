const axios=require('axios');
const debug=require('debug')('service');

/* TODO do not call this function when it is required/imported as module
getService().catch(err => {
    debug('getService: error')
    console.log(err)
});
*/

async function getService(routeShortName) {
    debug('getService started...')
    //TODO clean up static final route
    routeShortName=565;
    debug('routeShortName: ' + routeShortName);
    let url = `http://localhost:65534/servicedays?routeshortname=${routeShortName}`;
    debug('url: '+url);
    let resp={};
    resp= await axios.get(url);
    if('data' in resp){
	const objServiceDays=resp.data;
	const aryServiceDays=Object.entries(objServiceDays);
	debug('aryServiceDays len: '+aryServiceDays.length);
	for(var i=0;i<1;i++){
	    debug('i: '+i);
	    let serviceDay=aryServiceDays[i][0];
	    debug('serviceDay: '+serviceDay);
	    let dateFromDay=new Date(parseInt(serviceDay,10));
	    debug('dateFromDay: '+dateFromDay);
	}


	/* TODO do not run over the entire service days
	aryServiceDays.map((day,key)=>{
	    let dateFromDay=new Date(parseInt(day[0],10));
	    debug('dateFromDay: '+dateFromDay);
	});
	*/
    }else{
	debug('no data in resp');
    }
    debug('getService done.')
}

module.exports={
    getService
};
