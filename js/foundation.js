// js/foundation.js
document.addEventListener("DOMContentLoaded", () => {
  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");

  if (!username || !role) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("user-name").textContent = username;
  document.getElementById("user-role").textContent = role;

  document.getElementById("logout-btn").addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "login.html";
  });
});
