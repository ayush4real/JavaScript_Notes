"use strict";

// 5 falsy values: 0, '' , undefined, NaN, null

// let dolphinsAvg = (97 + 112 + 101) / 3
// let koalasAvg = (109 + 95 + 106) / 3
// console.log(koalasAvg, dolphinsAvg)
// if (dolphinsAvg >=100 && dolphinsAvg > koalasAvg) {
//     console.log("Dolphins Win!");
// } else if(koalasAvg >= 100 && dolphinsAvg < koalasAvg) {
//     console.log("Koalas Win!");
// }else if(dolphinsAvg >= 100 && koalasAvg >= 100 && dolphinsAvg === koalasAvg){
//     console.log("It's a Draw!");
// }else if(dolphinsAvg < 100 && koalasAvg < 100){
//     console.log("Neither team wins the trophy");
// }

// let bill = 40
// let tip
// console.log(`Your bill is - ${bill} and tip will be ${ tip = (bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill).toFixed(2)} and total bill is ${Number(bill) + Number(tip)}`);

// Functions
// function logger(){
//     console.log('Hey User!');
// }

// const logger = function(){
//     console.log("Hey User!");
// }

// logger()
// const Person = function(firstName, dob){
//     this.firstName = firstName;
//     this.dob = dob;
//     console.log(this);
// }

// const calcAverage = (score1, score2, score3) => {
//     const avg = (score1 + score2 +score3) / 3
//     return avg
// }

// const checkWinner = (dolphinsAvg, koalasAvg) => {
//     if(dolphinsAvg >= (2 * koalasAvg)){
//         console.log("Dolphins Win");
//     }else if((dolphinsAvg * 2) <= (koalasAvg)){
//         console.log("Koalas Win");
//     }else{
//         console.log("No team wins");
//     }
// }

// const dolphinsAvg = calcAverage(44, 23, 71)
// const koalasAvg = calcAverage(65, 54, 59)
// checkWinner(dolphinsAvg, koalasAvg)

// ARRAYS
// const arrBill = [22,295,176,440,37,105,10,1100,8,52]
// const tips = []

// const totalBill = []
// for(let i=0;i<arrBill.length;i++){
//     tips[i] = (arrBill[i] >=50 && arrBill[i] <= 300) ? 0.15* arrBill[i] : ((arrBill[i] >=0 && arrBill[i] <50) || (arrBill[i] > 300) ? 0.20 * arrBill[i] : 0)
// }

// console.log(tips);
// for(let i = 0; i < arrBill.length; i++){
//     totalBill[i] = arrBill[i] + tips[i]
// }
// console.log(totalBill);

// const str = 'Hello World'

// const rev = string => {
//     let stringRev = ''
//     const arr = string.split('')
//     console.log(arr);

//     for(let e of arr){
//         stringRev = e + stringRev
//         console.log(stringRev);
//     }
//     console.log(stringRev.split(''));
//     return stringRev
// }

// console.log((rev(str)));

// JAVASCRIPT BEHIND THE SCENES
// AST - abstract syntax tree (not related to DOM)
// - Scoping

// this and arguments are available only in regular functions
// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//      1
// const self = this
// const isMillenial = function(){
//     console.log(self);
//     console.log(self.year >= 1981 && self.year <= 1996);
//     // console.log(this.year >= 1981 && this.year <= 1996);
// }

//      2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//             // console.log(this.year >= 1981 && this.year <= 1996);
//         }
//         isMillenial()
//     },

//     greet: () => console.log(`Hey ${this.firstName}`)
// }

// jonas.greet()
// jonas.calcAge()

// arguments keyword - only for regular functions
// const addExpr = function(a, b){
//     console.log(arguments);

//     return a + b
// }
// console.log(addExpr(2, 5))

// let age = 30
// let oldAge = age
// age = 31
// console.log(age);
// console.log(oldAge);
// const me = {
//     name: 'Jonas',
//     age: 30,
// }

// const friend = me
// friend.age = 27
// console.log('Friend: ', friend);
// console.log('Me: ', me);

// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob']
// }

