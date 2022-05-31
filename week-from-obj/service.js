const axios=require('axios');
const debug=require('debug')('service');

/* TODO do not call this function when it is required/imported as module
getService().catch(err => {
    debug('getService: error')
    console.log(err)
});
*/

async function getTripsCountFromRoute(routeShortName,week) {
    debug('getTripsCountFromRoute started...')
    //TODO clean up static final route
    routeShortName=565;
    debug('routeShortName: ' + routeShortName);
    let url = `http://localhost:65534/servicedays?routeshortname=${routeShortName}`;
    debug('url: '+url);
    let aryTripsCount=[0,0,0,0,0,0,0];
    let resp={};
    resp= await axios.get(url);
    if('data' in resp){
	const objServiceDays=resp.data;
	const aryServiceDays=Object.entries(objServiceDays);
	debug('aryServiceDays len: '+aryServiceDays.length);
	for(var i=0;i<aryServiceDays.length;i++){
	    //debug('i: '+i);
	    let serviceDay=aryServiceDays[i][0];
	    //debug('serviceDay: '+serviceDay);
	    let dateFromDay=new Date(parseInt(serviceDay,10));
	    //debug('dateFromDay: '+dateFromDay);
	    dateFromDay=new Date(new Date(dateFromDay).setHours(0, 0, 0, 0));
	    //debug('dateFromDay: '+dateFromDay);
	    if(dateFromDay.getTime()===week[0].getTime()){
		debug('found date 0: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[0]=tripCount;
	    }
	    else if(dateFromDay.getTime()===week[1].getTime()){
		debug('found date 1: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[1]=tripCount;
	    }
	    else if(dateFromDay.getTime()===week[2].getTime()){
		debug('found date 2: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[2]=tripCount;
	    }
	    else if(dateFromDay.getTime()===week[3].getTime()){
		debug('found date 3: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[3]=tripCount;
	    }
	    else if(dateFromDay.getTime()===week[4].getTime()){
		debug('found date 4: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[4]=tripCount;
	    }
	    else if(dateFromDay.getTime()===week[5].getTime()){
		debug('found date 5: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[5]=tripCount;
	    }
	    else if(dateFromDay.getTime()===week[6].getTime()){
		debug('found date 6: '+dateFromDay);
		let trips=aryServiceDays[i][1];
		    const aryTrip = Object.keys(trips);
		const tripCount=aryTrip.length;
		debug('tripCount: '+tripCount);		
		aryTripsCount[6]=tripCount;
	    }
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
    debug('getTripsCountFromRoute done.')
    return aryTripsCount;
}

module.exports={
    getTripsCountFromRoute
};
