const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// Exercice 1: Objet littéral
const car = {
  model: "Toyota",
  drive() {
    return `Driving a ${this.model}`;
  }
};
log(car.drive());

// Exercice 2: Prototype
function Book(title) {
  this.title = title;
}

Book.prototype.read = function() {
  return `Reading "${this.title}"`;
};

const book = new Book("My Book");
log(book.read());

// Exercice 3: Héritage
class Vehicle {
    constructor() {}
    start() {
        return "Démarrage...";
    }
}

class Car extends Vehicle {
    honk() {
        return "Klaxonne !";
    }
}

const voiture = new Car();
log(voiture.start()); // héritée
log(voiture.honk());  // propre à Car

// Exercice 4: Propriétés privées
class Safe {
  #code;

  constructor(content) {
    this.#code = content;
  }

  unlock() {
    return this.#code;
  }
}

const code = new Safe(1234);
log("Code : " + code.unlock());

