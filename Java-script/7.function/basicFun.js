// function -> perform to specific

//hoisting

// square('10' , '5');     //function call

// definition

// function square(a , b){
//     console.log(a*b);
// }


// basic function

// function add(a , b)
// {
//     return a + b;
// }

// console.log(add(5,15));
// let z = add(10,15);
// console.log(z);


// anonymous function         /function as expression

// let product = function(x , y){
//     return x * y;
// };

// console.log(product(11,2));


// IIFE
// let x = (function hello(a , b)
// {
//     return(a - b);
// })("10" , 15);
// console.log(x);

// (function hello()
// {
//     console.log("hello World");
// })();


// arrow function

// function add(a,b)
// {
//     return a + b;
// }
// console.log(add(10,5));

// let add = (a,b) => {
//     return a+b;
// }
// let add = (a,b) => a+b;
// console.log(add(20,30));


// function construction

// let hello = new function("a" , "b" , "return a*b");
// console.log(hello(12 , 5));


// Function are Object

// function hello(a,b,c,d){
//     return arguments.length;
// }
// console.log(hello(1,2,3,4));
// console.log(hello(1,2,3).toString());


// Function Rest parameters

// function add(...args){
//     let sum=0;
//     for(let i=0; i<args.length; i++)
//     sum = sum + args[i];

//     return sum;
// };
// console.log(add(2,3,4,5,6));


// Arguments Object

// function add(){
//     let sum = 0;
//     for(let i = 0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// };
// console.log(add(1,123,500,44,88));


// Generator Function

function* generate(){
    yield 1;    
    yield 2;    
    yield 3;
    yield 4;
    return 5;   
}

let generator = generate();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);




