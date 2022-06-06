/**
 * enable reading of environment varialble
 */
require('dotenv').config();

/*
 * enable debugging
 */
const debug=require('debug')('dload');

/*
 * set URL constant
 */
const URL=process.env.URL||'to be configured using environment variable .env';
debug('URL: '+URL)

/*
 * enable file system access
 */
const fs = require('fs');

/*
 * enable HTTP requests
 */
const http = require('http');

debug('process.cwd(): '+process.cwd());
//__dirname is an env variable that tells you the absolute path of the directory containing the currently executing file
debug('__dirname: '+__dirname);

//send HTTP GET request
http.get(URL,(res) => {
    const path = `${__dirname}/dload`;
    debug('path: '+path);
    //create file
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish',() => {
        filePath.close();
        console.log('download Completed');
    })
})
