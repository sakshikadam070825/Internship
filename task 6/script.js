document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    // Name validation (only letters and spaces allowed)
    let namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        errorMessage.textContent = "Name can only contain letters and spaces.";
        return;
    }

    // Empty field check
    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // Email format check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});
