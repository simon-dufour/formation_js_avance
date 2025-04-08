const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// Exercice 1
async function fetchPostTitle() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  let data = await response.json();
  log("Post 3 Title: " + data.title);
}
fetchPostTitle();

// Exercice 2
async function fetchPostTitleError() {
  try {
    let response = await fetch("https://rererejsonplaceholder.typicode.com/posts/3");
    let data = await response.json();
    log("Post 3 Title: " + data.title);
  } catch (err) {
    log("Erreur: " + err.message);
  }
}
fetchPostTitleError();

// Exercice 3
const wait = (ms) => new Promise(resolve => setTimeout(() => resolve("Fini !"), ms));
wait(2000).then(log);

// Exercice 4
async function delayedHello() {
  await setTimeout(() => log("Hello async"), 1000);
}
delayedHello();

// Exercice 5
async function verifierMotDePasse(motDePasse) {
  return new Promise(
    (resolve, reject) => motDePasse.length >= 8 ? resolve("Mot de passe accepté") :
      reject("Mot de passe trop court")
  );
}
verifierMotDePasse("123456").then(log).catch(log);
verifierMotDePasse("12345678").then(log).catch(log);

