module.exports = {
	ENVIRONMENT: process.env.NODE_ENV,
	ENTRY: {
		app: './app/bootstrap.ts',
		vendor: ['angular-animate', 'angular-route']
	},
	TEMPLATE: './app/index.html',
	OUTPUT_PATH: 'dist',
	OUTPUT_FILE: 'app.js',
	VENDOR_FILE: 'vendor.js'
};
