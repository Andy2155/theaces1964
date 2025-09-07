
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userInput = document.getElementById('username').value.trim();
  const passInput = document.getElementById('password').value.trim();
  const pinInput  = document.getElementById('pin').value.trim();

  const USERNAME = 'li64aces';
  const PIN = '1964';

  // List of valid classmate names
  const validNames = [
    'Walter Anderson',
    'Lorna Enate',
    'Rolando Herce',
    'Rey Elizondo',
    'Ligaya Elizondo',
    'Jose Arambulo',
    'Aurora Arambulo',
    'Edgardo Canicon',
    'Gloria Canicon',
    'Manuel Ferrer",
    'Lucta Borja', 
    'Lilia Villegas',
    'Anusorn Kesasiri',
    'Lucito Verday', 
    'Elizabeth Verday',
    'Amador Alcasid',
    'Zenaida Alcasid', 
    'Emelita Alcasid',
    'Ernest Faunlagui',
    'Frisco Consolacion', 
    'Evangeline Consolacion',
    'Thelma Silvestre',
    'Florinda Alcaraz', 
    'Lilia Apolega',
    'Benny Egasani',
    'Aurea Castillo', 
    'Teresita Salgado',
    'Donato Senga',
    'Wilfredo Almoro',
    'Rosario Alibutod', 
    'Zenaida Canillas',
    'Norberto Caceres',
    'Rico Reyes',
    'Rosita Go', 
    'Norma Barachina',
    'Ofelia Nido',
    'Conrado Gonzales',
    'Crispin Dilag',
    'Ma Luz Evasco Fuentes', 
    'Enriqueta Senoran',
    'Rustico Alvarez',
    'Divinia Uson', 
    'William Villegas',
    'Cecilia Mendoza',
    'Ruth Villanueva',
    'Lolita Alforja',
    'Oscar Villanueva', 
    'Cesario Manaig',
    'Clemente Manaig',
    'Nestor Geronilla'
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
