/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billtotal = document.querySelector("#billTotalInput");
let tip = document.querySelector("#tipInput");
let npeople = document.querySelector("#numberOfPeople");
let totalperp = document.querySelector("#perPersonTotal");

// Get number of people from number of people div
let numPeople = Number(npeople.textContent);

// * Calculate the total bill per person *
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let numbill = Number(billtotal.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  // get the total tip amount
  let numtip = Number(tip.value);
  let tippercent = numtip / 100;
  let tipammount = numbill * tippercent;
  // calculate the total (tip amount + bill)
  let total = numbill + tipammount;

  // calculate the per person total (total divided by number of people)
  let personpertotal = total / numPeople;

  // update the perPersonTotal on DOM & show it to user
  totalperp.textContent = "$ " + Math.floor(personpertotal);
};

// * Splits the bill between more people *
const increasePeople = () => {
  // increment the amount of people
  numPeople += 1;
  // update the DOM with the new number of people
  npeople.textContent = numPeople;
  // calculate the bill based on the new number of people
  calculateBill();
};

// * Splits the bill between fewer people *
const decreasePeople = () => {
  // guard clause
  if (numPeople <= 1) {
    return;
  }
  numPeople -= 1;
  npeople.textContent = numPeople;
  calculateBill();

  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};
