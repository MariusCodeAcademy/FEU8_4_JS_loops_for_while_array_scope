'use strict';
console.log('for.js file was loaded');

/*

for (begin; condition; step) {​
  // ... loop body ...​
}​
*/

// atspausdinti nuo 0 iki 9 sk
// debugger;
for (let i = 0; i < 10; i++) {
  // console.log('sk:', i);
}

// parasyti cikla kuri atspauzdins 'MikePukuotukas sk' sk turetu
// buti nuo 13 iki 78

for (let i = 13; i <= 78; i++) {
  // console.log(`MikePukuotukas ${i}`);
}

// atspasdinti skaicius nuo 0 iki 50, kas antra skaiciu
for (let i = 0; i <= 50; i += 2) {
  // console.log('i ===', i);
}

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    // console.log('i ===', i);
  }
  // i++;
}

// atspausinti su for ciklu skaicius nuo 87 iki 16
for (let i = 87; i >= 16; i--) {
  // console.log('i ===', i);
  printHtml(`Labas ${i}`);
}

// sukurti cikla kad atspausdinti sk nuo 55 iki 0
for (let idx = 55; idx >= 0; idx--) {
  // console.log('idx ===', idx);
}
//  sukurti cikla kad atspausdinti sk nuo 18 iki 99
for (let l = 18; l < 100; l++) {
  // console.log('l ===', l);
}
//  sukurti cikla kad atspausdinti sk nuo 18 iki 99 kas 6
for (let l = 18; l < 100; l = l + 6) {
  console.log('l ===', l);
}

let x = 5;
x = x + 10;
console.log('x ===', x);
