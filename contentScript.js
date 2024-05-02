  
// Function to scrape data from the webpage
function scrapeData() {
  const nameElement = document.querySelector('h1.text-heading-xlarge inline t-24 v-align-middle break-words');
  const organizationElement = document.querySelector('div.inline-show-more-text--is-collapsed[tabindex="-1"]');
  const universityElement = document.querySelector('div.inline-show-more-text--is-collapsed-with-line-clamp[tabindex="-1"]');

  const name = nameElement ? nameElement.textContent.trim() : null;
  const organization = organizationElement ? organizationElement.textContent.trim() : null;
  const university = universityElement ? universityElement.textContent.trim() : null;

  return { name, organization, university };
}

// Send scraped data back to the background script
chrome.runtime.sendMessage({ action: "scrapeProfile", data: scrapeData() });
