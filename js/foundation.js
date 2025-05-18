// foundation.js

import { API_URL } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  securityCheck();
  setupUserMenu();
  loadDashboard();
});

function securityCheck() {
  const loggedIn = localStorage.getItem('girisYapildi');
  if (loggedIn !== 'yes') {
    window.location.href = '../html/login.html';
  }
}

function setupUserMenu() {
  const userPhoto = document.getElementById('user-photo');
  const userDropdown = document.getElementById('user-dropdown');
  const changePasswordBtn = document.getElementById('change-password-btn');
  const logoutBtn = document.getElementById('logout-btn');

  userPhoto.addEventListener('click', () => {
    userDropdown.classList.toggle('hidden');
  });

  changePasswordBtn.addEventListener('click', () => {
    loadChangePasswordView();
    userDropdown.classList.add('hidden');
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('girisYapildi');
    window.location.href = '../html/login.html';
  });

  // Sayfa dışında tıklanırsa menüyü kapat
  document.addEventListener('click', (e) => {
    if (!userDropdown.contains(e.target) && e.target !== userPhoto) {
      userDropdown.classList.add('hidden');
    }
  });
}

async function loadDashboard() {
  // Basit dashboard placeholder içeriği
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="dashboard">
      <h2>Ana Sayfa</h2>
      <p>Burada Rezervasyonlar, Araçlar ve İstatistikler listelenecek.</p>
    </section>
  `;
}

function loadChangePasswordView() {
  // Değiştir şifre ekranını load etmek için SPA mantığı
  fetch('../html/password.html')
    .then((response) => response.text())
    .then((html) => {
      document.getElementById('app').innerHTML = html;
      import('../js/password.js').then((module) => {
        module.initPasswordPage();
      });
    })
    .catch((error) => console.error('Şifre sayfası yüklenirken hata:', error));
}
