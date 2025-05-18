document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const infoText = document.getElementById('info-text');
  const forgotLink = document.getElementById('forgot-password');

  loginBtn.addEventListener('click', async () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      infoText.textContent = 'Kullanıcı adı ve şifre gerekli.';
      return;
    }

    try {
      const response = await fetch(`${CONFIG.API_URL}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
      const result = await response.json();

      if (result.success) {
        localStorage.setItem('session', 'yes');
        localStorage.setItem('userType', result.userType); // admin türü
        window.location.href = '../html/foundation.html';
      } else {
        infoText.textContent = 'Kullanıcı adı veya şifre hatalı.';
      }
    } catch (error) {
      infoText.textContent = 'Sunucuya bağlanılamadı.';
      console.error('Login error:', error);
    }
  });

  forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('info-text').textContent = 'Lütfen 05316150319 numarası ile iletişime geçin.';
  });
});
