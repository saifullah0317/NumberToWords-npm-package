# number-to-english-words
Converts a numeric input to its equivalent English words representation.
- Number should be passed as a string in quotation marks '' or ""
- Can do conversion upto 36 digits (that's nine hundred and ninety nine decillion)
## Installation
To use this package in your project. Install by running command
`npm install number-to-english-words`
## Usage
To use the numberToWords function in your project, require it from the number-to-words package and call it with a numeric input. Here's an example:
```javascript
const { convertToEnglish } = require('number-to-english-words');
// or in ECMA
// import { convertToEnglish } from 'number-to-english-words'

const num = '12345';
const words = convertToEnglish(num);
console.log(words); // "twelve thousand three hundred forty-five"
```
You can pass any numeric input to the numberToWords function and it will return the corresponding English words representation. If the input is not a valid number, the function will throw an error.
## License
This package is licensed under [ISC](https://opensource.org/license/isc-license-txt/)
