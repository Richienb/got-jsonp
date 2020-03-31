"use strict"

const unwrapJsonp = require("unwrap-jsonp")

const gotJsonp = options => response => {
	response.body = unwrapJsonp(response.body, options)

	return response
}

module.exports = options => ({
	hooks: {
		afterResponse: [gotJsonp(options)]
	}
})
