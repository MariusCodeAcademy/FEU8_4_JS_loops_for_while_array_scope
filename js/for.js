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
  console.log('i ===', i);
  printHtml(`Labas ${i}`);
}
