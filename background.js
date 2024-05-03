chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
    if (message.action === "scrapedData") {
      try {
            const { name, location, description } = message.data;
            
            const contactData = {
                first_name: name || "NA",
                last_name: name || "NA",
                email: "john.doe@example.com",
                phone: "1234567890",
                address: location || "N/A",
                description: description || "N/A",
            };

            // Make a POST request to the CRM endpoint with the contact data using Fetch API
            const response = await fetch('https://backendcrmnurenai.azurewebsites.net/contacts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            });
            

            if (!response.ok) {
                throw new Error('Error creating contact:', response.statusText);
            }

            const responseData = await response.json();
            console.log('Contact created successfully:', responseData);
        } catch (error) {
            console.error('Error creating contact:', error);
        }
        console.log(message.data);
    }
});
