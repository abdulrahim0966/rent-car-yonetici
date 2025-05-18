import { API_URL } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('password-form');
  const messageEl = document.getElementById('message');
  const backBtn = document.getElementById('back-button');

  backBtn.addEventListener('click', () => {
    // E2 ana karkas sayfaya geri dön
    window.location.href = '/html/foundation.html';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form['username'].value.trim();
    const oldPassword = form['old-password'].value.trim();
    const newPassword = form['new-password'].value.trim();

    if (!username || !oldPassword || !newPassword) {
      messageEl.textContent = 'Lütfen tüm alanları doldurun.';
      return;
    }

    messageEl.textContent = 'Şifre güncelleniyor...';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updatePassword',
          username,
          oldPassword,
          newPassword
        })
      });

      const data = await response.json();

      if (data.success) {
        messageEl.textContent = 'Şifre başarıyla güncellendi.';
        form.reset();
      } else {
        messageEl.textContent = data.message || 'Şifre güncellenirken hata oluştu.';
      }
    } catch (error) {
      console.error(error);
      messageEl.textContent = 'Sunucuya bağlanırken hata oluştu.';
    }
  });
});
