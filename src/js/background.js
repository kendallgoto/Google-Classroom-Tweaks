chrome.runtime.onInstalled.addListener(function (object) {
	if(object.reason === 'install') {
	  if (chrome.runtime.openOptionsPage) {
	    chrome.runtime.openOptionsPage();
	  } else {
	    window.open(chrome.runtime.getURL('options.html'));
	  }
	}
});
var uid = 0;
chrome.storage.local.get({
  uid: ''
}, function(items) {
  uid = items.uid;
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { redirectUrl: "https://classroom.google.com/u/"+uid+"/h" };
    }, {
        urls: ["https://classroom.google.com/u/0/*"],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    }, ["blocking"]
);
