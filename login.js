document.querySelector("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (!email || !password) {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  try {
    console.log("Sending login request...", { email, password });

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("Response status:", res.status);

    const data = await res.json();
    console.log("Response data:", data);

    // Redirect on any 2xx success response. Support optional ?next=... query param
    if (res.ok) {
      console.log("✅ Login successful! Preparing redirect...");

      // Persist minimal user profile so index.html doesn't bounce back to login
      try {
        const safeUser = {
          name: (data && data.user && data.user.name) || "User",
          email: (data && data.user && data.user.email) || email,
        };
        localStorage.setItem("userProfile", JSON.stringify(safeUser));
      } catch (_) {
        // ignore storage failures
      }

      // If the page was opened with ?next=somepage, prefer that
      try {
        const params = new URLSearchParams(window.location.search);
        const next = params.get("next") || "index.html";

        // Resolve relative targets against current origin to avoid path issues
        const resolved = new URL(next, window.location.origin).toString();

        // Robust multi-attempt redirect sequence
        const tryRedirect = (url) => {
          try {
            // 1) Primary
            window.location.href = url;
          } catch (_) {}

          // 2) Fallback shortly after
          setTimeout(() => {
            try {
              window.location.assign(url);
            } catch (_) {}
          }, 50);

          // 3) Replace history as last resort
          setTimeout(() => {
            try {
              window.location.replace(url);
            } catch (_) {}
          }, 120);

          // 4) Anchor click hack
          setTimeout(() => {
            try {
              const a = document.createElement("a");
              a.href = url;
              a.style.display = "none";
              document.body.appendChild(a);
              a.click();
              a.remove();
            } catch (_) {}
          }, 200);
        };

        // Defer to next tick to avoid any synchronous blockers
        setTimeout(() => tryRedirect(resolved), 0);
      } catch (err) {
        console.error("Redirect error, falling back to index.html:", err);
        const fallback = new URL("index.html", window.location.origin).toString();
        try {
          window.location.href = fallback;
        } catch (_) {
          window.location.assign(fallback);
        }
      }
    } else {
      console.log("❌ Login failed with status:", res.status, data);
      alert(data && data.message ? data.message : "Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("❌ Server error. Please try again later.\n\nError: " + err.message);
  }
});
