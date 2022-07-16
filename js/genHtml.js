// Const generavimas
const itemUlEl = document.getElementById('items');

/*
 <ul id="items">
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
*/
let liString = '';
for (let i = 0; i < 10; i++) {
    // console.log(` <li>item ${i} </li>`);
    liString += `<li>item ${i} </li>`;
    // itemUlEl.innerHTML += `<li>item ${i} </li>`; // variantas ne pats geriausias, nes ciklas nuskaitineja per nauja ir vis prideda.
}
console.log(liString);

itemUlEl.innerHTML = liString;

// boxEl.innerHTML = ` <ul> ${liString}</ul>`