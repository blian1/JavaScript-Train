//for loop

/* for(let i = 0; i <5;i++){
    console.log('in loop :',i);

}

console.log('loop finished');
*/

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0 ; i < names.length ; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// while loop
/* 
let i = 0;
while(i < 5){
    console.log('in loop: ', i);
    i++;
}
*/
/*
let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
*/

//do while
let i = 4;

do{
    console.log('val of i is :', i);
    i++
}while(i < 5);

// if statement
const age = 25;

if(age > 20){
    console.log('You are over 20 years old');
}

const ninjas = ['shaun','ryu','chun-li','yoshi'];

if(ninjas.length > 4){
    console.log("That is a lot of ninjas");
}

const password = 'pass'

if(password.length >= 12){
    console.log('that password is might strong')
}else if(password.length >= 8){
    console.log('That password is enough long!')
}else{
    console.log('That password is not enough long!')
}



//break continue

const scores = [50,25,0,30,100,20,10];

for(let i = 0; i < score.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats,you got the top score!');
        break;
    }
}


//switch statement
const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A');
    case 'B':
        console.log('you got an B');
    default:
        console.log('not a vaild grade');
}


//variables & block scope
const ages =30;

if(ture){
    const ages =40;
    const names = 'shuan';
    console.log('inside 1st code block: ', ages, names);

    if(ture){
        const ages =50
        console.log('inside 2st code block: ', ages)
        var test = hello
    }
}

console.log('outside code block: ', ages,names,test);