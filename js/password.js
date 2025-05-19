document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.createElement("iframe");
  iframe.src = CONFIG.IFRAME_URL;
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const changePasswordBtn = document.getElementById("change-password-btn");
  const statusText = document.getElementById("password-status");

  changePasswordBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();

    if (!username || !newPassword) {
      statusText.textContent = "Lütfen tüm alanları doldurun.";
      return;
    }

    const payload = {
      action: "changePassword",
      username,
      newPassword,
    };

    iframe.contentWindow.postMessage(payload, CONFIG.IFRAME_URL);
  });

  window.addEventListener("message", (event) => {
    if (!event.origin.includes("script.googleusercontent.com")) return;

    const data = event.data;
    if (data.status === "success") {
      statusText.textContent = "Şifre başarıyla güncellendi.";
      statusText.style.color = "limegreen";
    } else {
      statusText.textContent = data.message || "Bir hata oluştu.";
      statusText.style.color = "crimson";
    }
  });
});
