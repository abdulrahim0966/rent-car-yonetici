// js/login.js
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("auth-iframe");
  iframe.src = CONFIG.IFRAME_URL;

  document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) return;

    const payload = {
      action: "login",
      username,
      password,
    };

    iframe.contentWindow.postMessage(payload, CONFIG.IFRAME_URL);
  });

  window.addEventListener("message", (event) => {
    if (!event.origin.includes("script.googleusercontent.com")) return;

    const data = event.data;
    if (data.status === "success") {
      sessionStorage.setItem("username", data.username);
      sessionStorage.setItem("role", data.role);
      window.location.href = "foundation.html";
    } else {
      document.getElementById("info-text").textContent = "Giriş başarısız!";
    }
  });
});
