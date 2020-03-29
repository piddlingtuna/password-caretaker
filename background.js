chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('The color is green.');
      });
      chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                css: ["input[type='password']"]
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
