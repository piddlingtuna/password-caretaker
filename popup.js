const passwordSafe = require(`./passwordSafe.js`);
const generateSafe = require(`./generateSafe.js`);
const generateOne = require(`./generateOne.js`);

let verifier = [];
chrome.storage.sync.get([`title`], (response) => {
  verifier = response.title;
});

const usernameInput = document.getElementById(`username-input`);
usernameInput.addEventListener(`input`, () => {
  if (usernameInput.value) {
    usernameInput.classList.add(`is-success`);
    usernameInput.classList.remove(`is-danger`);
  } else {
    usernameInput.classList.add(`is-danger`);
    usernameInput.classList.remove(`is-success`);
  }
});

const passwordInput = document.getElementById(`password-input`);
passwordInput.addEventListener(`input`, () => {
  if (passwordInput.value) {
    passwordInput.classList.add(`is-success`);
    passwordInput.classList.remove(`is-danger`);
  } else {
    passwordInput.classList.add(`is-danger`);
    passwordInput.classList.remove(`is-success`);
  }
});

const checkSafe = document.getElementById(`check-safe`);
checkSafe.addEventListener(`click`, () => {
  const parent = document.getElementById(`check-safe-result`);
  const button = document.getElementById(`button-check-safe`);
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (!username) {
    parent.innerText = `Please enter a username.`;
  } else if (!password) {
    parent.innerText = `Please enter a password.`;
  } else {
    passwordSafe(password, username, verifier)
    .then((safe) => {
      if (safe) {
        parent.innerText =  `Your password is safe.`;
        if (button.classList.contains(`is-danger`)) {
          button.classList.remove(`is-danger`);
        }
        if (!button.classList.contains(`is-success`)) {
          button.classList.add(`is-success`);
        }
        if (parent.classList.contains(`is-danger`)) {
          parent.classList.remove(`is-danger`);
        }
        if (!parent.classList.contains(`is-success`)) {
          parent.classList.add(`is-success`);
        }
      } else {
        parent.innerText = `Your password is NOT safe.`;
        if (button.classList.contains(`is-success`)) {
          button.classList.remove(`is-success`);
        }
        if (!button.classList.contains(`is-danger`)) {
          button.classList.add(`is-danger`);
        }
        if (parent.classList.contains(`is-danger`)) {
          parent.classList.remove(`is-danger`);
        }
        if (!parent.classList.contains(`is-success`)) {
          parent.classList.add(`is-success`);
        }
      }
    });
  }
});

const genSafe = document.getElementById(`gen-safe`);
genSafe.addEventListener(`click`, () => {
  const parent = document.getElementById(`gen-safe-result`);
  const username = usernameInput.value;
  if (!username) {
    parent.innerText = `Please enter a username.`;
  } else {
    generateSafe(7, username, verifier)
    .then((password) => {
      parent.innerText = password;
      if (!parent.classList.contains(`is-success`)) {
        parent.classList.add(`is-success`);
      }
    });
  }
});

const genOne = document.getElementById(`gen-one`);
genOne.addEventListener(`click`, () => {
  const parent = document.getElementById(`gen-one-result`);
  const username = usernameInput.value;
  if (!username) {
    parent.innerText = `Please enter a username.`;
  } else {
    generateOne(20, username, verifier)
    .then((password) => {
      parent.innerText = password;
      if (!parent.classList.contains(`is-success`)) {
        parent.classList.add(`is-success`);
      }
    });
  }
})
