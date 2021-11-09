const btn = document.getElementById('log-in');
const email = document.getElementById('email');
const passWord = document.getElementById('password');

btn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && passWord.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
