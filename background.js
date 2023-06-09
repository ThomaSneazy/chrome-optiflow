chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.startsWith('https://webflow.com/design/')) {
    console.log('Optiflow est activé sur Webflow !');
  }
});
