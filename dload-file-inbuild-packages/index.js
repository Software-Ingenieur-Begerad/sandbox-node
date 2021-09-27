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
  
/*
 * send HTTP GET request
 */  
http.get(URL,(res) => {
    /*
     * image will be stored at this place
     */
    const path = `${__dirname}/dload`; 
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish',() => {
        filePath.close();
        console.log('Download Completed'); 
    })
})
