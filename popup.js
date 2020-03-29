const usernameInput = document.getElementById('username-input');
usernameInput.addEventListener('input', (event) => {
  if (usernameInput.value) {
    usernameInput.classList.add('is-success');
    usernameInput.classList.remove('is-failure');
  } else {
    usernameInput.classList.add('is-failure');
    usernameInput.classList.remove('is-success');
  }
});

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