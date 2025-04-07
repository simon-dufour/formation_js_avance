const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// Exercice 1
function createLogger(prefix) {
    return function(msg) {
        return prefix + " " + msg;
    }
}

const logInfo = createLogger("[INFO]");
console.log(logInfo("Connexion établie")); // Résultat attendu : "[INFO] Connexion établie"

// Exercice 2
function createMultiplier(n) {
    return function(x) {
        return n * x;
    }
}

const triple = createMultiplier(3);
console.log(triple(4)); // Résultat attendu : 12

