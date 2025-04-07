const log = (msg) => document.getElementById('output').textContent += msg + "\n";

function applyTwice(func, value) {
    return func(func(value));
}

const addOne = x => x + 1;
const subOne = x => x - 1;

log(applyTwice(addOne, 0));
log(applyTwice(subOne, 1));


function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter());
