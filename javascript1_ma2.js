//MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance



function Dog() {       // creates the function "dog"
    this.make = "Chihuahua"     // the dog is now a "chihuahua"
}

Dog.prototype.breed = function() {
    console.log("I inherit "+ this.make +" from my parent.");
};

var terrier = new Dog();   // a new breed is created 
terrier.breed();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     // this is the array of numbers
console.log(numbers.length);      // prints out the length of the array

console.log(numbers.slice(6));    // slices the 5th number 

//3. Delete the last number in the array that you created above.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];      // this is the array

numbers.pop();      // removes the last number from the numbers in the array 


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

// a string is created with a variable
var str = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
var mapObj = {   
    Strawberries:"Bananas",
    Strawberry:"banana"
};
str = str.replace(/strawberries|strawberry/gi, function(matched){     // replaces the string with the new word
    return mapObj[matched];                
});


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.




//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.




var people = [    // creates an array with three people
    {person: 'Sarah'},
    {person: 'Paul'},
    {person: 'Melissa'},
]

var person = people.filter(function(person){    // filters the array
    return (person.person === "Sarah");      // returns the person from the array with the name "Sarah"
})

console.log(person);     // prints out the name of the person


//7. Create a simple function that logs the date.



var d = new Date();     // gets current date automatically

console.log(d);     // prints out current date