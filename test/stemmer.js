var assert = require('assert'),
		stem = require('..'),
		fs = require('fs');

var voc = fs.readFileSync(__dirname + '/voc.txt', { encoding: 'utf8'}).split('\n');
var output = fs.readFileSync(__dirname + '/output.txt', { encoding: 'utf8'}).split('\n');

voc.forEach(function (word, i) {
	assert.equal(output[i], stem(word));
});

console.log('\033[32mLooks good to me :)');
