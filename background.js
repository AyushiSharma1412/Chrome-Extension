chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
    if (message.action === "scrapeProfile") {
        try {
            const { name, location, description, gmailname, email } = message.data;

            const contactData = {
                first_name: name || gmailname||  "NA",
                last_name: name || gmailname|| "NA",
                email: email || "john.doe@example.com", // Use the scraped email if available, otherwise use a default value
                phone: "1234567890",
                address: location || "N/A",
                description: description || "N/A",
                createdBy: 1
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
                const errorResponse = await response.json();
                throw new Error('Error creating contact: ' + JSON.stringify(errorResponse));
            }

            const responseData = await response.json();
            console.log('Contact created successfully:', responseData);
        } catch (error) {
            console.error('Error creating contact:', error);
        }
        console.log(message.data);
    }
});
