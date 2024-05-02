// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "scrapeProfile") {
      // Log or process the scraped data
      console.log(message.data);
      // Do something with the scraped data, like sending it to another service or displaying it in a popup
      // You can also send a response back to the content script if needed
      // sendResponse({ success: true });
  }
});
