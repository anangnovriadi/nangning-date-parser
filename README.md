# nangning-date-parser
This is sample date parser you can use.

## Installation
```
npm install nangning-date-parser
```

## Params
```
1 = date => (2020-03-02 13:35:00)
2 = language => (id, en)
3 = reverse => (true / false)
4 = separators = (, . -)
```

## Usage
```javascript
const parser = require("nangning-date-parser");
// or
var parser = require("nangning-date-parser");

// Sample Dateparser
parser.parse('2020-03-02 13:35:00', 'id', true, '')
```

For information, contact me [nangning.xyz](http://www.nangning.xyz/).
