# promise-map
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[Map][mdn] over an array and return a [Promise][promise].

## Installation
```bash
$ npm install promise-map
```

## Usage
```js
const map = require('promise-map')

Promise.resolve([1, 2, 3])
  .then(map((val) => val + 1))
// => [2, 3, 4]
```

## Why?
This module is basically equivalent to [`bluebird.map`][bluebird], but it's handy
to have the one function you need instead of a kitchen sink. Modularity!
Especially handy if you're serving to the browser and need to reduce your
javascript bundle size.

Works great in the browser with
[browserify](http://github.com/substack/node-browserify)!

## See Also
- [promise-every](https://github.com/yoshuawuyts/promise-every)
- [promise-filter](https://github.com/yoshuawuyts/promise-filter)
- [promise-forEach](https://github.com/yoshuawuyts/promise-forEach)
- [promise-reduce](https://github.com/yoshuawuyts/promise-reduce)
- [promise-some](https://github.com/yoshuawuyts/promise-some)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-map.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-map
[travis-image]: https://img.shields.io/travis/yoshuawuyts/promise-map.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/promise-map
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/promise-map.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/promise-map?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-map.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-map

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[bluebird]: https://github.com/petkaantonov/bluebird/blob/master/API.md#mapfunction-mapper--object-options---promise
