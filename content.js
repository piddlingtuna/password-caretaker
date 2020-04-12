chrome.runtime.sendMessage({
    type: "title",
    title: document.title
});

const submit = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");
if (submit) {
  submit.addEventListener("click", () => {
    chrome.runtime.sendMessage({
      type: "test",
      username: username.value,
      password: password.value
    });
  });
}

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "unsafe") {
    alert("Your password is NOT safe.");
  }
});
