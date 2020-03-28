const passwordSafe = require('./isSafe');
const fs = require('fs');

const generatePassword = (numWords, verifer) => {
    //const fs = require('fs');
    const commonWords = fs.readFileSync('allCommon.txt').toString().split(`\n`);
    let password = '';
    do {
        password = '';
        for (let i = 0; i < numWords; i++) {
            const index = Math.floor(Math.random() * commonWords.length);
            password += commonWords[index];
            password += ' ';
        }
        console.log(password);
    } while(!passwordSafe(password, verifer));
    return password;
}

const numWords = 1;
const verifer = 'facebook';
const password = generatePassword(numWords, verifer);
console.log(password);
