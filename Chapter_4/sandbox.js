//function declearation
/*
function greet(){
    console.log('hello there');
}

//funcation expression
const speak = function(){
    console.log('good day');
};

greet();
speak();
*/

//arguments & parameters
/*
const speak = function(names = 'luigi', time = 'night'){
    console.log(`good ${time} ${names}`);
};

speak();
speak('shuan', 'day');
*/


//return value

//const speak = function(name = 'luigi', time = 'night'){
//      console.log(`good $time $name`);  
// };

/*
const calcaArea = function(radius){
    let area = 3.14 * radius ** 2
    //console.log(area);
    return area
}

const a = calcaArea(7);
console.log(a);
*/

//regular function
//const calcaArea = function(radius){
//    let area = 3.14 * radius ** 2
//}

//arrow function
/*
const calcaArea = radius =>{
    return 3.14 * radius ** 2
}

const a = calcaArea(7);
console.log(a);
*/

//method 

const names = 'shaun';

let result = names.toUpperCase();
console.log(result);


//callback & foreach
/*
const myFunc = (callbackFunc)=>{
    let value = 50;
    callbackFunc(value)
}

myFunc(function(value) {
    console.log(value);
});

let people =[1,2,3,4]

people.forEach(function(person){
    console.log(person);
})
*/
//get reference to ul
const ul = document.querySelector('.people');

const people =['mario','luigi','Boyuan Lian'];

let html = ``;

people.forEach(function(person){
    html += `<li style ="color: purple">${person}</li>`
})

ul.innerHTML = html;