require('dotenv').config();
const debug=require('debug')('request');
const url=process.env.URL||'to be configured using environment variable .env';
debug('url: '+url)
const fs = require('fs');
const request = require('request');
const dest='connect-top-dhid.zip';
request(url).pipe(fs.createWriteStream(dest));
debug('done.');
