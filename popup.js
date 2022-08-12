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

document.getElementById("github-login").addEventListener('click', async function() {
    var tokenInput = document.getElementById("github-personal-key").value;
    var username = document.getElementById("github-username").value;
    var repoName = document.getElementById("repo-name").value;
    var branchName = document.getElementById("new-branch-name").value;
    console.log(tokenInput);
    //chrome.storage.sync.set({"githubToken": tokenInput}, function() {
    console.log("saved");
    document.getElementById("github-personal-key").value = "Saved!";
    const response = await fetch('https://api.github.com/repos/'+username+'/'+repoName+'/git/refs', {
        method: 'POST',
        body: {
            owner: username,
            repo: repoName,
            ref: 'refs/heads/'+branchName,
            sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd'
        }, 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson)
    //});
})