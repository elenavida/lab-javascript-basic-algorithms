let hacker1 = "July";
console.log(`The driver's name is: ${hacker1}`);

// let hacker2 = prompt(`what's your name?`);
let hacker2 = "Elena";
console.log(`The navigator's name is: ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

const compare = hacker1.localeCompare(hacker2);

if (compare < 0) {
  console.log(`The driver's name goes first.`);
} else if (compare > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
