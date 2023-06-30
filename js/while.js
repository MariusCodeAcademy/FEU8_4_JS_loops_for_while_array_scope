'use strict';
console.log('while.js file was loaded');

/* 
while (condition) {
  // code block to be executed
}
*/

let i = 1;

while (i <= 10) {
  console.log('sk', i);
  i++;
}

// do while
i = 1;
do {
  console.log(`sukam cikla ${i}`);
  i++;
} while (i <= 10);

console.log('i ===', i);

function makeCycle(howMany) {
  let i = 1;

  while (i <= howMany) {
    console.log('makeCycle sk', i);
    i++;
  }
}
makeCycle(5);
console.log('====================');
makeCycle(10);
console.log('====================');
makeCycle(100);