// assign creates a shallow copy and not a deep clone (only copies the properties in the first level, not other levels, ex: object inside object
// will not be copied )
// const jessicaCopy = Object.assign({}, jessica2)
// jessicaCopy.lastName = 'Davis'
// jessicaCopy.family.push('Tom')
// jessicaCopy.family.push('Jack')
// console.log(jessica2);
// console.log(jessicaCop-y);

// ***************************************** DATA STRUCTURES *************************************
const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const timings = {
  [weekdays[2]]: {
    open: 9,
    close: 10,
  },
  [weekdays[3]]: {
    open: 0,
    close: 12,
  },
  thu: {
    open: 8,
    close: 10,
  },
};
const restaurant = {
  food: ["Pie", "Sandwich", "Steak", "Hamburger"],
  main: ["Pizza", "Pasta", "Risotto"],
  order: function (index1, index2) {
    return [this.food[index1], this.main[index2]];
  },
  // new way of declaring functions as object properties
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
  //     // We csn destructure the obj in function arguments as well ! like {time= '20:00', address.....}
  orderDelivery: function (obj) {
    console.log(obj);
  },
  timings,
};

// console.log(restaurant);

// if(restaurant.timings && restaurant.timings.mon){
//     console.log(restaurant.timings.mon.open);
// }
// console.log(restaurant.timings?.mon?.open);

// const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// for(const day of days){
//     // To use variable name as property name, we use BRACKETS NOTATION
//     const open = restaurant.timings[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// OPTIONAL CHAINING ALSO WORKS FOR METHODS
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderFood?.(0,1) ?? 'Method does not exist');

// OPTIONAL CHAINING ALSO WORKS FOR ARRAYS
// const users = [
//     {name: 'Ayush', email: '123@wsnjd.com'}
// ]

// restaurant.orderPizza('mushrooms', 'onions', 'cheese', 'capsicum');
// restaurant.orderDelivery({time: '23:30', address: 'Via del sole, 21', mainIndex: 2, starterIndex: 2});

// let [first, ,second] = restaurant.food
// console.log(first, second);

// Swapping using destructuring
// [first, second] = [second, first]
// console.log(first, second);
// const [starter, main] = restaurant.order(2,0)
// console.log(starter, main);

// const arr = [1, 2, [3, 4]]
// const [a, ,b] = arr
// console.log(a, b);
// const [i, , [j, k]] = arr
// console.log(i, j, k);

// Default values
// const [p=1, q=1, r=1] = [8, 9]
// console.log(p,q,r);
// Default values for js objects
// const {menu = [], main: mainCourse, start: starters} = restaurant

// Mutating variables
// let a = 111
// let b = 999
// const obj = {a: 23, b: 7, c: 14};

//  ( ) are required to tell js that it is just destructuring bcs { } is considered as a code block
// ({a,b} = obj )
// console.log(a, b)

// Nested Objects
// const {tue: {open, close}} = restaurant.timings
// console.log(open, close);

// Iterables - arrays, strings, sets, maps NOT Objects
// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante roma'

// Rest operator
// spread bcs on RIGHT SIDE of =
// const arr = [1,2, ...[3,4]];

// Rest bcs on LEFT SIDE of =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, ,risotto, ...otherFood] = [...restaurant.main, ...restaurant.food]
// console.log(pizza, risotto, otherFood);

// const {thu, ...weekdays} = restaurant.timings;
// console.log(weekdays);

// Functions
// const add = function(...numbers){
// console.log(numbers);
//     let sum = 0;
//     for( let i = 0; i<numbers.length; i++ ){
//         sum += numbers[i];
//     }
//     console.log(sum);
// };

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// Short Circuiting
// can use any data type, return any data type
// console.log(3 || 'Ayush');
// console.log('' || 'Ayush');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || undefined);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// console.log('----AND----');
// console.log('Hello' && 23 && null && 'Ayush');
// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinach');
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// CODE CHALLENGE FOOTBALL GAME

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// function printGoals(...names){
//     for (const i of names) {
//         console.log(i);
//     }
//     console.log(`goals scored: ${names.length}`);
// }

//  for array destructuring use [ ], for object use { }

// game.players1 = [...game.players[0]];
// game.players2 = [...game.players[1]];
// console.log(game.players1, game.players2);

