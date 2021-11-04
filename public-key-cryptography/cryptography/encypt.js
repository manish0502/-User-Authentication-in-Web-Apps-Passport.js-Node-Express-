const crypto = require('crypto');


// In data sharing we encrypt the message using public key and decrypt using private key

const encryptWithPublicKey = (publicKey, message) => {
    
    const bufferMessage = Buffer.from(message, 'utf8');
    
    return crypto.publicEncrypt(publicKey, bufferMessage);
    
}

// In Identity sharing we encrypt it using private key and decrypt using public key


const encryptWithPrivateKey = (privateKey, message) => {
    
    const bufferMessage = Buffer.from(message, 'utf8');
    
    return crypto.privateEncrypt(privateKey, bufferMessage);
}



module.exports = {
    encryptWithPublicKey,
    encryptWithPrivateKey
  }