document.addEventListener("DOMContentLoaded", () => {
  const changePasswordBtn = document.getElementById("change-password-btn");
  const statusText = document.getElementById("password-status");

  changePasswordBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();

    if (!username || !newPassword) {
      statusText.textContent = "Lütfen tüm alanları doldurun.";
      return;
    }

    try {
      const response = await fetch(CONFIG.scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "changePassword",
          username,
          newPassword,
        }),
      });

      const result = await response.json();

      if (result.success) {
        statusText.textContent = "Şifre başarıyla güncellendi.";
        statusText.style.color = "limegreen";
      } else {
        statusText.textContent = result.message || "Bir hata oluştu.";
        statusText.style.color = "crimson";
      }
    } catch (error) {
      console.error("Password change error:", error);
      statusText.textContent = "Sunucu hatası: Şifre değiştirilemedi.";
      statusText.style.color = "crimson";
    }
  });
});
