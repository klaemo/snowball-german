German Snowball Stemmer
===
JS implementation of the stemming algorithm from http://snowball.tartarus.org/algorithms/german/stemmer.html.
Copyright of the algorithm is: Copyright (c) 2001, Dr Martin Porter and can be found at http://snowball.tartarus.org/license.php.
This js version was originally written by Joder Illi. I just added the tests
and published it to npm.

### Installation

```
npm install snowball-german
```

### Usage

```javascript
var stem = require('snowball-german')

var stemmed = stem('abenddämmerung')
console.log(stemmed)
// outputs "abenddammer"
```

### Tests

```
npm test
```