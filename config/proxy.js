const beta = {
	'/api/': {
		target: 'https://testapi.nques.thenextstone.com',
		changeOrigin: true,
	}
}

const development = {
	'/api/': {
		target: 'https://api.nques.thenextstone.com',
		changeOrigin: true,
	}
}

module.exports = {
	beta,
	development
}