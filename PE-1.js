//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//Benjamin Gaston
//bggaston@gmail.com
//twitter @brownhound

let cap = 1000;
let divThrees = 0;
let divFives = 0;
let divBoth = 0;

//looping modulo on threes, if no remainder, add it to the stack
for(let i = 3; i < cap; i++){
    if(i % 3 == 0){
        divThrees = divThrees + i;
    }
}

//looping modulo on fives, if no remainder add it to the stack
for(let i = 5; i < cap; i++){
    if(i % 5 == 0){
        divFives = divFives + i;
    }
}

//find the doubles and remove
for(let i = 3; i < cap; i++){
    if(i % 3 == 0 && i % 5 == 0){
        divBoth = divBoth + i;
    }
}


console.log(divThrees + divFives - divBoth);

//learning notes
//note 1--read closely, LESS than 1000, cap at 999
//note 2--account for numbers that are both (i.e. 15, div by 5 and 3)