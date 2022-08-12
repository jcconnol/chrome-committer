document.addEventListener('DOMContentLoaded', function() {
    //TODO future improvement - save table string and set table to that text
    chrome.storage.sync.get([], async function(result) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            currentURL = tabs[0].url;
            
            if(result && currentURL == result.pageObject.url){
                
            }
        });
    });
});

chrome.runtime.onMessage.addListener(
    async function(request, sender) {
        
    }
);

document.getElementById("github-login").addEventListener.on('click', function() {
    console.log("clicked")
})