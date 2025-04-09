const form = document.getElementById("form");
const clear = document.getElementById("clear");

const USER_KEY = "user";

function getUser() {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
    if (user) {
        document.getElementById("nameError").textContent = `Username: ${user.name}`;
        document.getElementById("ageError").textContent = `Age: ${user.age}`;
    }
}

function saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    getUser();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Nettoyage
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    const name = document.getElementById("name");
    const age = document.getElementById("age");

    if (name.value || age.value) {
        const user = {
            name: name.value,
            age: age.value
        }
        saveUser(user);
        form.reset();
    }
});

clear.addEventListener("click", function (event) {
    localStorage.clear;
});

getUser();
