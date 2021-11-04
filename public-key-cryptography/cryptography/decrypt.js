const crypto = require('crypto');


// In data sharing we encrypt the message using public key and decrypt using private key


const decryptWithPrivateKey = (privateKey, encryptedMessage) => {
    
    return crypto.privateDecrypt(privateKey, encryptedMessage);
    
}

// In Identity sharing we encrypt it using private key and decrypt using public key


const decryptWithPublicKey = (publicKey, encryptedMessage) => {
    
    return crypto.publicDecrypt(publicKey, encryptedMessage);
    
}

module.exports = {

    decryptWithPrivateKey ,
    decryptWithPublicKey
}