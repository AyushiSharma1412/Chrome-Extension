// Function to scrape data from the webpage
function scrapeData() {
  const nameElement = document.querySelector('h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
  const organizationElement = document.querySelector('.org-name'); // Update selector for organization
  const universityElement = document.querySelector('.arUFViNOzyjqEnsPQfycEGOOXgXWpjaxsgUMmo'); // Selector for university
  const descriptionElement = document.querySelector('.text-body-medium');
  const locationElement = document.querySelector('.text-body-small.inline.t-black--light.break-words');

  const name = nameElement ? nameElement.textContent.trim() : null;
  const organization = organizationElement ? organizationElement.textContent.trim() : null;
  const university = universityElement ? universityElement.textContent.trim() : null;
  const description = descriptionElement ? descriptionElement.textContent.trim() : null;
  const location = locationElement ? locationElement.textContent.trim() : null; 

  return { name, organization, university, description, location };
}

// Send scraped data back to the background script
chrome.runtime.sendMessage({ action: "scrapeProfile", data: scrapeData() });
