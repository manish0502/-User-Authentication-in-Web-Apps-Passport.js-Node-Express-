const crypto = require('crypto');
const fs = require('fs');




function genKeyPair() {



    const Options = {
    
        modulusLength: 4096, // bits - standard for RSA keys

        publicKeyEncoding: {

            type: 'pkcs1',  // "Public Key Cryptography Standards 1" 
            format: 'pem'   // Most common formatting choice
        },

        privateKeyEncoding: {

            type: 'pkcs1',   // "Public Key Cryptography Standards 1"
            format: 'pem'    // Most common formatting choice
        }
    } 

    // Generates an object where the keys are stored in properties `privateKey` and `publicKey`

    const keyPair = crypto.generateKeyPairSync('rsa', Options);

    // Create the public key file
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem', keyPair.publicKey); 
    
    // Create the private key file
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem', keyPair.privateKey);

}

// Generates the keypair

genKeyPair();