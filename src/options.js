function save_options() {
  var uid = document.getElementById('uid').value;
  chrome.storage.local.set({
    uid: uid,
  }, function() {
		chrome.extension.getBackgroundPage().window.location.reload()
		window.close();
  });
}
function restore_options() {
  chrome.storage.local.get({
    uid: ''
  }, function(items) {
	 	document.getElementById('uid').value = items.uid;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