// let [gk, ...fieldPlayers] = game.players1;
// console.log(gk, fieldPlayers);
// let allPlayers = [...game.players1, ...game.players2];
// console.log(allPlayers);

// let players1Final = [...game.players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// let { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// printGoals(...game.scored);

// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');

// console.log([...game.players1.entries()]);

// OPTIONAL CHAINING
// if(restaurant.timings && restaurant.timings.mon){
//     console.log(restaurant.timings.mon.open);
// }
// console.log(restaurant.timings?.mon?.open);

// const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// for(const day of days){
//     // To use variable name as property name, we use BRACKETS NOTATION
//     const open = restaurant.timings[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// OPTIONAL CHAINING ALSO WORKS FOR METHODS
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderFood?.(0,1) ?? 'Method does not exist');

// OPTIONAL CHAINING ALSO WORKS FOR ARRAYS
// const users = [
//     {name: 'Ayush', email: '123@wsnjd.com'}
// ]

// console.log(users[0]?.name ?? 'user array empty');

// LOOPING OVER OBJECT KEYS, VALUES, ENTRIES

// property names
// const properties = Object.keys(timings);
// console.log(properties);

// for (const day of Object.keys(timings)){
//     console.log(day);
// }

// property values
// const values = Object.values(timings);
// console.log(values);

// Entire object
// const entries = Object.entries(timings);
// console.log(entries);

// for(const [day, {open, close}] of entries){
//     console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

// FOOTABLL CHALLENGE 2

// for(let i = 0; i<game.scored.length; i++){
//     console.log(`Goal ${i+1} ${game.scored[i]}`);
// }

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1} : ${player}`);
// }

// const oddVal = Object.values(game.odds);
// console.log(oddVal);
// let avgOdd = 0;
// for (const i of oddVal) {
//   avgOdd += i;
// }
// avgOdd = avgOdd / oddVal.length;
// console.log(avgOdd);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "Draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }

// let scorers = {};
// for (const i of game.scored) {
//   scorers[i] ? scorers[i]++ : (scorers[i] = 1);
// }
// console.log(scorers);

// SETS IN JAVASCRIPT
//  {}

// const orderSet = new Set([
//   "pasta",
//   "pizza",
//   "burger",
//   "milkshake",
//   "burger",
//   "milkshake",
//   "chicken-sandwich",
// ]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("pizza"));
// console.log(orderSet.has('potato'));  -- includes in array
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// orderSet.delete("burger");
// console.log(orderSet);

// There are no indexes in sets
// console.log(orderSet[3]); - o/p as undefined

// Sets are iterable
// for (const order of orderSet) console.log(order);
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = new Set(staff);
// console.log(staffUnique);

// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("ayushkumar").size);

// Set to array
// const uniqueStaffArray = [...new Set(staff)];
// console.log(uniqueStaffArray);

// Maps in JS
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open :D")
//   .set(false, "we are closed :(");

// console.log(rest);

// console.log(rest.get('name'));
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();
// TO USE [1,2] AS A KEY WE NEED TO DO THIS
// const arr = [1,2]
// rest.set(arr, 'Test')
// Using dom objects as keys
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1,2])); THIS WILL NOT WORK AS KEY[1,2] IS NOT SAME AS [1,2] IN THE HEAP
// console.log(rest.get(arr));

// Other way to populate the map when there are many values
// const question = new Map([
//   ['question', 'What is the best Programming lang.?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Python'],
//   [4, 'JS'],
//   ['correct', 4],
//   [true, 'Correct!'],
//   [false, 'try again :(']
// ]);

// console.log(question);
// Convert Object to maps
// const hoursMap = new Map(Object.entries(timings));
// console.log(hoursMap);
// console.log(Object.entries(timings));

// Iteration on Maps
// console.log(question.get('question'));
// for(const [key, value] of question){
//   if(typeof(key) === 'number' ){
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// const answer = Number(prompt('Enter your answer!'));

// console.log(question.get(question.get('correct') === answer ));

// Convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.values()]);
// console.log([...question.keys()]);

// CODING CHALLENGE
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
//   ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);


// gameEvents.delete(64);
// console.log(gameEvents);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened on an avg. of every ${time / gameEvents.size} minutes.`);
// for (const [key, value] of gameEvents) {
//   key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
// }

