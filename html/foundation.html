document.addEventListener("DOMContentLoaded", async () => {
  const isLoggedIn = localStorage.getItem("login") === "yes";
  if (!isLoggedIn) {
    window.location.href = "../html/login.html";
    return;
  }

  const app = document.getElementById("app");
  app.innerHTML = `
    <header class="panel-header">
      <img src="../img/logo.png" alt="Rent Logo" class="logo small" />
      <h2>Yönetici Paneli</h2>
      <button id="logout-btn">Çıkış Yap</button>
    </header>

    <main class="panel-content">
      <p>Hoş geldiniz, <strong>${localStorage.getItem("currentUser")}</strong>!</p>
      <nav>
        <button data-page="dashboard">Anasayfa</button>
        <button data-page="password">Şifre Değiştir</button>
        <button data-page="reservations">Rezervasyonlar</button>
      </nav>
      <section id="page-content">
        <!-- SPA içerikleri buraya gelecek -->
      </section>
    </main>
  `;

  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../html/login.html";
  });

  document.querySelectorAll("button[data-page]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const page = btn.getAttribute("data-page");
      const res = await fetch(`../html/${page}.html`);
      const html = await res.text();
      document.getElementById("page-content").innerHTML = html;
    });
  });

  // Varsayılan sayfa
  const defaultPage = await fetch("../html/dashboard.html").then(r => r.text());
  document.getElementById("page-content").innerHTML = defaultPage;
});
