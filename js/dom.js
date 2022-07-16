// pakeisti antraste h1 i Dynamic Heading

// issisaugom nnuoroda i h1 el
const h1El = document.getElementById('main-heading');
console.log('h1El ===', h1El);
h1El.textContent = 'Pagrindinis tekstas Dynamic Heading';


// nusitaikyti i elementa su ID " document.getElementById(" id = irasome id")"
// jei x.text.Content yra kaireje, tai rezultata irasome
// jei x.text.Content yra desineje, tai gauname HTML esancia reiksme
const textEl = document.getElementById('text');
const rez = textEl.textContent;
console.log('rez ==', rez);

const boxEl = document.getElementById('box');
// boxEl.textContent = '<h3> As esu dinamiskas elementas</h3>'; // ikelia texta
boxEl.innerHTML = '<h3> As esu dinamiskas <i> elementas </i></h3>'; // sugeneruoja html struktura (nesaugus budas)

