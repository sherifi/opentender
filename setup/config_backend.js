var path = require('path');
module.exports = {
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
	cache: {
		type: 'internal', // disabled | internal | memcached
		memcached: ['127.0.0.1:11211'] // if type == memcached, server address(es)
	}
};
