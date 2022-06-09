/** 
 * @author Shelly
 * Question 6,7 and 8:
 * Answer: free var is count.value
 */

'use strict';

const count = {
  value: 0,
  counter_value: 1,
  make_adder: (x) => (count.counter_value = x),
  add: () => (count.value += count.counter_value),
  reset: () => {
    count.value = 0;
    count.make_adder(1);
    return true;
  },
};

console.log("counter = " + count.add());
console.log("counter = " + count.add());
count.make_adder(5);
console.log("counter = " + count.add());
console.log("counter = " + count.add());
console.log("reset = " + count.reset());
console.log("counter = " + count.add());