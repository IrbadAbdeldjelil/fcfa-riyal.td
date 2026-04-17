'use static';
let fcfa = document.getElementById('fcfa');
let riyal = document.getElementById('riyal');

fcfa.addEventListener('input', ()=> riyal.value = fcfa.value / 5);
riyal.addEventListener('input', ()=> fcfa.value = riyal.value * 5);