const fs = require('fs');
const encrypt = require('./encypt');
const decrypt = require('./decrypt');


/** Data Sharing Approach */

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

// Stores a Buffer object
const newMessage = "Hello Dear , Let's learn Cryptography";

const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, newMessage);

// If you try and "crack the code", you will just get gibberish
console.log(encryptedMessage.toString());

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);

// Convert the Buffer to a string and print the message!
console.log(decryptedMessage.toString());