let hacker1 = "July";
console.log(`The driver's name is: ${hacker1}`);
let hacker2 = prompt(`what's your name?`);
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
