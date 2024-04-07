//Q-18

let places: string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);