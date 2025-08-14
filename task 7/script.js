// URL for the public API we'll be using
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Select the HTML element where we'll display the data
const userDataContainer = document.getElementById('user-data');

// Use the Fetch API to get data from the API endpoint
fetch(apiUrl)
    .then(response => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(users => {
        // Loop through each user in the array
        users.forEach(user => {
            // Create a new div element for each user
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            // Set the inner HTML of the div with the user's info
            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            // Append the new user card to the container
            userDataContainer.appendChild(userCard);
        });
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch process
        console.error('There has been a problem with your fetch operation:', error);
        userDataContainer.innerHTML = '<p>Failed to load user data. Please try again later.</p>';
    });