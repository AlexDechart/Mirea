function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'example@example.com' && password === 'password123') {
      window.location.href = 'личный_кабинет.html';
    } else {
      alert('Неверная почта или пароль. Пожалуйста, попробуйте снова.');
    }
  }

  function register() {
    window.location.href = 'reg.html';
  }

  function register() {
    const email = document.getElementById('email').value;
    const createPassword = document.getElementById('create-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (createPassword !== confirmPassword) {
      alert('Пароли не совпадают. Пожалуйста, попробуйте снова.');
    } else {
      // Добавить логику для сохранения информации о пользователе и перехода на страницу личного кабинета
      window.location.href = 'личный_кабинет.html';
    }
  }

  function loginPage() {
    window.location.href = 'lk.html';
  }

  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('create-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if(password !== confirmPassword) {
      alert('Пароли не совпадают, попробуйте еще раз.');
      return;
    }
  
    fetch('http://localhost:2890/reg.html', {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(json => alert(json.success ? json.success : json.error))
    .catch(err => console.error('Error:', err));
  });