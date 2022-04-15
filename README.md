# axel2js
A tool for converting js code to [axel api nodes](https://git.ablecorp.us/able/aos_userland/src/branch/master/axel) for the [able os](https://git.ablecorp.us/able/ableos) api.

## Credits
Able os and Axel api by [Able](https://git.ablecorp.us/able).

For development updates on able os you can go to [the ablecorp discord](https://discord.gg/rfrjZyBJXq).

## Syntax
The syntax for axel code is fairly simple so i decided to stick with that for axel2js.

All axel projects start off with the bare bones.
```js
const { Axel } = require('axel2js');
const ax = new Axel(true);

ax.generate();
```

This is the bare bones axel project, but from here it only gets more simple as there are only 2 keywords.

Lets start off with the easy one <b>value</b>

To define a value in axel2js is fairly simple and can be done like seen
```js
const { Axel } = require('axel2js');
const ax = new Axel(false);

ax.value('stringExample', 'test string');
ax.value('numExample', 123);
ax.value('boolExample', true);
ax.value('floatExample', 123.456);

ax.generate();
```
The second keyword in axel2js is <b>func</b>

To define a function in axel2js it is as simple as you see below
```js
const { Axel } = require('axel2js');
const ax = new Axel(false);

ax.func('funcName', ['string', 'bool', 'num', 'float'], ['none']);

ax.generate();
```

This might look confusing but it is fairly simple.

* First we are defining the function name
* Then we are creating a array of the input types
* The finally we are creating a array of the output types

# PLEASE READ
Axel is a api descriptor lang made for able os, this npm package is made to make it easier for everyone to use