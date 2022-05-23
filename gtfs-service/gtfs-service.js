require('dotenv').config();
const axios=require('axios');
const debug=require('debug')('gtfs-service');

/*check if http get service day response includes data*/
function hasData(res){
    if('data' in res){
	debug('data in response available');
	return true;
    }else{
	debug('data in response NOT available');
	return false;
    }
}

/*provide http get service day response and get trip array*/
function getAryTripCount(res){
    if(hasData(res)){
	const objService=res.data;
        const aryService=Object.entries(objService);
	const aryTripCount=aryService.map(trip=>{
	    const aryTrip=Object.keys(trip[1]);
	    return aryTrip.length;
	});
	return aryTripCount;
    }
}

/*provide http get service day response and get time array*/
function getAryTime(res){
    if(hasData(res)){
	const objService=res.data;
        const aryService=Object.entries(objService);
	const arrTime=aryService.map((trips, key) => {
	    //debug('key: ' + key);
            let time = parseInt(trips[0], 10);
            //debug('time: ' + time);
	    return time;
        });
	return arrTime;
    }
};

module.exports={
    getAryTime,
    getAryTripCount
};
