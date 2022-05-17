const http = require('http');
require('dotenv').config();
const DEBUG=require('debug')('http-get');

const ADDR=process.env.ADDR;
DEBUG('ADDR: '+ADDR);
let request = http.get(ADDR, (res) => {
    if (res.statusCode !== 200) {
	console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
	res.resume();
	return;
    }

    let data = '';

    res.on('data', (chunk) => {
	data += chunk;
    });

    res.on('close', () => {
	console.log('Retrieved all data');
	console.log(JSON.parse(data));
    });
});
