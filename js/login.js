document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("gas-frame");
  iframe.src = CONFIG.IFRAME_URL;

  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      showMessage("Lütfen tüm alanları doldurun.");
      return;
    }

    const payload = {
      action: "login",
      username,
      password,
    };

    iframe.contentWindow.postMessage(payload, CONFIG.IFRAME_URL);
  });

  window.addEventListener("message", (event) => {
    if (!event.origin.includes("googleusercontent.com")) return;

    const { status, message, userType } = event.data;

    if (status === "success") {
      localStorage.setItem("userType", userType);
      window.location.href = "foundation.html";
    } else {
      showMessage(message || "Giriş başarısız.");
    }
  });

  function showMessage(msg) {
    document.getElementById("info-text").textContent = msg;
  }
});
