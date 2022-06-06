const debug=require('debug')('unzipper');
const {Parse} = require('unzipper');
const {createWriteStream, createReadStream} = require('fs');

const unzip = (pathInput,pathOutput) => {
    debug('pathInput: '+pathInput);
    const stream=createReadStream(pathInput).pipe(Parse());
    return new Promise((resolve, reject) => {
	debug('pathOutput: '+pathOutput);
	stream.on('entry', (entry) => {
	    let file=`${pathOutput}/${entry.path}`;
	    debug('file: '+file);
	    const writeStream=createWriteStream(file);
	    return entry.pipe(writeStream);
	});
	stream.on('finish', () => resolve());
	stream.on('error', (error) => reject(error));
    });
};

module.exports={
    unzip
}
