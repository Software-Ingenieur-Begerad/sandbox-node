//path is used to resolve properly across the OS
const path = require('path');

module.exports = {
    //bundle *.js from this entry point
    entry: path.resolve(__dirname, './src/index.js'),
    //create output file to be linked to index.html
    output: {
	path: path.resolve(__dirname, './public'),
	filename: 'bundle.js',
    },
};
