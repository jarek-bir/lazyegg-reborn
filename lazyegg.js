console.log("[LazyEgg] lazyegg.js loaded");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.startsWith('http')) {
    console.log("[LazyEgg] Tab fully loaded, injecting code into tab:", tab.url);

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["lazyegg-injected.js"]
    }).then(() => {
      console.log("[LazyEgg] Injected lazyegg-injected.js");
    }).catch(err => {
      console.error("[LazyEgg] Injection failed:", err);
    });
  }
});