'use strict';
console.log('aibe-scope.js file was loaded');

// globalus kintamasis - global scope
let userName = 'Mike';

function doSomething() {
  // localus doSomething kintamasis
  let surname = 'Boss';
  console.log('surname ===', surname);
  console.log('userName ===', userName);
}
doSomething();
// funkcijos isoreje localus kintamieji nepasiekiami
// console.log('surname outside fn ===', surname);

let rez;
if (5 > 10) {
  rez = 'penki yra daugiau uz 10';
} else {
  rez = 'penki nera daugiau uz 10';
}

console.log('rez ===', rez);

let result;

function sum(a, b) {
  // funkcijos viduje pakeiciam globalu kintamaji - nerekomenduojama
  result = a + b;
}
sum(5, 7);
console.log('result ===', result);

let clickNum = 0;
function countCliks() {
  clickNum++;
  console.log(clickNum);
}
