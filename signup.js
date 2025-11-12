// signup.js — fully working version

// Wait for the form to be submitted
document.querySelector("#signup-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent page refresh

  // Get values from input fields
  const name = document.querySelector("#signup-name").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  // Basic validation before sending to backend
  if (!name || !email || !password) {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  // Optional: basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  try {
    // Send data to backend
    console.log("Sending signup request...", { name, email, password });

    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    console.log("Response status:", res.status);

    // Parse backend response
    const data = await res.json();
    console.log("Response data:", data);

    // Show backend message
    alert(data.message);

    // Redirect on success
    if (res.status === 200) {
      console.log("✅ Account created! Redirecting...");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  } catch (err) {
    console.error("Signup error:", err);
    alert("❌ Server error. Please try again later.\n\nError: " + err.message);
  }
});
