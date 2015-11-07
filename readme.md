# kattu [![Build Status](https://travis-ci.org/techgaun/kattu.svg?branch=master)](https://travis-ci.org/techgaun/kattu)

> Run commands quietly unless the command fails


## Usage

I often wish to run commands but hide the output unless the command fails. In such cases, I would love to see both stdout and stderr so that I can analyze the issues. Mostly I use this while doing sysadmin stuffs.

## Install

```
$ npm install --save kattu
```


## Usage

```js
const kattu = require('kattu');

kattu('ls /tmp');
//=>

kattu('ls /tmp/does/not/exist');
//prints => ls: cannot access /tmp/does/not/exist: No such file or directory
```


## API

### kattu(cmd)

#### cmd

Type: `string`

Pass the command you wish to run.

## CLI

```
$ npm install --global kattu
```

```
$ kattu --help

  Usage
    kattu [cmd]

  Examples
    $ kattu ls /tmp
    $ kattu ls /tmp/does/not/exist
    ls: cannot access /tmp/abc: No such file or directory
```


## License

MIT © [techgaun](http://samar.techgaun.com)
