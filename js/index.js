// Iteration 1: Names and Input
let hacker1 = "July";
console.log(`The driver's name is: ${hacker1}`);

// let hacker2 = prompt(`what's your name?`);
let hacker2 = "Elena";
console.log(`The navigator's name is: ${hacker2}`);

// Iteration 2: Conditionals
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

// Iteration 3: Loops
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

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada dui id lorem iaculis, quis auctor mi ultrices. Pellentesque facilisis, magna scelerisque commodo fermentum, quam elit posuere velit, vitae vehicula magna leo sit amet elit. Cras tincidunt facilisis dapibus. Duis sed blandit dui, non mollis nibh. Phasellus mollis erat nec ornare luctus. Nulla facilisi. Vivamus posuere tortor ac mi imperdiet, sit amet commodo ex volutpat. Aliquam semper iaculis velit at lacinia. Morbi fermentum condimentum erat ac hendrerit. Sed bibendum placerat egestas. Suspendisse maximus urna vitae mauris semper, vitae tincidunt sem maximus. Sed vel massa non nibh sodales iaculis. Nulla consectetur scelerisque orci id feugiat. Phasellus ornare odio sed nunc lacinia porttitor. Sed vel aliquam dolor.

Sed vel consequat libero. Aliquam bibendum varius hendrerit. Nulla condimentum eu diam a consectetur. Morbi ligula nulla, egestas non dictum non, gravida id eros. Nulla quis turpis feugiat, pellentesque nibh non, pellentesque neque. Maecenas ornare vestibulum velit vel viverra. Aenean sit amet semper leo, at ullamcorper tellus. Mauris posuere convallis ex, id convallis diam accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pulvinar lacus auctor imperdiet vulputate. Phasellus mattis, turpis at semper sodales, dolor est porta neque, ac pulvinar metus nulla eget lorem.

In tempor enim ut malesuada fermentum. Sed vitae ultricies libero. Nullam feugiat tempor porta. Nulla sed odio et ligula commodo tincidunt. Quisque hendrerit risus sed dui ullamcorper vestibulum. Nulla tempus posuere eros, ut aliquet elit. Sed venenatis arcu erat, ac dapibus ex blandit ullamcorper. In luctus dolor quis tortor consequat, eget porttitor eros dignissim. Nunc vestibulum ligula eu odio venenatis facilisis. Phasellus rutrum fringilla urna, eu ultricies massa tempus vitae.`;

console.log(paragraph.split(" ").length - 1);
console.log(paragraph.split(" et ").length - 1);
