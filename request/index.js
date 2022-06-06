const debug=require('debug')('debug');
const dload=require('./dload');
const url='http://www.connect-info.net/opendata/gtfs/connect-nds-toplevel-dhid/pxypihdrpv';
debug('url: '+url)
const dest='connect-top-dhid';
debug('dest: '+dest);
dload.dloadFile(url,dest);
debug('done.');
