chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "save" && message.jsFiles) {
    console.log("[LazyEgg Captain] Received JS files:", message.jsFiles);
    chrome.storage.local.set({ jsFiles: message.jsFiles });
  }
});