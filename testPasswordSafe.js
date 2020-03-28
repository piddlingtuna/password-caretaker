import { passwordSafe } from './passwordSafe.js';

const password = 'fragrance';
const verifer = 'facebook';

passwordSafe(password, verifer)
.then(safe => {
    if (safe) {
        console.log(`${password} is a SAFE password.`);
    } else {
        console.log(`${password} is NOT a SAFE password. DO NOT USE THIS AS A PASSWORD.`);
    }
});
