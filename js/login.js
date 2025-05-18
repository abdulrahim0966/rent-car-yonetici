document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const infoText = document.getElementById("info-text");

  loginBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      infoText.textContent = "Lütfen tüm alanları doldurun.";
      return;
    }

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?username=${username}&password=${password}`);
      const result = await response.json();

      if (result.success === "yes") {
        localStorage.setItem("login", "yes");
        localStorage.setItem("currentUser", username);
        window.location.href = "../html/foundation.html";
      } else {
        infoText.textContent = "Kullanıcı adı veya şifre hatalı.";
      }
    } catch (err) {
      console.error("Login error:", err);
      infoText.textContent = "Sunucuya bağlanılamadı.";
    }
  });

  document.getElementById("forgot-password").addEventListener("click", () => {
    infoText.textContent = "Şifrenizi unuttuysanız 05316150319 numarasıyla iletişime geçin.";
  });
});

