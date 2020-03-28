//import fs from 'fs';
//import axios from 'axios';
//import jshashes from 'jshashes';

const passwordSafe = (password, verifer) => {
    if (password.length < 8) {
        console.log('Password is too short.')
        return false;
    }
    if (password.replace(/\s+/g, ``) < 8) {
        console.log('Password is too short removing consecutive spaces.');
        return false;
    }
    if (password.toLowerCase().includes(verifer.toLowerCase())) {
        console.log('Password is associated with verifier.');
        return false;
    }
    if (manyRepeats(password)) {
        console.log('Password contained too many repeated characters.');
        return false;
    }
    if (isCommon(password)) {
        console.log('Password is a common word.');
        return false;
    }
    if (wasBreached(password)) {
        console.log('Password was found in a prior data breach.');
        return false;
    }
    return true;
}


const manyRepeats = (password) => {
    var characters = password.match(/([a-zA-Z])\1*/g)||[];
    return !characters.every((character) => {
        return character.length < 4;
    })
}


const isCommon = (password) => {
    password = password.toLowerCase();
    const fs = require('fs');
    const commonWords = fs.readFileSync('longCommon.txt').toString().split(`\n`);
    for (let i = 0; i < commonWords.length; i++) {
        if (password == commonWords[i]) {
            return true;
        }
    }
    return false;
}


const wasBreached = (password) => {
    const axios = require("axios");
    const jshashes = require('jshashes');
    const url = `https://api.pwnedpasswords.com/range/`;
    const SHA1 = new jshashes.SHA1;
    const hashedPassword = SHA1.hex(password);
    let frequency = 0;
    axios.get(`${url}${hashedPassword.substring(0, 5)}`)
    .then(response => {
        const data = response.data.split(`\r\n`);
        for (let i = 0; i < data.length && frequency === 0; i ++) {
            if (data[i].split(`:`)[0] === hashedPassword.substring(5).toUpperCase()) {
                return true;
            }
        }
    })
    return false;
}


const password = 'professionals';
const verifer = 'facebook';

if (passwordSafe(password, verifer)) {
    console.log(`${password} is a SAFE password.`);
} else {
    console.log(`${password} is NOT a SAFE password. DO NOT USE THIS AS A PASSWORD.`);
}


module.exports = passwordSafe;