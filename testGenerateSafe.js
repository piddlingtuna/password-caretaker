import { generateSafe } from './generateSafe.js';

const numWords = 4;
const username = 'Gribbenator'
const verifier = 'facebook';

generateSafe(numWords, username, verifier)
.then(password => {
    console.log(password);
})
