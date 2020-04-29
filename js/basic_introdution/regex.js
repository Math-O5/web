// check if abc is in the string
let str = "ajdjjabcjs"
let outraStr = "anbnc"

console.log(/abc/.test(str))
console.log(/abc/.test(outraStr))

// Caracters specials: find if the number is in the sum
let sum = "eighteen+fiveteen"
let caracter = /eighteen\+/

console.log(caracter.test(sum))

// Sets: say  if string contains a number
let rg_num = /[0123456789]/
console.log(rg_num("Born in 1999"))

// Sets and Range: check if there's a number
let range = /[0-9]/
console.log(range.test("A said it's fiveteen o clock, don't 50"))

// Table, from Eloquent Javascript
// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline


// MATCH if date is in format dd-mm-aaaa hh:mm
let dateTime = /\d\d-\d\d-\d\d\d\d\s\d\d:\d\d/
console.log(dateTime.test("28-11-1999 18:33"))

// No Set
let noBinary = /[^01]/
console.log(noBinary.test("0101010")) //false
console.log(noBinary.test("01010102")) //true

// Reapeat more than once
let rp = /\d+/
console.log(rp.test("123")) // true

// can no match too
let rp1 = /\d*/
console.log(rp1.test("'")) //true

//optional charater
let neighbor = /neighbou?r/
console.log(neighbor.test("neighbour")) //true
console.log(neighbor.test("neighbor")) //true

//frequency of time a character appear {from, to} or {howMuch} or infinity {from, ,}
let freq = /\d{1, 2}-\d{1, 2}-\d{4} \d{1, 2}:\d{2}/
console.log(freq.test("1-30-2003 8:45")) //true

// Groups, match two patterns and do it work for insensitive case.
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); // → true

// Return the match
let match = /\d+/.exec("one two 30")
console.log(match) // ["30"]
console.log(match.index) // 8

console.log(/bad(ly)?/.exec("bad")) // ["bad", undefined]
console.log(/(\d)+/.exec("123")) // ["123", "3"]

