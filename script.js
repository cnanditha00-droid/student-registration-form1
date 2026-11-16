document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        document.getElementById("message").textContent =
            "Registration successful!";

        document.getElementById("message").style.color = "green";
    });
    