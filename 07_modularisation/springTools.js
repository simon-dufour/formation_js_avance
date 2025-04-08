function capitalize(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        i == 0 ? result = str[i].toUpperCase() : result += str[i];
    }
    return result;
}

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

export { capitalize, reverse }
