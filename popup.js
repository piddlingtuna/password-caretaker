const passwordSafe = require('./passwordSafe.js');
const generateSafe = require('./generateSafe.js');
const generateOne = require('./generateOne.js');

const usernameInput = document.getElementById('username-input');
usernameInput.addEventListener('input', () => {
  if (usernameInput.value) {
    usernameInput.classList.add('is-success');
    usernameInput.classList.remove('is-danger');
  } else {
    usernameInput.classList.add('is-danger');
    usernameInput.classList.remove('is-success');
  }
});

const verifierInput = document.getElementById('verifier-input');
verifierInput.addEventListener('input', () => {
  if (verifierInput.value) {
    verifierInput.classList.add('is-success');
    verifierInput.classList.remove('is-danger');
  } else {
    verifierInput.classList.add('is-danger');
    verifierInput.classList.remove('is-success');
  }
});

const passwordInput = document.getElementById('password-input');
passwordInput.addEventListener('input', () => {
  if (passwordInput.value) {
    passwordInput.classList.add('is-success');
    passwordInput.classList.remove('is-danger');
  } else {
    passwordInput.classList.add('is-danger');
    passwordInput.classList.remove('is-success');
  }
});

const checkSafe = document.getElementById('check-safe');
checkSafe.addEventListener('click', () => {
  const parent = document.getElementById('check-safe-result');
  removeChildren(parent);
  const child = document.createElement('div');
  const username = usernameInput.value;
  const verifier = verifierInput.value;
  const password = passwordInput.value;
  if (!username) {
    child.innerText = `Please enter a username.`;
  } else if (!verifier) {
    child.innerText = `Please enter a verifier.`;
  } else if (!password) {
    child.innerText = `Please enter a password.`;
  } else {
    passwordSafe(password, username, verifier)
    .then((safe) => {
      if (safe) {
        child.innerText =  `Your password is safe.`;
      } else {
        child.innerText = `Your password is NOT safe`;
      }
    });
  }
  parent.appendChild(child);
});

const genSafe = document.getElementById('gen-safe');
genSafe.addEventListener('click', () => {
  const parent = document.getElementById('gen-safe-result');
  removeChildren(parent);
  const child = document.createElement('div');
  const username = usernameInput.value;
  const verifier = verifierInput.value;
  if (!username) {
    child.innerText = `Please enter a username`;
  } else if (!verifier) {
    child.innerText = `Please enter a verifier`;
  } else {
    generateSafe(7, username, verifier)
    .then((password) => {
      child.innerText = password;
    });
  }
  parent.appendChild(child);
});

const genOne = document.getElementById('gen-one');
genOne.addEventListener('click', () => {
  const parent = document.getElementById('gen-one-result');
  removeChildren(parent);
  const child = document.createElement('div');
  const username = usernameInput.value;
  const verifier = verifierInput.value;
  if (!username) {
    child.innerText = `Please enter a username`;
  } else if (!verifier) {
    child.innerText = `Please enter a verifier`;
  } else {
    generateOne(20, username, verifier)
    .then((password) => {
      child.innerText = password;
    });
  }
  parent.appendChild(child);
})

const removeChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}


/*let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };*/