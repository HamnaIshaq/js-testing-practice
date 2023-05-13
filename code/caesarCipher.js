const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCipher(message, shift) {
  message = message.toLowerCase(); // make message lowercase
  let encryptedCode = "";
  for (let i = 0; i < message.length; i++) {
    const index = alphabets.indexOf(message[i]);
    if (index !== -1) {
      // for alphabet not space
      encryptedCode += alphabets[index + shift];
    }
    if (index === -1) {
      // check for spacing
      encryptedCode += " ";
    }
    if (index === alphabets.length - 1) {
      // for z, wrap around and start from letter a
      console.log(encryptedCode);
      encryptedCode += alphabets[shift - 1];
    }
  }
  return encryptedCode;
}
//caesarCipher("i AM learninz", 1);

export default caesarCipher;
