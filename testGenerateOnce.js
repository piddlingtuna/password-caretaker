import { generateOnce } from './generateOnce.js';

const length = 10;
const username = 'Gribbenator'
const verifier = ['facebook'];

generateOnce(length, username, verifier)
.then(password => {
    console.log(password);
})
