/**
 * Create a Javascript native function attached to Object to check if two objects are equal. 
 * Name this function “isEqual” and do not overwrite this if another function already exists with same name attached to Object.
 */
if(!Object.isEqual){
    Object.prototype.isEqual = function(obj){
        // if agrument is not an object - return false
        if(!obj) return false;

        // loop througn each property of the current object
        for (let property in this) {
            // value type checking - we know "2" not exactly queals to 2
            if(typeof(this[property]) !== typeof(obj[property])) return false;

            // value null check
            if((this[property]===null) !== (obj[property]===null)) return false;
            
            switch (typeof(this[property])) {
                case 'undefined':
                    if (typeof(obj[property]) != 'undefined') 
                        return false;
                case 'object':
                // deep checking
                    if(this[property]!==null 
                        && obj[property]!==null 
                        && (this[property].constructor.toString() !== obj[property].constructor.toString() 
                        || !this[property].isEqual(obj[property]))) 
                        return false;
                case 'function':
                    if (property != 'isEqual' 
                        && this[property].toString() != obj[property].toString()) 
                        return false;
                default:
                    if (this[property] !== obj[property]) 
                        return false;
            }
        }
        return true;
    }
}

/**
 * Example
 */
var obj1 = {
    name: "John",
    age: 10,
    info: {
        address: 'some place',
        tel: '0123456789',
        hobbies: ['1', '2']
    }
}

var obj2 = {
    name: "John",
    age: 10,
    info: {
        address: 'some place',
        tel: '0123456789',
        hobbies: ['1', '2']
    }
}

var smallObj = {
    name: "John",
    age: 10
}

var obj3 = obj2;
var obj4 = obj1;

console.log('smallObj.isEqual(obj1)', smallObj.isEqual(obj1)); //return false;
console.log('smallObj.isEqual({name: "John"})', smallObj.isEqual({name: "John"})); //return false;
console.log('obj1.isEqual(undefined)', obj1.isEqual(undefined)); //return false;
console.log('obj2.isEqual(obj1)', obj2.isEqual(obj1)); //returns true;
console.log('obj3.isEqual(obj1)', obj3.isEqual(obj1)); //returns true;
console.log('obj4.isEqual(obj1)', obj4.isEqual(obj1)); //returns true;
