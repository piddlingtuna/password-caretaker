const fs = require('fs');
const passwordSafe = require('./passwordSafe.js');

const generateSafe = async (numWords, username, verifier) => {
    const commonWords = fs.readFileSync('allCommon.txt').toString().split(`\n`);
    let password = ''
    let safe = false;
    while (!safe) {
        password = generatePassword(numWords, commonWords);
        safe = await passwordSafe(password, username, verifier);
    }
    return password;
}

const generatePassword = (numWords, commonWords) => {
    let password = '';
    for (let i = 0; i < numWords; i++) {
        const index = Math.floor(Math.random() * commonWords.length);
        password += commonWords[index];
        if (i != numWords - 1) {
            password += ' ';
        }
    }
    return password;
}

module.exports = generateSafe;
