/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global, The value of the scope is the entire window/console
* 2. Implicit binding, when a function is called by a preceding dot, the object before that dot is this.
* 3. New binding, Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding, Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name) {
    console.log(this);
    return name;
  }
  myName("Nyomi");

// Principle 2

// code example for Implicit Binding
var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
};
MyObject.prototype.doStuff = function (action) {
    console.log(this.name + 'is' + action + '!');
}

var obj= new MyObject();

obj.doStuff('awesome');


// Principle 3

// code example for New Binding


// Principle 4

// code example for Explicit Binding