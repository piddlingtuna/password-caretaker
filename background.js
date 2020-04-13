const passwordSafe = require(`./passwordSafe.js`);

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        css: ["input[type='password']"]
      })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === `title`) {
    chrome.storage.sync.set({
      title: request.title.split(` `)
    });
  } else if (request.type === `test`) {
    passwordSafe(request.password, request.username, request.title.split(` `))
    .then((safe) => {
      if (!safe) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {type: `unsafe`})
        });
      }
    })
  }
});
