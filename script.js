 const form = document.getElementById("loginForm");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        function validateEmail(email) {
            return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
        }

        form.addEventListener("input", () => {
            // Email validation
            if (!validateEmail(emailInput.value.trim())) {
                emailError.style.display = "block";
            } else {
                emailError.style.display = "none";
            }
            // Password validation
            if (passwordInput.value.trim().length < 6) {
                passwordError.style.display = "block";
            } else {
                passwordError.style.display = "none";
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            if (!validateEmail(emailInput.value.trim())) {
                emailError.style.display = "block";
                isValid = false;
            }
            if (passwordInput.value.trim().length < 6) {
                passwordError.style.display = "block";
                isValid = false;
            }

            if (isValid) {
                alert("Form submitted successfully!");
                form.reset();
            }
        });