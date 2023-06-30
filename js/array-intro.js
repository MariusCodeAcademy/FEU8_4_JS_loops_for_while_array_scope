'use strict';
console.log('array-intro.js file was loaded');
//          01234
let str1 = 'labas';

console.log(`${str1.charAt(2)}${str1.charAt(0)}`);
console.log(str1.charAt(0));

//  idx      0    1    2   3   4      5
let arr1 = ['l', 'a', 'b', 5, true, null];
console.log('arr1 ===', arr1);
// raide a yra index 1
console.log(arr1[1]);
console.log(arr1[3]);

arr1[5] = 17;
console.log('arr1 po ===', arr1);

let numsArr = [5, 12, 'blue', 7];
console.log('numsArr ===', numsArr);
console.log('numsArr.length ===', numsArr.length);
// console.log(numsArr[0]);
// console.log(numsArr[1]);
// console.log(numsArr[2]);
// console.log(numsArr[3]);
// console.log(numsArr[4]);

// sukurti ciklas kuris eina nuo 0 iki 4 imtinai
// debugger;
// tokiu principu galima prasukti cikla per bet kokio ilgio masyva
for (let i = 0; i < numsArr.length; i++) {
  // console.log('i ===', i);
  let elementas = numsArr[i];
  console.log(elementas);
}

for (let i = 0; i < numsArr.length; i++) {
  let elementas = numsArr[i];
  if (typeof elementas === 'string') {
    console.log('sis elementas yra string tipo ===', elementas);
  }
}
