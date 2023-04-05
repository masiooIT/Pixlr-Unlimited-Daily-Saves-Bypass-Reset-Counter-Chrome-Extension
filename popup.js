/***
 *
 * get dom title via chrome.tabs.sendMessage
 */
document.addEventListener('DOMContentLoaded', function(event) {
    let btn = document.getElementById('getTitle')
    btn.value="ha"
    btn.onclick=getTitle
});

function getTitle() {
  showTitle({title:"..."});
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'getTitle' },
        function (response) {
          showTitle(response);
        }
      );
    }
  );
}

function showTitle(response) {
    console.log(response)
    document.getElementById('title').innerHTML=response.title;
}
