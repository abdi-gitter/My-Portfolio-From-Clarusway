// age, smoking, drinking
const risk = (age, smoking, drinking) => age > 65 || smoking || drinking ? 'This guy has fun' : 'This guy has no fun.';

console.log(risk(70, false, false)); // true because age > 65
console.log(risk(60, true, false)); // true because smoking
console.log(risk(60, false, true)); // true because drinking

console.log(risk(60, false, false)); // false because none of the above