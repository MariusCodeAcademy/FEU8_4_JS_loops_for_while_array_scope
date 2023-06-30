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
  console.log('sk:', i);
}

// parasyti cikla kuri atspauzdins 'MikePukuotukas sk' sk turetu
// buti nuo 13 iki 78

for (let i = 13; i <= 78; i++) {
  console.log(`MikePukuotukas ${i}`);
}
