const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// Exercice 1
(function() {
  console.log("Hello from IIFE");
})();

// Exercice 2
function init() {
  console.log("Initializing");
  init = function() {
    console.log("Already initialized");
  }
}

init();
init();

// Exercice 3
function sum() {
  let total = 0;
  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3));

// Exercice 4
(function(name) {
  console.log("Hello, " + name);
})("Simon");

// Exercice 5
function once() {
  console.log("Will be destroyed");
  once = function() {};
}

once();
once();

// Exercice 6
function add(a) {
  return function(b) {
    return sum(a, b);
  }
}

console.log(add(1)(2));
