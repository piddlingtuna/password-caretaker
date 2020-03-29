import { passwordSafe } from './passwordSafe.js';

const password = 'fragrance';
const username = 'Gribbenator'
const verifier = 'facebook';

passwordSafe(password, username, verifier)
.then(safe => {
    if (safe) {
        console.log(`${password} is a SAFE password.`);
    } else {
        console.log(`${password} is NOT a SAFE password. DO NOT USE THIS AS A PASSWORD.`);
    }
});
