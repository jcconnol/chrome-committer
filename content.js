chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        chrome.storage.sync.get([
            "githubPersonalKey"
        ], async function(result) {
            

            chrome.runtime.sendMessage({ 
                action: "sendStuff"
            });
        })
    }
);
