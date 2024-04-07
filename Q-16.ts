//Q-16

let guests: string[] = ["Tabish", "Hani", "Anwari"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Abu Abdullah");
guests.splice(guests.length / 2, 0, "Abu Tabassum");
guests.push("Abu Pakeeza");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
