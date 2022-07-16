console.log('savarankiska uzduotele');
/* 
 <article>
      <h2 id="arti-title">Main title</h2>
      <p id="arti-date">date</p>
      <p id="arti-text">lorem ipsum dolor</p>
    </article>

*/
// nusitaikymo tagai
const h2El = document.getElementById('arti-title');
h2El.innerHTML = '<h1> main title Laura</h1>';

const pElData = document.getElementById('arti-date');
pElData.textContent = 'Penktadienis';
console.log(` pakeiteme teksta is "Data" i ${pElData}`);

const pElText = document.getElementById('arti-text');
pElText.textContent += ' == sugeneruotas textas';
console.log(pElText);