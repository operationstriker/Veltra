chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "rewriteText",
    title: "Rewrite with AI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "rewriteText") {
    chrome.storage.local.set({ selectedText: info.selectionText });
    chrome.action.openPopup(); // Open the popup when user clicks
  }
});