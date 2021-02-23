var people = [
	{
		name: 'Bob',
		coolnessScore: 23,
	},
	{
		name: 'Jen',
		coolnessScore: 40,
	},
	{
		name: 'James',
		coolnessScore: 15.6,
	},
	{
		name: 'Isolde',
		coolnessScore: 17,
	},
];

var isCool = function (person) {
	return person.coolnessScore > 20;
};

// answer here

var coolPeople = people.filter(p=>{
    return isCool(p)
})

console.log(coolPeople)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var misc = [
	3,
	'true',
	{ a: 1, b: 2 },
	7,
	[1, 2, 3],
	['a', 'b', 'c'],
	'my favorite string',
	59.09,
];


// answer here

var filterStrings = misc.filter(s=>{
    // we use typeof to check if each array element is string or not
    return typeof s == 'string'
})

console.log(filterStrings)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var foods = ['pizza', 'tacos', 'ice cream', 'sushi'];

// answer here:

foods.forEach(f=>{
    console.log(`I like ${f}`)
})

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var foods = [
	{ name: 'Pizza', level: 'very' },
	{ name: 'Tacos', level: 'mostly' },
	{ name: 'Cottage Cheese', level: 'not very' },
];

// answer here:

foods.forEach(f=>{
    console.log(`${f.name} is ${f.level} delicious`)
})

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var mneumonics = [
	'My Very Excellent Mother Just Sent Me Nine Pizzas',
	'Please Excuse My Dear Aunt Sally',
	'Every Good Boy Does Fine',
];

// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// answer here!

var mneumoicSplit = mneumonics.map(m=>{
    return m.split(' ')
})

console.log(mneumoicSplit)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Write something that takes the above array and returns the product of all the numbers
// via multiplication

// answer here!

var productOfNumbers = numbers.reduce((prev,curr)=>{
    // will take previous number and muliply it with current and so on
    return prev * curr
})

console.log(productOfNumbers)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Write an expression using higher-order array methods (say, filter and reduce)
// to compute the total value of the machines in the inventory array.

const inventory = [
	{ type: 'machine', value: 5000 },
	{ type: 'machine', value: 650 },
	{ type: 'duck', value: 10 },
	{ type: 'furniture', value: 1200 },
	{ type: 'machine', value: 77 },
];

// answer here!

//To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

let initialValue = 0
let totalMachineValue = inventory.reduce((prev, curr)=>{
    return prev + curr.value
},initialValue);

console.log(totalMachineValue);


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var phoneBook = [
	{ Abe: '111-111-1111' },
	{ Bob: '222-222-2222' },
	{ Cam: '333-333-3333' },
	{ Dan: '444-444-4444' },
	{ Ern: '555-555-5555' },
	{ Fry: '111-111-1111' },
	{ Gil: '222-222-2222' },
	{ Hal: '333-333-3333' },
	{ Ike: '444-444-4444' },
	{ Jim: '555-555-5555' },
	{ Kip: '111-111-1111' },
	{ Liv: '222-222-2222' },
	{ Mia: '333-333-3333' },
	{ Nik: '444-444-4444' },
	{ Oli: '555-555-5555' },
	{ Pam: '111-111-1111' },
	{ Qiq: '222-222-2222' },
	{ Rob: '333-333-3333' },
	{ Stu: '444-444-4444' },
	{ Tad: '555-555-5555' },
	{ Uwe: '111-111-1111' },
	{ Val: '222-222-2222' },
	{ Wil: '333-333-3333' },
	{ Xiu: '444-444-4444' },
	{ Yam: '555-555-5555' },
	{ Zed: '111-111-1111' },
];

// Take the phonebook above and use map to return a new phonebook that includes a country-code that matches the rest of the phone number.
// For example, the 0th element of the new array should be {Abe: "1-111-111-1111"}

//answer here!

var newPhoneBook = phoneBook.map(x => {
    let obj = {};
    let extension = (x[`${Object.keys(x)[0]}`]).split('')[0]
    obj[Object.keys(x)[0]] = `${extension}-` + x[`${Object.keys(x)[0]}`]
    return obj
  });

  console.log(newPhoneBook)