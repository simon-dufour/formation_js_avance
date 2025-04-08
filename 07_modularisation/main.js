import { capitalize, reverse } from './springTools.js';

const log = (msg) => document.getElementById('output').textContent += msg + "\n";

log(`capitalize("simon") = ${capitalize("simon")}`);
log(`reverse("toto") = ${reverse("toto")}`);
