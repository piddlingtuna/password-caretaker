import { generateSafe } from './generateSafe.js';

const numWords = 4;
const verifer = 'facebook';

generateSafe(numWords, verifer)
.then(password => {
    console.log(password);
})
