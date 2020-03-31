# got-jsonp [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/got-jsonp/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/got-jsonp)

Got JSONP support.

[![NPM Badge](https://nodei.co/npm/got-jsonp.png)](https://npmjs.com/package/got-jsonp)

## Install

```sh
npm install got-jsonp
```

## Usage

```js
const got = require("got");
const jsonpGot = got.extend(require("got-jsonp")());

(async () => {
	const { body } = await jsonpGot("https://www.w3schools.com/xml/simple.xml");

	console.log(body);
	//=> ['No records found']
})();
```

## API

### gotJsonp(options?)

#### options

Type: `object`

Options to pass to [unwrap-jsonp](https://github.com/Richienb/unwrap-jsonp#options).
