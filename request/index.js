const debug=require('debug')('request');
const url='to be configured';
debug('url: '+url)
const fs = require('fs');
const request = require('request');
const dest='connect-top-dhid.zip';
request(url).pipe(fs.createWriteStream(dest));
debug('done.');
