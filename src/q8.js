/**
 * What will the following code output to the console and why? 
 * What is wrong with this code and how you can improve it (if needed)?
 */

(function() {
    var a = b = 5;
})();

console.log(b); // 5

// Explanation:
/**
 * Any variable defined var, let, const will become a global variable.
 * above code is simillar to following code
 */

b = 5;
(function() {
    var a = b;
})();

/**
 * b is globally scoped but a is block scoped to IIFE
 */

// to imptove the code, declare 'use strict'; at the top;
// in strict mode, usaging the variable without declaring is prohibited.
'use strict';
(function() {
    var a = b = 5; // ReferenceError - b is not defined
})();

// after refactoring
'use strict';
(function() {
    var a, b;
    a = b = 5;
})();