// Q-15

let guests: string[] = ["Tabish", "Hani", "Anwari"];

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

let unableToAttend = "Tabish";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Abu Abdullah";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