// STRINGS in javasript
// JavaScript strings are immutable.


// const airline = 'Air India';
// const plane = 'A221';

// console.log(airline[2]);
// STRING methods
// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('i'));
// console.log(airline.slice(4));
// console.log(airline.slice(0,2));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat = function(seat){
//B and E are middle seats
//   seat.slice(-1) === 'E' || seat.slice(-1) === 'B' ? console.log('Middle Seat') : console.log('not a middle seat');
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Behind the scenes, Js converts the string to object for performing the operation and then converts it back to the string.
// console.log(typeof new String('Ayush'));
// console.log(typeof new String('Ayush').slice(1));

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());
// console.log(airline.toLocaleUpperCase());
// console.log(airline.toLocaleLowerCase());


// const passenger = 'aYusH'; //Ayush
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = `${passengerLower[0].toUpperCase()}${passengerLower.slice(1)}`;
// console.log(passengerCorrect);

// const email = 'hello@gmail.io';
// const loginEmail = 'Hello@Gmail.IO \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// console.log(lowerEmail);
// trimstart and trimend also some methods introduced in ES2019
// const normalizedEmail = loginEmail.trim().toLowerCase();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceGB = '288,97£';
// const priceUS = priceGB.replace(',','.');
// console.log(priceUS);
// console.log(priceGB.replace('£', '$').replace(',','.'));

// const announcement = 'All passengers come to boarding door 23, boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));  replaceAll works only for es2021 (or later)

// work around for es2020 or earlier:
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('B'));

// const checkBaggage = function (items){
//   const baggage = items.toLowerCase();
//   console.log(baggage);
// }
// checkBaggage('I have a laptop , some food and a pocket kNiFe');
// checkBaggage('I have a caMEra, pair of socks');
// checkBaggage('I got guN for protection');

// String split and join
// console.log('a+very+nice+string'.split('+'));
// const [firstName, lastName] = 'Ayush Kumar'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// function capitalizeName(name){
//   const namesCapital = [];
//   const names = name.split(' ');
//   for(const n of names){
//     // namesCapital.push(n[0].toUpperCase()+n.slice(1));
//     namesCapital.push(n.replace(n[0],n[0].toUpperCase()));
//   }
//   console.log(namesCapital.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('ayush kumar');

// const message = 'Go to gate no. 23!';
// console.log(message.padStart(23,'+'));
// console.log('Ayush'.padStart(23,'+'));

// function padCreditCard(cardNum){
//   const lastFour = cardNum.toString().slice(-4);
//   const cardPadded = lastFour.padStart(cardNum.toString().length,'X');
//   console.log(cardPadded);
// }

// padCreditCard('2223423242');
// padCreditCard(2324776402073);
// Repeat method
// const message2 = 'Bad weather...All departures delayed...';
// console.log(message2.repeat(5));

// CODE CHALLENGE 4 STRING
// Test data
// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   underscoreToCamel(text);
// })



// function underscoreToCamel(value){
//   let valArr = value.split('\n');
//   let count = 1;
//   let a = [];
//   console.log(valArr);
// let newVal;
// for(let i of valArr){
//   i = i.toLowerCase().trim();
//   const [first, second] = i.split('_')
// console.log(i);
//   i = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//   console.log(i.padEnd(i.length + count, '£'));
//   count += 1;
// }
// console.log(valArr);

// console.log(newVal);
// }


// FUNCTIONS PART 2 - SECTION 10
// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
// numPassengers = numPassengers || 1;
// price = 199 * numPassengers;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const ayush = {
//   name: 'Ayush Kumar',
//   passport: 3245452324
// }

