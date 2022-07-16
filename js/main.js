console.log('Laba, sekmingo darbo');
// let sum = 0;
// debugger;
// for(let i=0; i<6; i++){
//     sum += i;
//     console.log(`sis ciklas yra ${i} Bendra suma = ${sum}`)
// }
// console.log(`bendra suma po visko =${sum}`);

console.group('continue');
for(let i=10; i<=20; i++ ){
    if(i === 15){
        continue
    }
    
    console.log(`skaicius ${i}`);
}
console.groupEnd();

//  for cikliukas su break simmple

for (let i=0; i<10; i++){
    if(i === 3){break;}
    text
}