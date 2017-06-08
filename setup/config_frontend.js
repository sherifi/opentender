let path = require('path');
let settings = {
	server: {
		listen: {  // where the frontend should be listening
			host: '0.0.0.0',
			port: 3000
		},
		data: { // absolute paths to the data folders (see https://github.com/digiwhist/opentender-data)
			path: path.resolve(__dirname, '../data/shared')
		},
		disableCache: false, // html is cached, disable here for debugging purposes
		backendUrl: 'http://127.0.0.1:3001' // full url of the backend
	},
	client: {
		version: '0.0.3', // version of app (is e.g. used for display in footer & "uncaching" resources on app update)
		backendUrl: 'http://127.0.0.1:3001' // full url of the backend
	},
	webpack: {
		analyze: false, // analyze the webpack build (generates .html results in /dist folder)
		sourcemaps: false, // generate .map files for .js & .css
		minimize: true, // minimize & uglify the client code js
		debug: false // tell webpack be more verbose
	}
};
module.exports = settings;
