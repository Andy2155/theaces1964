
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userInput = document.getElementById('username').value.trim();
  const passInput = document.getElementById('password').value.trim().toLowerCase();
  const pinInput  = document.getElementById('pin').value.trim();

  const USERNAME = 'li64aces';
  const PIN = '1964';

  // List of valid classmate names
  const validNames = [
  'walter anderson',
  'lorna enate',
  'rolando herce',
  'rey elizondo',
  'ligaya elizondo',
  'jose arambulo',
  'aurora arambulo',
  'edgardo canicon',
  'gloria canicon',
  'manuel ferrer',
  'lucta borja',
  'lilia villegas',
  'anusorn kesasiri',
  'lucito verday',
  'elizabeth verday',
  'amador alcasid',
  'zenaida alcasid',
  'emelita alcasid',
  'ernest faunlagui',
  'frisco consolacion',
  'evangeline consolacion',
  'thelma silvestre',
  'florinda alcaraz',
  'lilia apolega',
  'benny egasani',
  'aurea castillo',
  'teresita salgado',
  'donato senga',
  'wilfredo almoro',
  'rosario alibutod',
  'zenaida canillas',
  'norberto caceres',
  'rico reyes',
  'rosita go',
  'norma barachina',
  'ofelia nido',
  'conrado gonzales',
  'crispin dilag',
  'ma luz evasco fuentes',
  'enriqueta senoran',
  'rustico alvarez',
  'divinia uson',
  'william villegas',
  'cecilia mendoza',
  'ruth villanueva',
  'lolita alforja',
  'oscar villanueva',
  'cesario manaig',
  'clemente manaig',
  'nestor geronilla'
    // Add more names as needed
  ];

  if (
    userInput === USERNAME &&
    validNames.includes(passInput) &&
    pinInput === PIN
  ) {
    window.location.href = 'index.html';
  } else {
    alert('Invalid login. Please try again.');
    document.getElementById('pin').value = '';
  }
});
