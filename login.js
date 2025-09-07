// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userInput = document.getElementById('username').value.trim();
  const passInput = document.getElementById('password').value.trim();
  const pinInput  = document.getElementById('pin').value.trim();

  const USERNAME = 'li64aces';
  const PASSWORD = 'Walter Anderson';  // Replace with actual first-and-last name
  const PIN      = '1964';

  if (userInput === USERNAME && passInput === PASSWORD && pinInput === PIN) {
    window.location.href = 'index.html';
  } else {
    alert('Invalid login. Please try again.');
    document.getElementById('pin').value = '';
  }
});
