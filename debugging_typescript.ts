// 1. Setting Types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9'; 
// FIX: The data type of myString is a string and it was trying to pass a number. Put '' around the 9 to pass it as a string.

// 2. Setting the types for function parameters
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello('9')); 
// FIX: parameter being passed was not of the type 'string'. Put the 9 in '' to fix.

// 3. Optional parameters
function fullName(firstName: string, lastName: string, middleName?: string){
    if(middleName !== undefined){
        return `${firstName} ${middleName} ${lastName}`;
    }
    else{
        return `${firstName} ${lastName}`;
    }
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));
// FIX: Make middleName an optional parameter. Add an if statement to check if middleName is defined or undefined to return correct name.

// 4. Interfaces and function parameters
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
// FIX: The variable belts in the object jay, had a typo.

// 5. Classes and function parameters
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja('Shane', 'Smith');
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja('Alan', 'Turing')
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));
// FIX: Made shane and turing an instance of ninja.

// 6. Arrow functions
var increment = x => x + 1;
console.log(increment(3));
var square = x => x * x;
console.log(square(4));
// FIX: Needed to wrap the param in parens, and remove braces
var multiply = (x, y) => x * y;
// FIX: This needed to be turned into a function
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
console.log(math(4, 5));

// 7. Arrow functions and "this"
class Elephant {
   constructor(public age: number){}
// FIX: Interference allows us to make use of the incoming 'age' parameter
   birthday = ()=>{
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.







