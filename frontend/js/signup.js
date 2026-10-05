const form = document.getElementById("signupForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
        "http://127.0.0.1:8000/auth/signup",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }
    );

    const data = await response.json();

    document.getElementById("message").innerText =
        data.message || data.detail;
});