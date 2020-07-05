// Flattening
// Use the reduce method in combination with the concat method to “flatten” 
// an array of arrays into a single array that has all the elements of the original arrays.

const arrays = [[1, 2, 3], [4, 5], [6]];

// My code here.
const flat_array = arrays.reduce((a, b) => a.concat(b) );
// end my code
console.log(flat_array);
// → [1, 2, 3, 4, 5, 6]

// Your own loop
// Code the for loop, which take a value, a test function, an update function and a body function.

// My code here.
function loop(value, test, update, body) {
    while(test(value) === true) {
        body(value);
        value = update(value);
    }  
    return false;
}
// end my code
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Everything
// Imprelement the method every of array 
function every(array, test) {
    // My code here.
    for(let elem of array) {
        if(!test(elem))
            return false;
    }
    return true;
    // end my code
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

// Propose in: https://eloquentjavascript.net/05_higher_order.html