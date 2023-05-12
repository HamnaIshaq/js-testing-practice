## testing in js

this project uses jest to write tests in js

### how to make a test file?

Make a file in the format: `filename.test.js`

### how to run test on command line?

run the command `npm test` in the command line
if you want to run a single test file then use the command `npm test filename.test.js`

## caesarCipher function

for a message, shift each character forward by a specific number of characters to encrypt the message

example caesarCipher("abc", 1) --> "bcd"
where

1. 1st param is the message to encrypt
2. 2nd param is the number of characters to shift each character of the message

how to write logic for caesarCipher function?

for a string given as a parameter, I first need to get each character
