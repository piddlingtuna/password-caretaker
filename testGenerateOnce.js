import { generateOnce } from './generateOnce.js';

const length = 9;
const verifer = 'facebook';

generateOnce(length, verifer)
.then(password => {
    console.log(password);
})
