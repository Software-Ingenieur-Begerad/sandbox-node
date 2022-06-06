const debug=require('debug')('dload');
const fs = require('fs');
const request = require('request');

function dloadFile(url,dest){
    debug('url: '+url);
    const date=new Date();
    const destWithDate=dest+'-'+date.getTime()+'.zip';
    debug('destWithDate: '+destWithDate);
    request(url).pipe(fs.createWriteStream(destWithDate));
    debug('done.');
};

module.exports={
    dloadFile
};
