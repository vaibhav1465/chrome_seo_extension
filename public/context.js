chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)
console.log("hellllo i m context pageeeeee")
    // sendResponse(localStorage.getItem("loginData"))
    sendResponse("thankyou")
    chrome.storage.sync.set({'localStorage': localStorage.getItem("userData")}, function() {
        console.log('Settings saved');
      });
})