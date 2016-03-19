# is-docx
Detect docx file type from buffer.  

Checks for `'PK\x03\x04\x14\x00\x06\x00'` at the start of a file buffer.

## Install

```
npm install is-docx
```

## Usage

```js
const fs = require('fs');
const isDocx = require('is-docx');

const file = fs.readFileSync('example.docx');

console.log(isDocx(file)); // > true
```
