let age = 25;
let year =2019;

console.log(age,year);

age = 30;
console.log(age);

const points = 100;
//points = 50;
console.log(points); //const cannot be changed

var score = 75;
console.log(score);


//string

console.log('hello world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

//string concatenation

let fullName = firstName + '' + lastName;
console.log(fullName);

//getting characters

console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase;
console.log(result,fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods

let emails = 'mario@thenetninja.co.uk';

//let result = emails.lastIndexOf('n');

//let results = emails.slice(2,5);

//let results = email.substr(4,10);

//let results = email.replace('m','w')

let results = email.replace('n','w')
console.log(result);

//number

let radius = 10;
const pi = 3.14;

//console.log(radius,pi);

console.log(10/2);

//let res = result = radius % 3;

//let res = pi*radius**2;

let likes = 10;

//likes = likes + 1;
//likes ++;
//likes --;

//likes += 10;
//likes -= 5

console.log(likes);

//Nan - not a number

//console.log(5 * 'hello')



//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likess = 30;

//concatenation way
//let resultss = 'the b;og called' + title + ' by ' + author + ' has ' + likess +' likes ' ;
//console.log(result);

//template string way
let resultss = ' the blog called ${title} by ${author} has ${likes} likes' ;
console.log(resultss);



let ninjas = ['shaun','ryu','chun-li'];

//ninjas[1] = 'ken';
//console.log(ninjas[1]);

let ages = [20,25,30,35]
console.log(ages[2]);

let random = ['shaun','crystal',30,20];
console.log.apply(random);

console.log(ninjas.lenth);

//array methods

let resultsss = ninjas.join('-');

console.log(resultsss);


//true && false

let ema = 'luigi@thenetninja.co.uk';
let names = ['mario','luigi','toad'];

//let result = email.includes('!');
//let result = names.includes('bowser');

//console.log(result)

//comparison operators

let ag = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 25);