// const checkIn = function(flightNum, passenger){
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if(passenger.passport === 3245452324){
//     alert('Checked In');
//   }else{
//     alert('Wrong Passport!')
//   }
// };

// Primitive vaues do not change on re-assigning
// checkIn(flight, ayush);
// console.log(flight);
// console.log(ayush);

// JAVASCRIPT DOES NOT HAVE PASS BY REFERENCE

// const newPassport = function(person){
//   person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(ayush);
// checkIn(flight, ayush);

// First Class functions and Higher Order functions
// const oneWord = function(str){
//   return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(),...others].join(' ');
// }

// Higher Order function
// const transformer = function(str,fn){
//   console.log(fn(str));
// }

// transformer('hello world!',upperFirstWord);
// transformer('hello world!',oneWord);
// console.log(oneWord());

// const high5 = function(){
//   console.log("Hi");
// };

// ['jonas', 'Martha', 'Adam'].forEach(high5);

// functions returning functions
// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet('Hey');
// greeterHey('Ayush');
// or we can do like this
// greet('Hey')('Ayush');

// const greet = (greeting) => 
//   (name) => {
//     console.log(`${greeting} ${name}`);
//   }
// greet('Hey')('Ayush');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode }${flightNum}`,
      name
    });
  },
};

// lufthansa.book(239, "Ayush Kumar");
// lufthansa.book(439, "Ayush Kumar");
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: []
// }

// IMPORTANT for BIND, CALL, APPLY
// const book = lufthansa.book;

// in strict mode, for a regular function call, this keyword points to undefined
// THIS keyword depends on how the function is called
// book(23, 'Ayush Kumar'); deos not work

// USING CALL METHOD
// book.call(eurowings,23, 'Ayush Kumar');
// console.log(eurowings);
// book.call(lufthansa, 239, 'Ayush');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airline',
//   iataCode: 'LX',
//   bookings: []
// }

// book.call(swiss, 367, 'Mary Cooper');
// console.log(swiss.bookings);

// USING APPLY METHOD
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// Same as above line, apply not used much now
// book.call(swiss, ...flightData);
// console.log(swiss);

// USING BIND METHOD
// const bookEw = book.bind(eurowings);
// const bookLh = book.bind(lufthansa);
// const bookLx = book.bind(swiss);
// bookEw(23, 'Steven');

// Setting first argument in advance
// const bookEw23 = book.bind(eurowings, 23);
// bookEw23('Ayush Kumar');
// bookEw23('Jonas');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

document.querySelector(".buy").addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application of BIND method (Pre-set parameters)+
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

function calcTax(rate) {
  return function totalVat(value) {
    console.log(value + value * rate);
  }
}

calcTax(0.23)(100);

// IMPORTANT

// Use.bind() when you want that
// function to later be called with a certain context, useful in events.Use.call() or.apply() when you want to invoke the
// function immediately, and modify the context.

