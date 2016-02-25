# split-keywords

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> split keywords string into array

## Install

    npm install --save split-keywords

## Usage

```js
import splitKeywords from 'split-keywords';

splitKeywords('uni, corns'); // ['uni', 'corns']
splitKeywords(',uni,, corns,meow,'); // ['uni', 'corns', 'meow']
splitKeywords(); // undefined
```

## API

### splitKeywords(keywords)

```js
// splitKeywords :: String -> [String]
```

#### keywords

*Required*  
Type: `String`

Keywords delimited by coma.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/split-keywords
[npm-image]: https://img.shields.io/npm/v/split-keywords.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/split-keywords
[travis-image]: https://img.shields.io/travis/iamstarkov/split-keywords.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/split-keywords
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/split-keywords.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/split-keywords
[depstat-image]: https://david-dm.org/iamstarkov/split-keywords.svg?style=flat-square
