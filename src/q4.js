/**
 * What will the following code output to the console and why?
 */
var hero = {
    _name: 'John Doe',
    getName: function (){
        // this keyword refers to the context calling the function.
        return this._name;
    }
};

var stolenName= hero.getName;

console.log(stolenName()); // undefined
// window context calling getName(), 'this' keyword refers to 'window'. 

console.log(hero.getName()); // John Doe
// hero object calling getName(), 'this' keyword refers to 'hero' object