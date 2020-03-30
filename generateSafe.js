const passwordSafe = require('./passwordSafe.js');

const allCommon = require('./allCommon.js');

const generateSafe = async (numWords, username, verifier) => {
    let password = ''
    let safe = false;
    while (!safe) {
        password = generatePassword(numWords, allCommon);
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
