const script = [
    {
        name: "oi",
        idade: 18,
        living: false,
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        year: 2000,
    },
    {
        name: "ola",
        idade: 20,
        living: true,
        ranges: [[94, 1008], [192, 1158], [1113, 1520]],
        year: 8992
    },
    {
        name: "oop",
        idade: 30,
        living: false,
        ranges: [[94, 108], [1392, 1508], [153, 1152]],
        year: 2100,
    }
]

// High Order function =========
function caller(request, then) {
    if (!request) then();
}

repeat(3, n => {
    caller(n % 1 == 0, (i) => { 
        console.log(i, "even");
    });
});

// Pure function ===============
// This function mantain muttability. 
function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  }
  
  console.log(filter(SCRIPTS, script => script.living));
//==============================
// Map =========================
function map(array, transform) {
    let mapped = [];
    for(let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

idades = map(script, s => script.name);
// -> ["oi", "ola", "oop"]
//==============================
// Reduce =========================
function reduce(array, combine, start) {
    let current = start;
    for(let element of array) {
        current = combine(current, element);
    }
}
reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0);

[1, 2, 3, 4].reduce((a, b) => a + b, 0);
[1, 2, 3, 4].reduce((a, b) => a + b); // if the array contains at least one element
//==============================
function characterCount(script) {
    return script.ranges.reduce((count, [from ,to]) => {
        return count + (to - from);
    }, 0);
}

script.reduce((a, b) => {
    return characterCount(a) < characterCount(b)? b : a;
});

function average(array) {
    return array.reduce((a, b) => a + b ) / array.length;
}   

// The average of years for living and dead
// more easy read, reuseable and 
average(script.filter(s => s.living)).map(s => s.year);
average(script.filter(s => s.living)).map(s => s.year);

// less abstrac,  more speed up
let total = 0, count = 0;
for (let s of script) {
  if (s.living) {
    total += s.year;
    count += 1;
  }
}

const average = total / count;
//==============================
function characterScript(code) {
    for (let s of script) {
      if (s.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return s;
      }
    }
    return null;
  }
//  UTF-16 pairs of unicode 16-bits =================
// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉

//==============================
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
  // → [{name: false, count: 2}, {name: true, count: 3}]
  //==============================