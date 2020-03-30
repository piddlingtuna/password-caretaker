import { passwordSafe } from './passwordSafe.js';

const charcters = ` ~!@#$%^&*()_+\`-=[]\\{}|;':",./<>?qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;

const generateOnce = async (length, username, verifier) => {
    let password = ''
    let safe = false;
    while (!safe) {
        password = generatePassword(length);
        safe = await passwordSafe(password, username, verifier);
    }
    return password;
}

const generatePassword = (length) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charcters.length);
        password += charcters[index];
    }
    return password;
}

module.exports = generateOnce;
