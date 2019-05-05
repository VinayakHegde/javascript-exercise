/**
 * What will the following code output to the console and why?
 * Follow-up: What if we remove “function a() {}” from the code
 */

var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 

console.log(a); // 1

// this is because of Hoisting the function declaration
// above code can be understood as following code:
var a = 1; 
function b() { 
    // function declatarion hoisted.
    // variable a is now block scoped - function b block.
    function a() {}  

    // value assignment takes after hoisting.
    a = 10; 

    // console.log(a) -> 10, however outside of block b, a is still 1;
    return;
} 
b(); 


// if we remove function a(){}, then
var a = 1; 
function b() { 
    a = 10; 
    return; 
} 
b();

// a is 10 now. 
console.log(a); // 10