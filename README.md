# javascript-exercise

## Exercise - 1
**Create a Javascript Function used to return next fibonacci number every time you call it. Please do not expose any variable as we do not want any external script on the page to change those internal variables**

**Hint:  Make use of closures and “private” variables.**

[Click here for Solution][1]

**Follow-up: Incorporate above function within a js library and use it in a simple HTML page to display returned value every time a user clicks on a NEXT button and reset numbers when click on RESET. The HTML page will have <html>, <head> and <body> tags and also 3 additional HTML elements, a NEXT button, a RESET button and a inline element to display returned value of fibonacci() from both next and reset buttons**

<a href="https://vinayakhegde.github.io/javascript-exercise/index.html" target="_blank">
Click here for Solution</a>

****

## Exercise - 2
**Create a set of function constructors to describe job titles and properties within a Company.**
*	__Employee__ as base object having two properties: “name”(empty string by default) and “department”(“general” by default). 
*	__Manager__ inherits from Employee and adds a new property called “reports” as Array. 
*	__WorkBee__ inherits from Employee and adds a new property called “projectName” as empty String. 
*	__SalesPerson__ inherits from WorkBee and overwrites department name to “sales”, project name to “internal”, plus adds a new property called “revenue” as Number.
*	__SoftwareEngineer__ inherits from WorkBee and overwrites department name to “tech”, project name to “App”, plus adds a new property called techSkills as Array. 

**Hint: Please make use of Prototypes to inherit from a function constructor to another.**

<a href="../master/src/q2.js" target="_blank">Click here for Solution</a>

****


## Exercise - 3 
**What does the follow code print and why?**

````javascript
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
````
<a href="../master/src/q3.js" target="_blank">Click here for Solution</a>

****

## Exercise - 4
**What will the following code output to the console and why?**

````javascript
var hero = {
    _name: 'John Doe',
    getName: function (){
        return this._name;
    }
};

var stolenName= hero.getName;

console.log(stolenName());
console.log(hero.getName());

````

<a href="../master/src/q4.js" target="_blank">Click here for Solution</a>

****

## Exercise - 5
**What will the following code output to the console and why?**

````javascript
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);

````
**Follow-up: What if we remove “function a() {}” from the code**

<a href="../master/src/q5.js" target="_blank">Click here for Solution</a>

****

## Exercise - 6
**What will the following code output to the console and why?**

````javascript
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

````

<a href="../master/src/q6.js" target="_blank">Click here for Solution</a>

****

## Exercise - 7
**Create a Javascript native function attached to Object to check if two objects are equal. Name this function “isEqual” and do not overwrite this if another function already exists with same name attached to Object**

<a href="../master/src/q7.js" target="_blank">Click here for Solution</a>

****

## Exercise - 8
**What will the following code output to the console and why? What is wrong with this code and how you can improve it (if needed)?**

````javascript
(function() {
    var a = b = 5;
})();

console.log(b);

````

<a href="../master/src/q8.js" target="_blank">Click here for Solution</a>

****

## Exercise - 9
**How we can preserve immutability of the following list of heroes?**

````javascript
const heroes = [
  { name: 'Wolverine', family: 'Marvel', isEvil: false },
  { name: 'Deadpool', family: 'Marvel', isEvil: false },
  { name: 'Magneto', family: 'Marvel', isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
  { name: 'Batman', family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn', family: 'DC Comics', isEvil: true  },
  { name: 'Legolas', family: 'Tolkien', isEvil: false },
  { name: 'Gandalf', family: 'Tolkien', isEvil: false },
  { name: 'Saruman', family: 'Tolkien', isEvil: true  }
]

const newHeroes = heroes.map(h => {
  h.name = h.name.toUpperCase()
  return h
});

````

<a href="../master/src/q9.js" target="_blank">Click here for Solution</a>

****
[1] : ../master/src/q1.js "Solution"