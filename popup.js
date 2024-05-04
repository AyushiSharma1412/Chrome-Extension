document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scrapeButton').addEventListener('click', function() {
      // Perform actions when the button is clicked
      console.log('Scraping data...');

      // Send message to content script to start scraping
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "startScraping"}, function(response) {
              // Handle response if needed
          });
      });
  });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message action is "scrapedData"
  if (message.action === "scrapeProfile") {
      // Extract data from the message
      const { name, organization, university, description } = message.data;

      // Update the popup HTML with the scraped data
      document.getElementById("name").textContent = "Name: " + (message.data.name || "Name not found");
      document.getElementById("description").textContent = "Description: " + (message.data.description || "Description not found");
      document.getElementById("location").textContent = "Location: " + (message.data.location || "Location not found");
  }
});
