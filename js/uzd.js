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
pElData.textContent = new Date().toLocaleString('lt-LT', {dateStyle: 'long'}); // 'Penktadienis';
console.log(` pakeiteme teksta is "Data" i ${pElData}`);

const pElText = document.getElementById('arti-text');
pElText.textContent = pElText.textContent + '  ==  sugeneruotas textas';
// pElText.textContent += ' == sugeneruotas textas';
console.log(pElText); 

// li paskutini elementa pakeisti i violetini
//  galima nusitaikyti tiesiogiai : id="ul-color" arba per children arba query selektoriumi
// const blueEl = document.getElementById('ul-color');
// blueEl.textContent = 'violet';

const colorsEl = document.getElementById('colors');
console.log(colorsEl);

// naujesnis budas su queri selektoriumi querySelector
const lastColorsLiEl = document.querySelector('#colors li:last-child');
lastColorsLiEl.textContent = 'violetine';
lastColorsLiEl.style.backgroundColor = 'violet';

// prideti prie spalvu dar viena li 
colorsEl.innerHTML += '<li> Brown </li>';
console.log(colorsEl.innerHTML);