// CODING CHALLENGE
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let ans = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option in Number)`));
    ans >= 0 && ans <= 3 ? this.answers[ans] += 1 : alert('Wrong input! click on answer button again');
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array' || type === 'Array') {
      console.log(this.answers);
    } else if (type === 'string' || type === 'String') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
document.querySelector('.answers').addEventListener('click', poll.displayResults.bind(poll, 'string'));

poll.displayResults.call({
  answers: [5, 2, 3]
}, 'string');

// ***************************************** OOPS *******************************************
// const tipCalc = function(val){
//     let tip
//     if(val >= 50 && val <=300){
//         tip = (0.15 * val).toFixed(2)
//     }else if((val >= 0 && val < 50 ) || (val > 300)){
//         tip = (0.20 * val).toFixed(2)
//     }
//     return tip
// }

// const BillCalc = (arrBill, tips) => {
//     const val1 = arrBill[0]
//     const val2 = arrBill[1]
//     const val3 = arrBill[2]
//     tips.push(tipCalc(val1))
//     tips.push(tipCalc(val2))
//     tips.push(tipCalc(val3))
//     const total = [Number(val1) + Number(tips[0]), Number(val2) + Number(tips[1]), Number(val3) + Number(tips[2])]
//     return total
// }

// const totalBill = BillCalc(arrBill, tips)
// console.log(arrBill, tips, totalBill);

// OBJECTS
// const person = {
//     name: 'Abc',
//     id: 1,
//     friends: ["a", "b", "c"]
// }

// console.log(person.name);
// console.log(`${person.name} has ${person.friends.length} friends and his best friend is ${person.friends[0]}`);

// const mark = {
//     name: "Mark",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI = (this.mass) / (this.height ** 2)
//     }
// }

// const john = {
//     nam: "John",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI = (this.mass) / (this.height ** 2)
//     }
// }

// mark.calcBMI()
// john.calcBMI()
// console.log(`${ john.BMI > mark.BMI ? "John has greater BMI" : "Mark has greater BMI" }`);

// const user1 = new Person('Jonas', 1991)
// // console.log(user1 instanceof Person);

// console.log(Person.prototype);

// Person.prototype.calcAge =function(){
//     console.log(2037 - this.dob);
// }

// user1.calcAge()
// console.log(user1.__proto__);
// console.log(Person.prototype);
// console.log(user1.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(user1));
// console.log(user1.hasOwnProperty('calcAge'));

// console.log(user1.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [1,2,3,4]
// console.log(arr.__proto__);
// const str = 'abc'
// console.log(str.__proto__);

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed
// }

// Car.prototype.brake = function(){
//     this.speed = this.speed - 5;
// }
// Car.prototype.accelerate = function(){
//     this.speed = this.speed + 10;
// }

// const Car1 = new Car('BMW', 120);
// Car1.brake();
// console.log(Car1.speed);
// Car1.accelerate();
// console.log(Car1.speed);

// class PersonCl {
//     constructor(fullName, dob){
//         this.fullName = fullName;
//         this.dob = dob;
//     }

//     calcAge(){
//         console.log(2037 - this.dob);
//     }

//     get age(){
//         return 2037 - this.dob;
//     }

//     set fullName(name){
//         if(name.includes(' ')) this._fullName = name;
//         else alert('Please enter full name');
//     }

//     get fullName(){
//         return this._fullName;
//     }

//     static hey(){
//         console.log("Hey there");
//     }

// }

// const jessica = new PersonCl('Jessica Davis', 1999);
// jessica.calcAge()
// console.log(jessica.age);

// const PersonProto = {

//     calcAge(){
//         console.log(2036 - this.dob);
//     },

//     init(firstName, dob){
//         this.firstName = firstName;
//         this.dob = dob;
//     }

// }

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.dob = 1991;
// console.log(steven);
// steven.calcAge()
// console.log(steven.__proto__);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1998);
// sarah.calcAge()

// class Car{
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     set speedUS(speed){
//         this.speed = speed * 1.6
//     }

//     get speedUS(){
//         return this.speed / 1.6;
//     }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.speed = 130;
// console.log(ford);
// console.log(ford.speedUS);
// ford.speedUS = 90;
// console.log(ford);

// const Person = function(firstName, dob){
//     this.firstName = firstName;
//     this.dob = dob;
//     console.log(this);
// }

// Person.prototype.calcAge =function(){
//     console.log(2037 - this.dob);
// }

// const Student = function(firstName, dob, course){
//     Person.call(this, firstName, dob)
//     this.course = course
// }

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName}`);
// }

// const mike = new Student('Mike', 2020, 'Computer Science')
// console.log(mike);
// mike.introduce()
// mike.calcAge()

// Student.prototype.constructor = Student;

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.dir(Student.prototype.constructor);

// const Car = function(make, speed){
//     this.speed = speed
//     this.make = make
// }

// Car.prototype.brake = function(){
//     this.speed = this.speed - 5;
//     this.car
// }
// Car.prototype.accelerate = function(){
//     this.speed = this.speed + 10;
// }

// const ElectricCar = function(make, speed, charge){
//     Car.call(this, make, speed)
//     this.charge = charge
// }

// ElectricCar.prototype = Object.create(Car.prototype)

// ElectricCar.prototype.accelerate = function(){
//     this.speed += 20
//     this.charge -= 1
//     console.log(`Tesla running at ${this.speed}km/h with battery ${this.charge}%`);
// }

// ElectricCar.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo
// }

// const Tesla = new ElectricCar('Tesla', 90, 64)
// ElectricCar.prototype.constructor = ElectricCar;
// Tesla.accelerate();
// Tesla.chargeBattery(90);
// Tesla.accelerate();
// console.dir(ElectricCar.prototype.constructor);

// class PersonCl {
//     constructor(fullName, dob){
//         this.fullName = fullName;
//         this.dob = dob;
//     }

