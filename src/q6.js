/**
 * What will the following code output to the console and why?
 */

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script end');


// Ourput of the above will  be:

// script start
// script end
// promise1
// prommise2
// setTimeout

/** Explanation:
 * script execution starts from the line console.log('script start'); runtime adds it to call stack.
 * 
 * When execution hits setTimeout(), it creates timer at runtime and add the callback to Task Queue of JS runtime
 * Execution of setTimeout is pending at this stage.
 * 
 * When it hits the promise, all the callbacks added to micro task queue.
 * executionn of promise is pending at this stage.
 * 
 * then last line add to call stack.
 * 
 * Everying in the call stack will be executed first.
 * // script start
 * // script end
 *  
 * Once callstack exhausted, verything from micro task queue
 * // promise1
 * // prommise2
 * 
 * finally, everything from task queue executes
 * // setTimeout
 */