let path = require('path');
let settings = {
	server: {
		listen: {  // where the frontend should be listening
			host: '127.0.0.1',
			port: 3000
		},
		data: { // absolute paths to the data folders (see digiwhist/data-folder)
			path: path.resolve(__dirname, '../data/shared')
		},
		disableCache: false // html is cached, disable here for debugging purposes
	},
	client: {
		version: '0.0.2', // version of app (is e.g. used for display in footer & "uncaching" resources on app update)
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