//     calcAge(){
//         console.log(2037 - this.dob);
//     }

//     get age(){
//         return 2037 - this.dob;
//     }

//     set fullName(name){
//         if(name.includes(' ')) this._fullName = name;
//         else alert('Please enter full name');
//     }

//     get fullName(){
//         return this._fullName;
//     }

//     static hey(){
//         console.log("Hey there");
//     }

// }

// class StudentCl extends PersonCl{
//     constructor(fullName, dob, course){
//         super(fullName, dob)
//         this.course = course
//     }

//     introduce(){
//         console.log(`Hi, I am ${this.fullName}`);
//     }

// }

// const martha = new StudentCl('Martha Jones', 1999, 'Comp Sci')
// martha.introduce()
// console.dir(StudentCl.prototype.constructor);

// Inheritance between classes using Object.create()

// const PersonProto = {
//     calcAge(){
//         console.log(2037 - this.dob);
//     },
//     init(firstName, dob){
//         this.firstName = firstName
//         this.dob = dob
//     }
// }

// const steven = Object.create(PersonProto)
// const StudentProto = Object.create(PersonProto)
// StudentProto.init = function(firstName, dob, course){
//     PersonProto.init.call(this, firstName, dob)
//     this.course = course
// }

// StudentProto.introduce = function(){
//     console.log(`Hi , I am ${this.firstName}`);
// }

// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, 'Comp Sci')
// jay.introduce()
// jay.calcAge()

// Public fields , methods
// Private fields , methods

// class Account{
// Public fields(instances)
// locale = navigator.language;

// Private fields
// #movements = [];
// #pin;

// constructor(owner, currency, pin){
//     this.owner = owner
//     this.currency = currency
// Protected
// this.#pin = pin
// this._movements = []
// this.locale = navigator.language
// }

// Public methods
// getMovements(){
// return this.#movements
// }

// deposit(val){
//     this.#movements.push(val)
//     return this
// }
// withdraw(val){
//     this.deposit(-val)
//     return this
// }
// requestLoan(val){
//     if(this._approveLoan(val)){
//         this.deposit(val)
//         console.log('Loan approved');
//     return this
//     }
// }

// Private Methods
// #approvedLoan()
// _approveLoan(val){
//     return true
// }

// Static Method
//     static helper(){
//         console.log('Helper');
//     }
// }

// const acc1 = new Account('Jonas', 'Euro', 1111)
// acc1.deposit(400)
// acc1.withdraw(130)
// acc1.requestLoan(1000)
// console.log(acc1.getMovements())
// console.log(acc1);
// console.log(acc1.#movements);
// Account.helper()

// Chaining
// acc1.deposit(300).deposit(200).withdraw(320).requestLoan(250000).withdraw(4000)
// console.log(acc1);

// class Car{
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     set speedUS(speed){
//         this.speed = speed * 1.6
//     }

//     get speedUS(){
//         return this.speed / 1.6;
//     }

//     accelerate(){
//         this.speed += 10
//     }
//     brake(){
//         this.speed -= 10
//         return this
//     }
// }

// class EVCl extends Car{
//     #charge;
//     constructor(make, speed, charge){
//         super(make, speed)
//         this.#charge = charge
//     }
//     accelerate(){
//         this.speed += 20
//         this.#charge -=1
//         return this
//     }
//     chargeBattery(chargeTo){
//         this.#charge = chargeTo
//         return this
//     }
// }

// const ev1 = new EVCl('TeslaX', 110, 74,);
// console.log(ev1);
// ev1.chargeBattery(95).accelerate().brake().accelerate()
// console.log(ev1);
// console.log(ev1.speedUS);

// const arr = [1,2,3,4,5]
// arr.forEach(function(ele){
//     console.log(ele);
// })
// console.log(arr.pop());
// console.log((arr.shift()))

// let myLovelyString = "Harry is a good boy good good Harry";
// let d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

// const obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// const jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// const parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// function Vehicle(){
// this.vehicleName = this.vehicleName
// throw new Error("Cant create object of abstract class")
// }

// Vehicle.prototype.display = function(){
// return this.vehicleName
// }

// var v1 = new Vehicle()