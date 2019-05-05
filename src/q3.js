/**
 * What does the follow code print and why?
 * Follow-up: How would you adjust this to print 0, 1, 2, 3, … 9?
 */
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

// It prints 10 times 10.
// setTimeout callback starts its execution only after completing the for loop.
// once completing for loop, value of i is 10. and 10 callback execution will take place


// to print 0-9, there is two possible solution. 

// solution 1 - wrap the setTimeout by IIFE if you dont want to still use the var keyword

for(var i = 0; i < 10; i++) {
    // by passing i into IIFE, we are creating a new scope in each iteration
    (function(i){
        setTimeout(function() {
            console.log(i);
        }, 0);
    }(i));
}

// solution 2 - using let keyword 
for(var i = 0; i < 10; i++) {
    // we are creating a new scopeed variable j, in each iteration and that will be used in timeout callback
    let j = i;
    setTimeout(function() {
        console.log(j);
    }, 0);
}

for(let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}