// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.




let guest: string[] = ["Jennifer","Anum", "Aster", "Noman"];

console.log(guest);

let CanNotAttend: string = "Noman"
console.log(CanNotAttend + " "+ "can not make it for dinner");

let newGuest: string ="Munir";

guest.map((items) => console.log('Dear ${items}, you are coordinally invited to a dinner.'));

