chrome.tabs.onActivated.addListener((tab) => {

  console.log(tab)

  chrome.tabs.get(tab.tabId, (CurrentTabData) => {
console.log(CurrentTabData , "=====currenttabdata")
      if (CurrentTabData.url || CurrentTabData.pendingUrl === "https://test.digg.ai/insights/cmo/dashboard") {

          // chrome.scripting.executeScript({
          //     target: { tabId: CurrentTabData.id },
          //     files: ['context.js']
          // });
         

          setTimeout(() => {
              chrome.tabs.sendMessage(
                  tab.tabId,
                  "hellllo i m background page",
                  (response) => {
                      console.log(response)
                              }
              )
          }, 1000)
          setTimeout(() => {
            chrome.storage.sync.get(["localStorage"], function(items) {
              // message('Settings retrieved', items);
              console.log(JSON.parse(items),"===================items")
            });
          }, 1000);
      }

  })

})
