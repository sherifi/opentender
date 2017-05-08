let path = require('path');
let settings = {
	listen: {  // where the backend should be listening
		host: '127.0.0.1',
		port: 3001
	},
	elastic: { // where elastic search is listening
		host: '127.0.0.1',
		port: 9200,
		log: ['info', 'error']
	},
	data: { // absolute paths to the data folders (see https://github.com/digiwhist/opentender-data)
		shared: path.resolve(__dirname, '../data/shared'),
		path: path.resolve(__dirname, '../data/backend'),
		tenderapi: path.resolve(__dirname, '../data/tenderapi')
	},
	disableCache: false // json is cached, disable here for debugging purposes
};
module.exports = settings;