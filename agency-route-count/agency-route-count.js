require('dotenv').config();
const axios=require('axios');
const debug=require('debug')('agency-route-count');

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

module.exports={
};
