// /js/login.js
document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('gas-frame');
  iframe.src = GAS_IFRAME_URL;

  document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      document.getElementById('info-text').textContent = 'Kullanıcı adı ve şifre zorunludur.';
      return;
    }

    const payload = {
      action: 'login',
      username,
      password
    };

    // iframe'e veri gönderiyoruz
    iframe.contentWindow.postMessage(payload, '*');
  });

  // iframe'den cevap geldiğinde
  window.addEventListener('message', (event) => {
    if (!event.origin.includes('script.google.com')) return;

    const response = event.data;
    if (response.status === 'success') {
      // Başarılı giriş
      window.location.href = './foundation.html';
    } else {
      document.getElementById('info-text').textContent = 'Giriş başarısız!';
    }
  });
});
