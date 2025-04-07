const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// Typage faible
log("5" + 1); // "51"
log("5" - 1); // 4

// Hoisting
log(x); // undefined
var x = 10;
